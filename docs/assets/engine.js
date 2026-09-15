export const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const shuffle = values => { const a=[...values]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a; };
export const localDate = (d=new Date()) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
export const percent = (a,b) => b ? Math.round(a/b*100) : 0;
export const defaults = () => ({version:1,theme:'dark',name:'',bookmarks:[],notes:{},history:[],reviews:{},days:[],goal:10});
export function sanitizeState(raw) {
 if(!raw || typeof raw!=='object'||Array.isArray(raw)) throw new Error('Choose a Pulse study backup.');
 const s=defaults();s.theme=raw.theme==='light'?'light':'dark';s.name=String(raw.name||'').slice(0,50);
 s.bookmarks=Array.isArray(raw.bookmarks)?[...new Set(raw.bookmarks.filter(x=>typeof x==='string').slice(0,3000))]:[];
 s.days=Array.isArray(raw.days)?[...new Set(raw.days.filter(x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)))].sort():[];
 const safeKey=k=>k.length<150&&!['__proto__','prototype','constructor'].includes(k);
 if(raw.notes&&typeof raw.notes==='object')for(const [k,v] of Object.entries(raw.notes)){if(safeKey(k)&&typeof v==='string')s.notes[k]=v.slice(0,20000);}
 s.history=Array.isArray(raw.history)?raw.history.filter(h=>h&&typeof h.type==='string'&&typeof h.title==='string'&&typeof h.date==='string'&&Number.isFinite(Date.parse(h.date))&&Number.isFinite(h.correct)&&Number.isFinite(h.total)&&h.total>0&&h.total<=500&&h.correct>=0&&h.correct<=h.total).slice(-500).map(h=>({type:h.type.slice(0,30),title:h.title.slice(0,200),date:h.date,correct:h.correct,total:h.total,category:String(h.category||'Mixed').slice(0,80)})):[];
 if(raw.reviews&&typeof raw.reviews==='object')for(const [k,v] of Object.entries(raw.reviews)){if(safeKey(k)&&v&&Number.isFinite(v.due)&&v.due>=0&&v.due<=8640000000000000&&Number.isFinite(v.interval)&&v.interval>=0&&v.interval<=365)s.reviews[k]={due:v.due,interval:v.interval};}
 s.goal=[5,10,20,30].includes(+raw.goal)?+raw.goal:10;return s;
}
export function calculate(type,v){
 const n=k=>Number(v[k]); const positive=(...ks)=>ks.every(k=>String(v[k]??'').trim()!==''&&Number.isFinite(n(k))&&n(k)>0);
 const result=(value,unit,formula)=>!Number.isFinite(value)||value<=0?{error:'The result is outside the supported range. Check the values and units.'}:{value,unit,formula};
 if(type==='volume') {if(!positive('dose','available','volume'))return {error:'Enter positive values for dose, available drug, and volume.'}; return result(n('dose')/n('available')*n('volume'),'mL',`${v.dose} ${v.unit} ÷ ${v.available} ${v.unit} × ${v.volume} mL`);}
 if(type==='weight'){if(!positive('weight','perkg','concentration'))return {error:'Enter positive values for weight, dose, and concentration.'}; const dose=n('weight')*n('perkg');return {...result(dose/n('concentration'),'mL',`${v.weight} kg × ${v.perkg} ${v.unit}/kg ÷ ${v.concentration} ${v.unit}/mL`),dose:`${Math.round(dose*1000)/1000} ${v.unit}`};}
 if(type==='infusion'){if(!positive('weight','dose','drug','bag'))return {error:'Enter positive values in every field.'}; const factor=v.drugUnit==='mg'?1000:1;return result(n('dose')*n('weight')*60/(n('drug')*factor/n('bag')),'mL/hr',`(${v.dose} mcg/kg/min × ${v.weight} kg × 60) ÷ (${v.drug} ${v.drugUnit} × ${factor} ÷ ${v.bag} mL)`);}
 if(type==='drip'){if(!positive('volume','minutes','factor'))return {error:'Enter a positive fluid volume, time, and drop factor.'}; const drops=n('volume')*n('factor')/n('minutes');return {...result(Math.round(drops),'gtt/min',`${v.volume} mL × ${v.factor} gtt/mL ÷ ${v.minutes} min`),dose:`${Math.round(n('volume')/n('minutes')*600)/10} mL/hr`};}
 if(type==='map'){if(!positive('sbp','dbp')||n('sbp')<=n('dbp'))return {error:'Systolic pressure must be greater than diastolic pressure.'}; return result((n('sbp')+2*n('dbp'))/3,'mmHg',`(${v.sbp} + 2 × ${v.dbp}) ÷ 3`);}
 return {error:'Unknown calculation.'};
}
const gauss=(x,mu,sigma,amp)=>amp*Math.exp(-.5*((x-mu)/sigma)**2);
let stripID=0;
export function ecgSVG(shape='sinus',bpm=75,{annotations=false,compact=false,irregular=false}={}) {
 const id='ecg-'+(++stripID), w=900,h=compact?180:240,base=compact?95:128,amp=58;
 const rateAvailable=Number.isFinite(bpm)&&bpm>0;
 if(!rateAvailable&&!['vf','asystole'].includes(shape))return `<svg class="ecg-svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="Rhythm unavailable: no valid electrical rate supplied"><text x="450" y="${h/2}" fill="#bad6c5" text-anchor="middle" font-size="18" font-family="sans-serif">Electrical rate unavailable</text></svg>`;
 const safeBpm=rateAvailable?Math.min(300,Math.max(20,bpm)):75;
 const rr=60/safeBpm,beats=[];let time=-2,index=0;
 while(time<8){const step=shape==='af'?rr*[.79,1.24,.92,1.18,.72,1.08][index%6]:irregular?rr*(1+.12*Math.sin(index*1.5)):rr;time+=step;beats.push({time,index});index++;}
 const qrs=(d,wide=false)=>wide?gauss(d,-.045,.030,-.18)+gauss(d,0,.038,1.12)+gauss(d,.075,.040,-.43):gauss(d,-.023,.009,-.13)+gauss(d,0,.011,1.05)+gauss(d,.025,.010,-.28);
 const points=[];
 for(let x=0;x<=w;x+=.65){const t=x/150;let y=0;
  if(shape==='vf'){y=.18*Math.sin(t*38)+.12*Math.sin(t*61+1)+.19*Math.sin(t*24+.5)*Math.sin(t*4)+.06*Math.sin(t*95);}
  else if(shape==='asystole'){y=.003*Math.sin(t*15);}
  else if(shape==='torsades'){for(const b of beats){const d=t-b.time,axis=Math.sin(b.time*1.8);y+=axis*(gauss(d,0,.035,1.1)+gauss(d,.075,.035,-.65))+Math.cos(b.time*1.8)*gauss(d,-.05,.03,.2);}}
  else if(shape==='paced'){for(const b of beats){const d=t-b.time;y+=gauss(d,-.08,.004,1.45)+qrs(d,true)+gauss(d,.27,.055,-.24);}}
  else if(shape==='vt'){for(const b of beats){const d=t-b.time;y+=gauss(d,-.045,.033,-.2)+gauss(d,.025,.040,.95)+gauss(d,.105,.042,-.5)+gauss(d,.21,.04,-.18);}}
  else {
   if(shape==='af')y+=.019*Math.sin(t*59)+.015*Math.sin(t*83)+.013*Math.sin(t*41);
   if(shape==='flutter'){const phase=((t*5)%1+1)%1;y+=phase<.7?-.11+.25*phase/.7:.14-.25*(phase-.7)/.3;}
   if(shape==='completeblock'){for(let a=-1;a<7;a+=60/85)y+=gauss(t,a,.025,.13);}
   if(shape==='mobitz1'||shape==='mobitz2'){
    const prBase=shape==='mobitz1'?.15:.16;const atrialRR=.75*rr;
    for(let k=-3;k<20;k++){const at=k*atrialRR;const cycle=((k%4)+4)%4; y+=gauss(t,at,.026,.13);if(cycle!==3){const qt=at+prBase+(shape==='mobitz1'?cycle*.05:0);const d=t-qt;y+=qrs(d,shape==='mobitz2')+gauss(d,.25,.05,.22);}}
   }else for(const b of beats){const d=t-b.time;const blocked=shape==='completeblock';y+=qrs(d,blocked);if(shape!=='svt'&&shape!=='flutter'&&shape!=='af'&&!blocked)y+=gauss(d,shape==='firstdegree'?-.29:-.16,.025,.13);if(shape==='svt')y+=gauss(d,.07,.019,.06);y+=gauss(d,Math.min(.27,rr*.36),Math.min(.054,rr*.09),.24);}
  }
  points.push(`${x.toFixed(1)},${(base-y*amp).toFixed(2)}`);
 }
 const labels=annotations&&['sinus','firstdegree'].includes(shape)?(()=>{const b=beats.find(b=>b.time>.6&&b.time<1.9);if(!b)return '';return [[b.time-(shape==='firstdegree'?.29:.16),'P',base-29],[b.time,'QRS',base-82],[b.time+Math.min(.27,rr*.36),'T',base-37]].map(([t,label,y])=>`<text x="${t*150}" y="${y}" fill="#e3d6b8" text-anchor="middle" font-size="16" font-family="sans-serif">${label}</text>`).join('');})():'';
 return `<svg class="ecg-svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="Schematic six-second ${escapeHTML(shape)} rhythm strip. See the rhythm description for interpretation."><defs><pattern id="${id}s" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M 6 0 L 0 0 0 6" fill="none" stroke="#608b76" stroke-opacity=".10" stroke-width=".6"/></pattern><pattern id="${id}b" width="30" height="30" patternUnits="userSpaceOnUse"><rect width="30" height="30" fill="url(#${id}s)"/><path d="M 30 0 L 0 0 0 30" fill="none" stroke="#7b9a89" stroke-opacity=".19" stroke-width=".7"/></pattern></defs><rect width="${w}" height="${h}" fill="url(#${id}b)"/><polyline points="${points.join(' ')}" fill="none" stroke="#bad6c5" stroke-width="1.9" stroke-linejoin="round" stroke-linecap="round"/>${labels}${!compact?[0,1,2,3,4,5,6].map(n=>`<text x="${n===0?7:n===6?884:n*150}" y="228" fill="#98b7a7" font-size="12" text-anchor="middle">${n}s</text>`).join(''):''}</svg>`;
}
