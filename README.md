# Pulse · Paramedic study

A comprehensive study tool for paramedics.

A complete static study website with a muted charcoal and pastel interface. All app assets are included. There are no build dependencies, external fonts, API keys, accounts, or required paid services.

## Open it now

Open `preview.html` in a modern browser. This self-contained copy works without installing anything. Use `docs/` for the hosted website. Study data in the preview may be separate from data on the published site; export and import a backup to move it.

## Publish with GitHub Pages

1. Create an empty GitHub repository, for example `Pulse`.
2. Extract this ZIP. Upload its contents into the repository. The repository should contain `docs/index.html`, not an extra enclosing `Pulse-Paramedic` directory.
3. Open **Settings > Pages**.
4. Choose **Deploy from a branch**, select **main**, choose **/docs**, then **Save**.
5. Wait for the Pages deployment to complete. GitHub shows the website URL on that page.

Repository: [hesherson/Pulse](https://github.com/hesherson/Pulse). After GitHub Pages is enabled, the expected website URL is `https://hesherson.github.io/Pulse/`. Uploading the repository files does not itself enable Pages.

See [GitHub's official publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

### PowerShell commands for a new repository

Run these inside the extracted folder that contains `docs`. Replace the repository name if you use a different one. Create the empty repository on GitHub first.

```powershell
git init
git branch -M main
git add docs README.md package.json tools tests preview.html
git diff --cached --check
git commit -m "Add Pulse paramedic study website"
git remote add origin https://github.com/hesherson/Pulse.git
git push -u origin main
```

Then select `main > /docs` in Pages settings.

### Update an existing checkout

Copy the updated files into your repository, then run:

```powershell
git add docs README.md package.json tools tests preview.html
git diff --cached --check
git commit -m "Update Pulse paramedic study website"
git push
```

## Included study tools

| Tool | Included functionality |
| --- | --- |
| Study desk | Daily practice entry, study streak, completed-session statistics, daily goal, ECG challenge |
| Drug cards | 30 medications; search and category filters; indication-specific adult dosing; pediatric considerations; precautions, adverse effects, monitoring, pearls and sources; bookmarks and print layouts |
| ECG lab | 16 illustrated rhythm lessons; P/QRS/T labels for applicable sinus examples; interpretation notes; hidden-answer study mode; randomized rhythm quiz |
| Clinical practice | 45 questions; topic filters; 5/10/20-question session sizes where enough questions exist; immediate explanations; missed-question retry |
| Terminology | 70 searchable definitions; randomized definition quizzes and six-pair matching games |
| Flashcards | Terminology and medication indications; saved-medication collection; local review scheduling; Again, Good and Easy recall ratings |
| Patient simulator | 8 fictional cases with 4 stages each; randomized choices; scripted observations and vital changes; wrong-action feedback and retry; first-choice scoring and debrief |
| Study guides | 10 concise references covering assessment, airway, shock/sepsis, trauma, neurology, endocrine emergencies, obstetrics, pediatrics, toxicology and operations |
| Dose math | Dose-to-volume, weight-based dose, infusion rate, gravity drip and estimated MAP; unit-aware formulas and input validation |
| Notebook | Bookmarked medications, rhythms and guides; editable personal study notes |
| Progress | Completed activity history, topic results, local review dates, daily goal, JSON backup export/import |
| Interface | Responsive navigation, dark/light themes, keyboard controls, global search, native dialogs, print styles, reduced-motion support |

## Clinical scope

This is an educational collection for US paramedic students. It is not a complete paramedic curriculum, an official NREMT product, an agency treatment protocol, or a clinically validated decision-support system. It has not received independent clinician sign-off.

The 94 linked source records include AHA 2025 material, prescribing information, government/academic references, and clearly identified Maryland 2026 dosing examples. Sources were accessed September 15, 2026. Dose cards deliberately distinguish indications and routes. Some pediatric, RSI, infusion, and local formulary regimens defer to the applicable protocol. A label reference or another state's example must not be assumed to match your agency's protocol.

ECGs are mathematical teaching illustrations, not patient recordings. They simplify morphology and intervals. A strip alone cannot diagnose PEA. Simulator responses are scripted learning states, not predictions of a patient's response. Dose calculators perform arithmetic only; they do not authorize an indication, select a regimen, or apply a drug-specific maximum.

Before using this site as a formal course resource, have a qualified clinical educator review the content against the course and jurisdiction. Clinical sources are static and require deliberate maintenance.

## Data and privacy

Notes, bookmarks, completed sessions, settings, and flashcard review schedules are stored in browser local storage. Unfinished sessions do not survive a page reload. No application server receives study data. The hosting provider may record ordinary access logs.

Use **My progress > Export backup** to move your data. Import replaces the current browser's study data after confirmation. Clearing browser data removes local progress. Do not enter patient information. On browsers that deny local storage, the app remains usable for the session and warns you to export a backup.

## Edit the website

The canonical hosted files are in `docs/`:

* `index.html`: document title, metadata, favicon and entry point
* `assets/style.css`: colors, spacing, typography and responsive layouts
* `assets/content.js`: medications, questions, terminology, guides, ECG lessons, scenarios and sources
* `assets/app.js`: routes and study interactions
* `assets/engine.js`: arithmetic, backup validation, utility functions and ECG geometry
* `.nojekyll`: tells Pages to serve the static files directly

Edit those files, test, then commit. No compilation is needed. Routes use hashes, so bookmarks and refreshes work under any GitHub repository subpath.

To refresh the optional single-file preview after edits, install Node.js 20 or newer and run:

```powershell
node tools/make-preview.mjs
```

To serve `docs` locally instead of opening the preview:

```powershell
npm start
```

Open `http://localhost:8080`. No `npm install` is needed.

## Verification

Run `npm test` or `node --test tests/verify.mjs` with Node.js 20 or newer.

The included checks validate source references, question/case structures, arithmetic and extreme inputs, backup validation, ECG generation, all route templates, quiz scoring, scenario retries and observations, matching, flashcard persistence, note escaping, hidden-rhythm answers, and portable asset links. The action tests use a lightweight in-memory document harness rather than a real browser.

All 11 checks passed for this delivery. Browser visual inspection and live GitHub Pages deployment were not performed. WebMCP tools are feature-detected; their registration and input validation are checked in the harness, but a supported live WebMCP browser was unavailable.
