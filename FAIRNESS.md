# How Pollreal tries to stay fair — and where we want your help

Pollreal is only worth anything if its results are hard to fake. This page lists what is in place today, the trade-offs we made, and the questions we have not settled. **Poke holes in it.** Open a [discussion](https://github.com/pollreal/polls/discussions) or a [fairness proposal](https://github.com/pollreal/polls/issues/new?template=fairness.yml).

We keep a few anti-abuse details private (exact limits and detection signals), because publishing them would hand a recipe to the people they stop. Everything else is here.

## 1. One real person, one vote

**Today**
- Sign-up verifies a phone number once. Virtual, VoIP and landline numbers are refused. Only a one-way hash of the number is kept, so the same number cannot sign up twice.
- Every vote is signed with a passkey on the voter's own device (fingerprint, face or screen lock). No password, no shared login.
- One vote per device per poll, even across accounts. VPN and data-centre traffic is refused. Only a limited number of votes per poll can come from one network.
- Bot checks run at sign-up and when a poll is created.

**Open questions**
- Is a phone number plus a passkey enough friction for bot farms, and too much for real people? Where would you draw the line?
- What would you add for regions where SIM cards are cheap and plentiful?

## 2. No bandwagon

**Today**
- While a poll is open (24 hours), only people who have voted see the split. Everyone sees the final result, forever.
- Share images, embeds and README badges show "voting" until the poll closes.

**Open questions**
- Should the split go public earlier, for example everywhere except the last 6 hours (an election-style blackout)?

## 3. Rallies and brigades

**Today**
- Votes that arrive through a maker's own campaign link are counted in the poll and shown as such on the result ("via maker campaigns: N"). They are left out of the rankings.
- Every result shows how its votes were cast: share of brand-new members, maker-campaign votes and attempts blocked at the door.
- Sudden surges and coordinated reports put a poll "under review"; polls under review are left out of the rankings.

**Open questions**
- A fan community sharing a link is legitimate and also a brigade. What signal would you trust to tell them apart without reading anyone's vote?
- Should a poll's result carry a visible "rallied" marker when one source dominates its votes?

## 4. Framing and candidates

**Today**
- Anyone can create a poll with 2–4 candidates; operator seed polls carry a "seed" label.
- Product names in other languages or forms map to one product ("로지텍" = "Logitech"), so one product has one record.
- Each candidate gets an AI comparison card that summarises the maker's official pages, with links to the sources and an "AI summary — check the source" label. No marketing copy or product photos are copied.

**Open questions**
- A matchup can be framed to favour one side (a flagship against a budget model). Should the rankings correct for that, or should such polls be flagged?
- How would you audit the AI cards for bias or missing facts?

## 5. Rankings

**Today**
- Each vote is a head-to-head result between the chosen product and each other candidate in that poll. Scores come from the Bradley–Terry model (as in the LMSYS Chatbot Arena), with 95% ranges; overlapping ranges share a rank.
- Votes lose half their weight every 90 days. Only closed polls count. A product is ranked from 30 votes against at least 3 different rivals.

**Open questions**
- Should one very large poll be capped so it cannot dominate a pair?
- Is a 90-day half-life right for AI tools that change monthly?
- Would you rather see one global score, or separate scores per use case (coding, writing, …)?

## 6. Money

**Today**
- Results and rankings are computed the same way for everyone. Advertising or partnerships, if they ever come, will be labelled and will never touch the numbers.

**Open questions**
- What would you need to see to trust that promise? (A public changelog of the method? An outside audit?)

---

The method changes only in the open: changes to how votes are counted or ranked will be announced in this repository before they take effect.
