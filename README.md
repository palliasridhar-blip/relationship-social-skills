# Relationships &amp; Social Skills — Teen Coaching Toolkit

An interactive, browser-based toolkit for coaching teenagers in relationships and
interpersonal skills. Built for one-to-one coaching at **Brain Behaviour Academy**.

It bundles three things in a single static site:

1. **Session Plans** — 14 ready-to-run, ~50-minute one-to-one plans, each with learning
   objectives, a timed session flow, coaching prompts, a "watch for" safeguarding note,
   and a weekly micro-mission.
2. **Scenario &amp; Role-Play Bank** — 30 role-play scenarios, filterable by theme, each with
   a setup, role assignments, and debrief questions.
3. **Self-Assessment** — 30 questions across 10 skill areas that produce a radar chart, an
   area-by-area breakdown, and optional AI-generated coaching insights.

No build step, no framework. Plain HTML, CSS, and JavaScript.

## Quick start

Because the site is fully static, you can just open it — but loading the external
font and chart library (and using relative paths) works best over a local server:

```bash
# from the project root
python3 -m http.server 8000
# then visit http://localhost:8000
```

Or open `index.html` directly in a browser. (Charts and fonts still load from their CDNs.)

## Project structure

```
relationships-toolkit/
├── index.html          # markup and section structure
├── css/
│   └── styles.css      # full design system and layout
├── js/
│   ├── data.js         # content: units, session plans, scenarios, assessment items
│   └── app.js          # rendering, navigation, scoring, radar chart, AI insights
├── assets/
│   └── favicon.svg
├── README.md
├── LICENSE
└── .gitignore
```

Want to edit the content? It all lives in **`js/data.js`** — the `PLANS`, `SCENARIOS`,
and `DIMS` arrays. The UI re-renders from those arrays, so you never touch markup to
add a scenario or reword a plan.

## Dependencies

Loaded from CDN at runtime (no install required):

- [Chart.js](https://www.chartjs.org/) 4.4.1 — the self-assessment radar chart
- Google Fonts: *Fraunces* (display) and *Inter* (body), with system-font fallbacks

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose
   your branch (e.g. `main`) and the `/ (root)` folder, and save.
4. Your site goes live at `https://<username>.github.io/<repo>/`.

Everything except the AI insights works on GitHub Pages with no extra setup.

## AI insights

The self-assessment includes an optional "coaching insights" panel that asks an Anthropic
model to interpret the student's profile.

- **Inside the Claude.ai artifact runtime**, this works as-is — calls are handled for you
  with no API key.
- **When self-hosted** (GitHub Pages or any static host), a browser can't call the
  Anthropic API directly (no key, and CORS blocks it). The rest of the toolkit still works;
  the panel simply shows a friendly error if the call fails.

To enable AI insights on a self-hosted copy, stand up a small backend proxy that holds your
API key and forwards requests, then point the app at it. Open `js/app.js` and set:

```js
const AI_CONFIG = {
  endpoint: "https://your-proxy.example.com/anthropic", // your proxy URL
  model: "claude-sonnet-4-6"
};
```

Your proxy should accept the JSON body the app sends, attach your
`x-api-key` and `anthropic-version` headers server-side, and return the Anthropic
response unchanged. **Never put an API key in this client-side code** — it would be public.

## A note on safe use

The self-assessment is a reflection aid for coaching, not a clinical or diagnostic measure.
Each session plan flags its sensitive moments. If a student is in genuine distress or
discloses harm, move from coaching to safeguarding: involve a parent, school counsellor,
or qualified professional.

## License

Released under the MIT License. See [LICENSE](LICENSE).
