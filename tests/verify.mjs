import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath,pathToFileURL} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const site=path.join(root,fs.existsSync(path.join(root,'docs'))?'docs':'dist');
const data=await import(pathToFileURL(path.join(site,'assets/content.js')));
const engine=await import(pathToFileURL(path.join(site,'assets/engine.js')));
test('Every clinical record has valid source references and complete interactive fields',()=>{
 const sourceIDs=new Set(data.sources.map(s=>s.id));assert.equal(sourceIDs.size,data.sources.length);
 for(const s of data.sources)assert.equal(new URL(s.url).protocol,'https:');
 for(const name of ['drugs','glossary','questions','guides','rhythms','cases']){
  assert.ok(data[name].length>0);assert.equal(new Set(data[name].map(x=>x.id)).size,data[name].length);
  for(const item of data[name]){assert.ok(item.sourceIds.length>0,`${name}/${item.id} has sources`);for(const id of item.sourceIds)assert.ok(sourceIDs.has(id),id);}
 }
 for(const q of data.questions){assert.equal(q.options.length,4);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.explanation);}
 for(const d of data.drugs){assert.ok(d.adultDose.length);for(const v of d.adultDose)for(const field of ['use','dose','route'])assert.ok(v[field]);}
 for(const c of data.cases){assert.equal(c.steps.length,4);for(const s of c.steps)assert.equal(s.options.filter(o=>o.correct).length,1);}
 assert.equal(data.drugs.length,30);assert.equal(data.rhythms.length,16);assert.equal(data.cases.length,8);
});
test('Dose math preserves units, small values, and invalid-input guards',()=>{
 const calc=engine.calculate;
 assert.equal(calc('volume',{dose:1,available:2,volume:1,unit:'mg'}).value,.5);
 assert.equal(calc('weight',{weight:70,perkg:.1,concentration:1,unit:'mg'}).value,7);
 assert.equal(calc('infusion',{weight:70,dose:.05,drug:4,bag:250,drugUnit:'mg'}).value,13.125);
 assert.equal(calc('infusion',{weight:70,dose:.05,drug:4000,bag:250,drugUnit:'mcg'}).value,13.125);
 assert.equal(calc('drip',{volume:250,minutes:30,factor:15}).value,125);
 assert.ok(Math.abs(calc('map',{sbp:120,dbp:80}).value-93.33333333333333)<1e-10);
 assert.equal(calc('volume',{dose:.0001,available:1,volume:1,unit:'mg'}).value,.0001);
 assert.ok(calc('volume',{dose:1e308,available:1,volume:10}).error);
 assert.ok(calc('volume',{dose:1,available:0,volume:1}).error);
 assert.ok(calc('map',{sbp:70,dbp:80}).error);
 assert.ok(calc('weight',{weight:'',perkg:1,concentration:1}).error);
});
test('Backup validation rejects malformed state and special dictionary keys',()=>{
 const raw=JSON.parse('{"notes":{"__proto__":"bad","note:one":"hello"},"reviews":{"__proto__":{"due":1,"interval":1}},"history":[{"type":"quiz","title":"bad","date":"not-a-date","correct":1,"total":1}]}');
 const cleaned=engine.sanitizeState(raw);assert.equal(cleaned.history.length,0);assert.equal(cleaned.notes['note:one'],'hello');assert.equal(Object.getPrototypeOf(cleaned.reviews),Object.prototype);assert.equal(Object.keys(cleaned.reviews).length,0);
 assert.equal(engine.escapeHTML('<script>"&'),'&lt;script&gt;&quot;&amp;');
});
test('ECG generation handles every rhythm and does not invent a missing rate',()=>{
 for(const r of data.rhythms){const svg=engine.ecgSVG(r.shape,r.bpm,{annotations:true,irregular:r.id==='sinus-arrhythmia'});assert.ok(svg.includes('<svg'));assert.ok(!svg.includes('NaN'));assert.ok(!svg.includes('Infinity'));}
 assert.ok(engine.ecgSVG('sinus',0).includes('unavailable'));
 assert.ok(engine.ecgSVG('paced',70).includes('polyline'));
 assert.ok(engine.ecgSVG('vf',0).includes('polyline'));
});

// The harness exercises real app actions and templates without a browser.
// It does not claim to check layout, browser rendering, or accessibility behavior.
function harness(){
 const listeners={},elements=new Map(),tools=[];const storage=new Map();
 const element=selector=>{if(!elements.has(selector))elements.set(selector,{innerHTML:'',textContent:'',value:'',dataset:{},open:false,tagName:'DIV',isConnected:true,classList:{add(){},remove(){},toggle(){}},setAttribute(){},hasAttribute(){return false;},focus(){},addEventListener(){},showModal(){this.open=true;},close(){this.open=false;}});return elements.get(selector);};
 const context={...data,...engine,esc:engine.escapeHTML,console,Date,Math,JSON,Number,String,Object,Array,Set,Map,Blob,URL,AbortController,Promise,setTimeout:()=>0,clearTimeout(){},location:{hash:'#/desk'},document:{title:'',activeElement:null,documentElement:{dataset:{}},querySelector:element,querySelectorAll:()=>[],addEventListener:(name,fn)=>listeners[name]=fn,modelContext:{registerTool:tool=>tools.push(tool)},createElement:()=>({click(){}})},window:{addEventListener(){},scrollTo(){},print(){}},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)}};
 const code=fs.readFileSync(path.join(site,'assets/app.js'),'utf8').replace(/^import .*;\n/gm,'').replace('render();\nconst modelContext','render();\nconst modelContext');
 vm.createContext(context);vm.runInContext(code+'\nglobalThis.testAccess={ui,get state(){return state;},render,newQuiz,startCase,startFlash,startMatch,ecgView,caseView,drugModal,drugResults,globalSearch,searchModal,calculatorView};',context);
 const click=(action,extra={})=>listeners.click({target:{closest:selector=>selector==='[data-action]'?{dataset:{action,...extra},classList:{toggle(){},contains:()=>false},setAttribute(){}}:null}});
 return {context,api:context.testAccess,click,element,tools};
}
test('Every route renders its functional view with no missing data',()=>{
 const h=harness();for(const page of ['desk','drugs','ecg','practice','simulator','guides','glossary','calculators','notebook','progress','sources']){h.context.location.hash='#/'+page;h.api.render();assert.ok(h.element('#app').innerHTML.includes('<main'));assert.ok(!h.element('#app').innerHTML.includes('undefined'));}
 for(const g of data.guides){h.context.location.hash='#/guides/'+g.id;h.api.render();assert.ok(h.element('#app').innerHTML.includes(g.title));}
 for(const d of data.drugs){h.api.drugModal(d.id);assert.ok(h.element('#modal').innerHTML.includes(d.name));}
});
test('Quiz scoring blocks repeat answers, preserves shuffled answer keys, and records once',()=>{
 const h=harness();h.api.newQuiz('quiz','Mixed',5);let q=h.api.ui.quiz;
 for(let i=0;i<5;i++){const original=data.questions.find(x=>x.id===q.items[i].id);assert.equal(q.items[i].options[q.items[i].answer],original.options[original.answer]);h.click('quiz-answer',{index:String(q.items[i].answer)});h.click('quiz-answer',{index:'0'});assert.equal(q.responses.length,i+1);h.click('quiz-next');}
 assert.equal(q.finished,true);assert.equal(h.api.state.history.length,1);assert.equal(h.api.state.history[0].correct,5);h.click('quiz-next');assert.equal(h.api.state.history.length,1);
});
test('Every scenario retries wrong actions, synchronizes observations, and records first choices',()=>{
 for(const c of data.cases){const h=harness();h.api.startCase(c.id);const r=h.api.ui.caseRun;
  for(let stage=0;stage<4;stage++){const s=r.case.steps[stage];for(const [key,val] of Object.entries(s.onEnter||{}))assert.equal(r.vitals[key],val);const wrong=s.options.findIndex(o=>!o.correct);h.click('case-answer',{index:String(wrong)});h.click('case-next');assert.equal(r.index,stage);h.click('case-retry');assert.equal(r.selected,null);h.click('case-answer',{index:String(s.options.findIndex(o=>o.correct))});h.click('case-next');}
  assert.ok(r.finished);assert.equal(r.score,0);assert.equal(h.api.state.history.length,1);assert.equal(h.api.state.history[0].total,4);
 }
});
test('Matching and flashcard review complete and persist their results',()=>{
 const h=harness();h.api.startMatch();for(const item of h.api.ui.match.items){h.click('match-left',{id:item.id});h.click('match-right',{id:item.id});}assert.equal(h.api.ui.match.completed,true);assert.equal(h.api.state.history[0].correct,6);
 h.api.startFlash('terms','all');const f=h.api.ui.flash;for(let i=0;i<f.items.length;i++){h.click('flash-flip');h.click('flash-rate',{rating:'good'});}assert.ok(f.finished);assert.equal(Object.keys(h.api.state.reviews).length,10);assert.equal(h.api.state.history.length,2);
});
test('Notebook escapes content, search works, hidden rhythm avoids naming the pattern',()=>{
 const h=harness();h.click('bookmark',{key:'drug:epinephrine'});assert.ok(h.api.state.bookmarks.includes('drug:epinephrine'));h.element('#note-editor').value='<img src=x onerror=alert(1)>';h.click('save-note',{key:'note:one'});h.context.location.hash='#/notebook';h.api.render();assert.ok(!h.element('#app').innerHTML.includes('<img src=x'));
 h.api.searchModal();h.api.globalSearch('Epinephrine');assert.ok(h.element('#global-results').innerHTML.includes('Epinephrine'));
 h.api.ui.ecgId='af';h.api.ui.ecgHidden=true;const html=h.api.ecgView();assert.ok(!html.includes('Atrial fibrillation'));assert.ok(!html.includes('six-second af'));
});
test('WebMCP tools register and reject invalid requests',()=>{
 const h=harness();assert.equal(h.tools.length,2);const search=h.tools.find(t=>t.name==='search_study_content');assert.ok(search.execute({query:'epinephrine'}).length);assert.throws(()=>search.execute({query:''}));assert.ok(h.tools.find(t=>t.name==='open_study_section').inputSchema.properties.section.enum.includes('ecg'));
});
test('Static entry and module references are portable to a GitHub project subpath',()=>{
 const html=fs.readFileSync(path.join(site,'index.html'),'utf8');for(const [,url] of html.matchAll(/(?:src|href)="(\.\/[^"#]+)"/g))assert.ok(fs.existsSync(path.resolve(site,url)),url);
 const css=fs.readFileSync(path.join(site,'assets/style.css'),'utf8');assert.ok(!css.includes('@import'));assert.ok(css.includes('prefers-reduced-motion'));assert.ok(css.includes('@media(max-width:760px)'));
});
