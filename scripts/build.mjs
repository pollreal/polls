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
lines.push('# Pollreal polls')
lines.push('')
lines.push(`[![Pollreal](https://img.shields.io/badge/Pollreal-verified_humans_only-A95228)](${SITE})`)
lines.push('')
lines.push('Head-to-head votes on AI tools and products, decided by **verified humans**: one phone number per person, a passkey check (fingerprint, face or screen lock) at the moment of voting, one vote per device, no VPNs or data centres. Every poll runs for 24 hours; the result stays public with its age and gender breakdown.')
lines.push('')
lines.push(`This repository is the public list of polls and their live badges. It is rebuilt every day from ${SITE}. The Pollreal service itself is not open source.`)
lines.push('')
lines.push('- **See a result:** no sign-up needed.')
lines.push(`- **Vote:** sign up once on ${SITE}.`)
lines.push(`- **Suggest a matchup:** create a poll at ${SITE}/new.`)
lines.push('')

lines.push('## Rankings')
lines.push('')
lines.push(`Scores use the Bradley–Terry model on every verified vote (the method behind the LMSYS Chatbot Arena), with 95% ranges; products are ranked from 300 votes against 3 different rivals. Full method: ${SITE}/rank`)
lines.push('')
if (data.rankings.length) {
  lines.push('| Category | Ranked products | |')
  lines.push('|---|---:|---|')
  for (const r of data.rankings) lines.push(`| ${esc(r.label)} | ${r.ranked} of ${r.products} | [Ranking](${r.url}) |`)
} else {
  lines.push('_Rankings appear once polls have closed._')
}
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
