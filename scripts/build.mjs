// Builds README.md from Pollreal's public poll list (https://pollreal.com/api/public/polls).
// Runs daily in GitHub Actions; no dependencies, no secrets. If the site is not reachable or not open yet, the README is
// left as it is (exit 0) so the workflow never fails noisily.
import { writeFileSync } from 'node:fs'

const SITE = process.env.POLLREAL_SITE || 'https://pollreal.com'

const esc = (s) => String(s).replace(/\|/g, '\\|').replace(/[[\]]/g, '')
const day = (iso) => iso.slice(0, 10)

let data
try {
  const r = await fetch(`${SITE}/api/public/polls`, { headers: { 'user-agent': 'pollreal-polls-readme' } })
  if (!r.ok) {
    console.log(`site answered ${r.status} — README unchanged`)
    process.exit(0)
  }
  data = await r.json()
} catch (e) {
  console.log(`site not reachable (${e.message}) — README unchanged`)
  process.exit(0)
}

const byCat = new Map()
for (const p of data.polls) {
  const list = byCat.get(p.categoryLabel) ?? []
  list.push(p)
  byCat.set(p.categoryLabel, list)
}

const lines = []
lines.push('# Pollreal — a poll no AI can vote in')
lines.push('')
lines.push(`[![Pollreal](https://img.shields.io/badge/Pollreal-human--only_votes-A95228)](${SITE})`)
lines.push('')
lines.push('AI agents can now click through any web form, solve CAPTCHAs and run a thousand accounts at once. Online polls are the first thing they break: "which tool is better" stops meaning anything when the answer can be generated.')
lines.push('')
lines.push('Pollreal is an attempt to build the opposite — **a pure poll: one person, one vote, and every ballot needs a living human at the moment it is cast.**')
lines.push('')
lines.push('- **A phone number, once.** One number = one account; we keep only a one-way hash.')
lines.push('- **Your finger or face, every vote.** Each vote is signed with a passkey on your own device. An agent can fill in the form; it cannot press your fingerprint.')
lines.push('- **One vote per device.** No VPNs, no data centres, and Google scores every SMS request for fraud before a code goes out.')
lines.push('- **Public, permanent results.** Every poll runs 24 hours; the result stays public with its age and gender breakdown.')
lines.push('')
lines.push('We cannot make this airtight on our own, so **Pollreal is built in the open: developers build it, the maintainer reviews what you send and ships it to pollreal.com.** See [Build it with us](#build-it-with-us).')
lines.push('')
lines.push(`AI is welcome on Pollreal as a tool — each candidate gets a clearly labelled AI summary of the maker's official pages — but never as a voter. This repository is the public list of polls and their live badges, rebuilt every day from ${SITE}.`)
lines.push('')
lines.push('- **See a result:** no sign-up needed.')
lines.push(`- **Vote:** sign up once on ${SITE} (open it in Safari or Chrome — in-app browsers cannot use passkeys).`)
lines.push(`- **Start a fight:** create a poll at ${SITE}/new.`)
lines.push('')

lines.push('## Results as a head-to-head health bar')
lines.push('')
lines.push('Lists of numbers are boring, so every Pollreal result is drawn as one bar, like the health bars in a fighting game. Each candidate holds a piece of the bar; the leader is copper, the others slate. When the lead changes, the boundary slides instead of the bar flipping. The same bar is on the poll page, the share image and the README badge.')
lines.push('')
lines.push('<p>')
lines.push('<img src="assets/gauge-example-final.svg" width="480" alt="Example gauge: Tool A wins 57.8% of 540 votes"><br>')
lines.push('<img src="assets/gauge-example-three.svg" width="480" alt="Example gauge: three candidates"><br>')
lines.push('<img src="assets/gauge-example-open.svg" width="480" alt="Example gauge: poll still open, split shown only to voters">')
lines.push('</p>')
lines.push('')
lines.push('_Illustrative numbers, not real results._ While a poll is open the split is visible only to people who voted, so the bar stays blank until it closes (third example). Real polls with live bars are listed below.')
lines.push('')

lines.push('## Rankings')
lines.push('')
lines.push(`Scores use the Bradley–Terry model on every verified vote (the method behind the LMSYS Chatbot Arena), with 95% ranges; products are ranked from 30 votes against 3 different rivals. Full method: ${SITE}/rank`)
lines.push('')
if (data.rankings.length) {
  lines.push('| Category | Ranked products | |')
  lines.push('|---|---:|---|')
  for (const r of data.rankings) lines.push(`| ${esc(r.label)} | ${r.ranked} of ${r.products} | [Ranking](${r.url}) |`)
} else {
  lines.push('_Rankings appear once polls have closed._')
}
lines.push('')

lines.push('## Build it with us')
lines.push('')
lines.push('A poll is only worth reading if nobody — no bot, no agent, no click farm — can fake it. That is a problem for many people, not one team. Pick whatever fits you:')
lines.push('')
lines.push('- **Break it.** Try to get a vote counted without a real human behind it. Live, abusable holes go privately to hello@pollreal.com; ideas and weaknesses go in a [fairness proposal](https://github.com/pollreal/polls/issues/new?template=fairness.yml).')
lines.push('- **Design the defenses.** The open questions are written down in [FAIRNESS.md](FAIRNESS.md) and argued in [Discussions](https://github.com/pollreal/polls/discussions) — for example [how to keep it fair](https://github.com/pollreal/polls/discussions/1) and [how to check a carrier line type without Twilio](https://github.com/pollreal/polls/discussions/3).')
lines.push('- **Bring the fights.** Vim vs Emacs, Postgres vs MySQL, PS5 vs Switch — [suggest a matchup](https://github.com/pollreal/polls/issues/new?template=matchup.yml) your community would actually argue about.')
lines.push('- **Show the bar.** Made a tool? Put its live badge in your README (see below) and let real humans settle it.')
lines.push('')
lines.push('**Open development.** The service code itself is moving into the open so you can send pull requests; the first public commit will be announced in [Discussions](https://github.com/pollreal/polls/discussions). Until then, issues and discussions here are where the work happens — and every accepted idea ships to the live site.')
lines.push('')
lines.push('## Polls')
lines.push('')
if (!data.polls.length) lines.push('_No polls yet._')
for (const [label, polls] of [...byCat].sort((a, b) => a[0].localeCompare(b[0]))) {
  lines.push(`### ${esc(label)}`)
  lines.push('')
  lines.push('| Poll | Status | Live badge |')
  lines.push('|---|---|---|')
  for (const p of polls) {
    const status = p.underReview
      ? 'Under review'
      : p.open
      ? `Open until ${day(p.closesAt)} · ${p.votes} votes so far`
      : p.result
        ? p.result.leaders.length > 1
          ? `Final · tie at ${p.result.pct}% · ${p.votes} votes`
          : `Final · **${esc(p.result.leaders[0])}** ${p.result.pct}% · ${p.votes} votes`
        : 'Final · no votes'
    const link = `${p.url}?via=embed`
    lines.push(`| [${esc(p.title)}](${link}) | ${status} | [![Pollreal: ${esc(p.title)}](${p.badge})](${link}) |`)
  }
  lines.push('')
}

lines.push('## Put a badge in your README')
lines.push('')
lines.push('Every poll has a badge that updates by itself. Add `?for=N` to speak for candidate N (1 = first), or use the card with the gauge:')
lines.push('')
lines.push('```markdown')
lines.push(`[![Pollreal](${SITE}/badge/<poll-id>.svg?for=1)](${SITE}/v/<poll-id>?via=embed)`)
lines.push(`[![Pollreal](${SITE}/badge/card/<poll-id>.svg)](${SITE}/v/<poll-id>?via=embed)`)
lines.push('```')
lines.push('')
lines.push('While a poll is open its split is shown only to people who voted, so the badge says "voting"; the numbers appear when it closes.')
lines.push('')
lines.push(`---\nUpdated ${data.generatedAt.slice(0, 16).replace('T', ' ')} UTC from ${SITE}/api/public/polls`)
lines.push('')

writeFileSync(new URL('../README.md', import.meta.url), lines.join('\n'))
console.log(`README written: ${data.polls.length} polls, ${data.rankings.length} ranking categories`)
