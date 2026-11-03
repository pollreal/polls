# Pollreal polls

[![Pollreal](https://img.shields.io/badge/Pollreal-verified_humans_only-A95228)](https://pollreal.com)

Head-to-head votes on AI tools and products, decided by **verified humans**: one phone number per person, a passkey check (fingerprint, face or screen lock) at the moment of voting, one vote per device, no VPNs or data centres. Every poll runs for 24 hours; the result stays public with its age and gender breakdown.

This repository is the public list of polls and their live badges. It is rebuilt every day from https://pollreal.com. The Pollreal service itself is not open source.

**Pollreal opens soon.** The poll list and rankings appear here on launch day.

## Results as a head-to-head health bar

Lists of numbers are boring, so every Pollreal result is drawn as one bar, like the health bars in a fighting game. Each candidate holds a piece of the bar; the leader is copper, the others slate. When the lead changes, the boundary slides instead of the bar flipping. The same bar is on the poll page, the share image and the README badge.

<p>
<img src="assets/gauge-example-final.svg" width="480" alt="Example gauge: Tool A wins 57.8% of 540 votes"><br>
<img src="assets/gauge-example-three.svg" width="480" alt="Example gauge: three candidates"><br>
<img src="assets/gauge-example-open.svg" width="480" alt="Example gauge: poll still open, split shown only to voters">
</p>

_Illustrative numbers, not real results._ While a poll is open the split is visible only to people who voted, so the bar stays blank until it closes (third example). Ideas to make it better: [Discussions](https://github.com/pollreal/polls/discussions).

## Help keep it fair

Pollreal is only useful if its results are hard to fake. [FAIRNESS.md](FAIRNESS.md) lists what is in place, the trade-offs, and the open questions.

- **Argue with the method:** [Discussions](https://github.com/pollreal/polls/discussions)
- **Propose a fix or report a weakness:** [Fairness proposal](https://github.com/pollreal/polls/issues/new?template=fairness.yml) (live, abusable holes: hello@pollreal.com)
- **Want a matchup?** [Suggest one](https://github.com/pollreal/polls/issues/new?template=matchup.yml)
