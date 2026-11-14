# Pollreal — a poll no AI can vote in

[![Pollreal](https://img.shields.io/badge/Pollreal-human--only_votes-A95228)](https://pollreal.com)

AI agents can now click through any web form, solve CAPTCHAs and run a thousand accounts at once. Online polls are the first thing they break: "which tool is better" stops meaning anything when the answer can be generated.

Pollreal is an attempt to build the opposite — **a pure poll: one person, one vote, and every ballot needs a living human at the moment it is cast.**

- **A phone number, once.** One number = one account; we keep only a one-way hash.
- **Your finger or face, every vote.** Each vote is signed with a passkey on your own device. An agent can fill in the form; it cannot press your fingerprint.
- **One vote per device.** No VPNs, no data centres, and Google scores every SMS request for fraud before a code goes out.
- **Public, permanent results.** Every poll runs 24 hours; the result stays public with its age and gender breakdown.

We cannot make this airtight on our own, so **Pollreal is built in the open: developers build it, the maintainer reviews what you send and ships it to pollreal.com.** See [Build it with us](#build-it-with-us).

AI is welcome on Pollreal as a tool — each candidate gets a clearly labelled AI summary of the maker's official pages — but never as a voter. This repository is the public list of polls and their live badges, rebuilt every day from https://pollreal.com.

- **See a result:** no sign-up needed.
- **Vote:** sign up once on https://pollreal.com (open it in Safari or Chrome — in-app browsers cannot use passkeys).
- **Start a fight:** create a poll at https://pollreal.com/new.

## Results as a head-to-head health bar

Lists of numbers are boring, so every Pollreal result is drawn as one bar, like the health bars in a fighting game. Each candidate holds a piece of the bar; the leader is copper, the others slate. When the lead changes, the boundary slides instead of the bar flipping. The same bar is on the poll page, the share image and the README badge.

<p>
<img src="assets/gauge-example-final.svg" width="480" alt="Example gauge: Tool A wins 57.8% of 540 votes"><br>
<img src="assets/gauge-example-three.svg" width="480" alt="Example gauge: three candidates"><br>
<img src="assets/gauge-example-open.svg" width="480" alt="Example gauge: poll still open, split shown only to voters">
</p>

_Illustrative numbers, not real results._ While a poll is open the split is visible only to people who voted, so the bar stays blank until it closes (third example). Real polls with live bars are listed below.

## Rankings

Scores use the Bradley–Terry model on every verified vote (the method behind the LMSYS Chatbot Arena), with 95% ranges; products are ranked from 30 votes against 3 different rivals. Full method: https://pollreal.com/rank

| Category | Ranked products | |
|---|---:|---|
| Image generation | 0 of 4 | [Ranking](https://pollreal.com/rank/ai-image) |
| Coding | 0 of 7 | [Ranking](https://pollreal.com/rank/ai-coding) |
| Open source & dev tools | 0 of 4 | [Ranking](https://pollreal.com/rank/ai-opensource) |
| AI apps & devices | 0 of 3 | [Ranking](https://pollreal.com/rank/ai-apps) |
| Search & research | 0 of 3 | [Ranking](https://pollreal.com/rank/ai-search) |
| Video generation | 0 of 4 | [Ranking](https://pollreal.com/rank/ai-video) |
| Chatbots & assistants | 0 of 4 | [Ranking](https://pollreal.com/rank/ai-assistants) |
| Voice & music | 0 of 3 | [Ranking](https://pollreal.com/rank/ai-audio) |
| Phones & tablets | 0 of 3 | [Ranking](https://pollreal.com/rank/phone) |
| Cloud & hosting | 0 of 4 | [Ranking](https://pollreal.com/rank/sw-cloud) |
| Terminals & shells | 0 of 4 | [Ranking](https://pollreal.com/rank/sw-terminal) |
| Consoles & gaming gear | 0 of 3 | [Ranking](https://pollreal.com/rank/gaming) |
| Databases | 0 of 4 | [Ranking](https://pollreal.com/rank/sw-database) |
| Frameworks & libraries | 0 of 7 | [Ranking](https://pollreal.com/rank/sw-framework) |
| Web browsers | 0 of 4 | [Ranking](https://pollreal.com/rank/sw-browser) |
| Programming languages | 0 of 4 | [Ranking](https://pollreal.com/rank/sw-language) |
| Code editors & IDEs | 0 of 4 | [Ranking](https://pollreal.com/rank/sw-editor) |
| Operating systems | 0 of 3 | [Ranking](https://pollreal.com/rank/sw-os) |
| Streaming services | 0 of 3 | [Ranking](https://pollreal.com/rank/sw-streaming) |
| Notes & docs | 0 of 3 | [Ranking](https://pollreal.com/rank/sw-notes) |
| Printers & 3D printers | 0 of 3 | [Ranking](https://pollreal.com/rank/printer) |
| Coffee & drinks | 0 of 2 | [Ranking](https://pollreal.com/rank/coffee) |
| PCs & laptops | 0 of 3 | [Ranking](https://pollreal.com/rank/pc) |
| Cameras & drones | 0 of 3 | [Ranking](https://pollreal.com/rank/camera) |
| Car & accessories | 0 of 3 | [Ranking](https://pollreal.com/rank/car) |
| Fashion | 0 of 4 | [Ranking](https://pollreal.com/rank/fashion) |
| Smartwatches & wearables | 0 of 4 | [Ranking](https://pollreal.com/rank/wearable) |
| Messaging & team chat | 0 of 3 | [Ranking](https://pollreal.com/rank/sw-chat) |

## Build it with us

A poll is only worth reading if nobody — no bot, no agent, no click farm — can fake it. That is a problem for many people, not one team. Pick whatever fits you:

- **Break it.** Try to get a vote counted without a real human behind it. Live, abusable holes go privately to hello@pollreal.com; ideas and weaknesses go in a [fairness proposal](https://github.com/pollreal/polls/issues/new?template=fairness.yml).
- **Design the defenses.** The open questions are written down in [FAIRNESS.md](FAIRNESS.md) and argued in [Discussions](https://github.com/pollreal/polls/discussions) — for example [how to keep it fair](https://github.com/pollreal/polls/discussions/1) and [how to check a carrier line type without Twilio](https://github.com/pollreal/polls/discussions/3).
- **Bring the fights.** Vim vs Emacs, Postgres vs MySQL, PS5 vs Switch — [suggest a matchup](https://github.com/pollreal/polls/issues/new?template=matchup.yml) your community would actually argue about.
- **Show the bar.** Made a tool? Put its live badge in your README (see below) and let real humans settle it.

**Open development.** The service code is open: [pollreal/pollreal](https://github.com/pollreal/pollreal) (AGPL-3.0). Read it, find the holes, send pull requests — every accepted change ships to pollreal.com. Ideas and open questions stay here in [Discussions](https://github.com/pollreal/polls/discussions).

## Polls

### AI apps & devices

| Poll | Status | Live badge |
|---|---|---|
| [Perplexity Comet vs The Browser Company Dia vs Google Chrome](https://pollreal.com/v/fv3t6wa3/comet-vs-dia-vs-chrome?via=embed) | Final · **Google Chrome** 100% · 1 votes | [![Pollreal: Perplexity Comet vs The Browser Company Dia vs Google Chrome](https://pollreal.com/badge/fv3t6wa3.svg)](https://pollreal.com/v/fv3t6wa3/comet-vs-dia-vs-chrome?via=embed) |

### Cameras & drones

| Poll | Status | Live badge |
|---|---|---|
| [DJI Osmo Action 5 Pro vs GoPro HERO vs Insta360 X5](https://pollreal.com/v/apc32qwk/osmo-action-5-pro-vs-hero-vs-x5?via=embed) | Final · no votes | [![Pollreal: DJI Osmo Action 5 Pro vs GoPro HERO vs Insta360 X5](https://pollreal.com/badge/apc32qwk.svg)](https://pollreal.com/v/apc32qwk/osmo-action-5-pro-vs-hero-vs-x5?via=embed) |

### Car & accessories

| Poll | Status | Live badge |
|---|---|---|
| [Tesla Model 3 vs BYD Seal vs Hyundai IONIQ 6](https://pollreal.com/v/d7b6jgus/model-3-vs-seal-vs-ioniq-6?via=embed) | Final · no votes | [![Pollreal: Tesla Model 3 vs BYD Seal vs Hyundai IONIQ 6](https://pollreal.com/badge/d7b6jgus.svg)](https://pollreal.com/v/d7b6jgus/model-3-vs-seal-vs-ioniq-6?via=embed) |

### Chatbots & assistants

| Poll | Status | Live badge |
|---|---|---|
| [OpenAI ChatGPT vs Anthropic Claude vs Google Gemini vs xAI Grok](https://pollreal.com/v/h9tushbq/chatgpt-vs-claude-vs-gemini-vs-grok?via=embed) | Final · **OpenAI ChatGPT** 100% · 1 votes | [![Pollreal: OpenAI ChatGPT vs Anthropic Claude vs Google Gemini vs xAI Grok](https://pollreal.com/badge/h9tushbq.svg)](https://pollreal.com/v/h9tushbq/chatgpt-vs-claude-vs-gemini-vs-grok?via=embed) |

### Cloud & hosting

| Poll | Status | Live badge |
|---|---|---|
| [Amazon AWS vs Microsoft Azure vs Google Cloud vs Hetzner Cloud](https://pollreal.com/v/735gd7jx/aws-vs-azure-vs-google-cloud-vs-hetzner-cloud?via=embed) | Final · no votes | [![Pollreal: Amazon AWS vs Microsoft Azure vs Google Cloud vs Hetzner Cloud](https://pollreal.com/badge/735gd7jx.svg)](https://pollreal.com/v/735gd7jx/aws-vs-azure-vs-google-cloud-vs-hetzner-cloud?via=embed) |

### Code editors & IDEs

| Poll | Status | Live badge |
|---|---|---|
| [Microsoft VS Code vs Vim vs Neovim vs GNU Emacs](https://pollreal.com/v/ttqq3z7b/vs-code-vs-vim-vs-neovim-vs-emacs?via=embed) | Final · no votes | [![Pollreal: Microsoft VS Code vs Vim vs Neovim vs GNU Emacs](https://pollreal.com/badge/ttqq3z7b.svg)](https://pollreal.com/v/ttqq3z7b/vs-code-vs-vim-vs-neovim-vs-emacs?via=embed) |

### Coding

| Poll | Status | Live badge |
|---|---|---|
| [Anysphere Cursor vs GitHub Copilot vs Cognition Devin Desktop vs Zed Industries Zed](https://pollreal.com/v/7b5zxnaq/cursor-vs-copilot-vs-devin-desktop-vs-zed?via=embed) | Final · **GitHub Copilot** 100% · 1 votes | [![Pollreal: Anysphere Cursor vs GitHub Copilot vs Cognition Devin Desktop vs Zed Industries Zed](https://pollreal.com/badge/7b5zxnaq.svg)](https://pollreal.com/v/7b5zxnaq/cursor-vs-copilot-vs-devin-desktop-vs-zed?via=embed) |
| [Anthropic Claude Code vs OpenAI Codex vs Google Gemini CLI](https://pollreal.com/v/6w2dhzar/claude-code-vs-codex-vs-gemini-cli?via=embed) | Final · **Anthropic Claude Code** 100% · 1 votes | [![Pollreal: Anthropic Claude Code vs OpenAI Codex vs Google Gemini CLI](https://pollreal.com/badge/6w2dhzar.svg)](https://pollreal.com/v/6w2dhzar/claude-code-vs-codex-vs-gemini-cli?via=embed) |

### Coffee & drinks

| Poll | Status | Live badge |
|---|---|---|
| [The Coca-Cola Company Coca-Cola vs PepsiCo Pepsi](https://pollreal.com/v/7snzunsb/coca-cola-vs-pepsi?via=embed) | Final · no votes | [![Pollreal: The Coca-Cola Company Coca-Cola vs PepsiCo Pepsi](https://pollreal.com/badge/7snzunsb.svg)](https://pollreal.com/v/7snzunsb/coca-cola-vs-pepsi?via=embed) |

### Consoles & gaming gear

| Poll | Status | Live badge |
|---|---|---|
| [Sony PlayStation 5 vs Microsoft Xbox Series X\|S vs Nintendo Switch 2](https://pollreal.com/v/buva9ard/playstation-5-vs-xbox-series-x-s-vs-switch-2?via=embed) | Final · **Sony PlayStation 5** 100% · 1 votes | [![Pollreal: Sony PlayStation 5 vs Microsoft Xbox Series X\|S vs Nintendo Switch 2](https://pollreal.com/badge/buva9ard.svg)](https://pollreal.com/v/buva9ard/playstation-5-vs-xbox-series-x-s-vs-switch-2?via=embed) |

### Databases

| Poll | Status | Live badge |
|---|---|---|
| [PostgreSQL vs Oracle MySQL vs MongoDB vs SQLite](https://pollreal.com/v/cgguvcxp/postgresql-vs-mysql-vs-mongodb-vs-sqlite?via=embed) | Final · no votes | [![Pollreal: PostgreSQL vs Oracle MySQL vs MongoDB vs SQLite](https://pollreal.com/badge/cgguvcxp.svg)](https://pollreal.com/v/cgguvcxp/postgresql-vs-mysql-vs-mongodb-vs-sqlite?via=embed) |

### Fashion

| Poll | Status | Live badge |
|---|---|---|
| [Nike Pegasus vs adidas Ultraboost vs New Balance Fresh Foam X 1080 vs ASICS GEL-NIMBUS](https://pollreal.com/v/e63kcju7/pegasus-vs-ultraboost-vs-fresh-foam-x-1080-vs-gel-nimbus?via=embed) | Final · no votes | [![Pollreal: Nike Pegasus vs adidas Ultraboost vs New Balance Fresh Foam X 1080 vs ASICS GEL-NIMBUS](https://pollreal.com/badge/e63kcju7.svg)](https://pollreal.com/v/e63kcju7/pegasus-vs-ultraboost-vs-fresh-foam-x-1080-vs-gel-nimbus?via=embed) |

### Frameworks & libraries

| Poll | Status | Live badge |
|---|---|---|
| [Meta React vs Vue.js Vue vs Svelte vs Google Angular](https://pollreal.com/v/d9v5deen/react-vs-vue-vs-svelte-vs-angular?via=embed) | Final · no votes | [![Pollreal: Meta React vs Vue.js Vue vs Svelte vs Google Angular](https://pollreal.com/badge/d9v5deen.svg)](https://pollreal.com/v/d9v5deen/react-vs-vue-vs-svelte-vs-angular?via=embed) |
| [OpenJS Foundation Node.js vs Oven Bun vs Deno](https://pollreal.com/v/mfm9hmvm/node-js-vs-bun-vs-deno?via=embed) | Final · no votes | [![Pollreal: OpenJS Foundation Node.js vs Oven Bun vs Deno](https://pollreal.com/badge/mfm9hmvm.svg)](https://pollreal.com/v/mfm9hmvm/node-js-vs-bun-vs-deno?via=embed) |

### Image generation

| Poll | Status | Live badge |
|---|---|---|
| [Midjourney vs Black Forest Labs FLUX vs OpenAI GPT Image vs Google Nano Banana](https://pollreal.com/v/682jbuxx/midjourney-vs-flux-vs-gpt-image-vs-nano-banana?via=embed) | Final · no votes | [![Pollreal: Midjourney vs Black Forest Labs FLUX vs OpenAI GPT Image vs Google Nano Banana](https://pollreal.com/badge/682jbuxx.svg)](https://pollreal.com/v/682jbuxx/midjourney-vs-flux-vs-gpt-image-vs-nano-banana?via=embed) |

### Messaging & team chat

| Poll | Status | Live badge |
|---|---|---|
| [Slack vs Discord vs Microsoft Teams](https://pollreal.com/v/xt92qz94/slack-vs-discord-vs-teams?via=embed) | Final · no votes | [![Pollreal: Slack vs Discord vs Microsoft Teams](https://pollreal.com/badge/xt92qz94.svg)](https://pollreal.com/v/xt92qz94/slack-vs-discord-vs-teams?via=embed) |

### Notes & docs

| Poll | Status | Live badge |
|---|---|---|
| [Notion vs Obsidian vs Apple Notes](https://pollreal.com/v/2vqpe6fs/notion-vs-obsidian-vs-notes?via=embed) | Final · no votes | [![Pollreal: Notion vs Obsidian vs Apple Notes](https://pollreal.com/badge/2vqpe6fs.svg)](https://pollreal.com/v/2vqpe6fs/notion-vs-obsidian-vs-notes?via=embed) |

### Open source & dev tools

| Poll | Status | Live badge |
|---|---|---|
| [Meta Llama vs DeepSeek vs Alibaba Cloud Qwen vs Mistral AI Mistral](https://pollreal.com/v/dscvwzbd/llama-vs-deepseek-vs-qwen-vs-mistral?via=embed) | Final · no votes | [![Pollreal: Meta Llama vs DeepSeek vs Alibaba Cloud Qwen vs Mistral AI Mistral](https://pollreal.com/badge/dscvwzbd.svg)](https://pollreal.com/v/dscvwzbd/llama-vs-deepseek-vs-qwen-vs-mistral?via=embed) |

### Operating systems

| Poll | Status | Live badge |
|---|---|---|
| [Apple macOS vs Microsoft Windows 11 vs Canonical Ubuntu](https://pollreal.com/v/x9sx6wxw/macos-vs-windows-11-vs-ubuntu?via=embed) | Final · **Canonical Ubuntu** 100% · 1 votes | [![Pollreal: Apple macOS vs Microsoft Windows 11 vs Canonical Ubuntu](https://pollreal.com/badge/x9sx6wxw.svg)](https://pollreal.com/v/x9sx6wxw/macos-vs-windows-11-vs-ubuntu?via=embed) |

### PCs & laptops

| Poll | Status | Live badge |
|---|---|---|
| [NVIDIA GeForce RTX 50 Series vs AMD Radeon RX 9000 Series vs Intel Arc](https://pollreal.com/v/9xr9wps5/geforce-rtx-50-series-vs-radeon-rx-9000-series-vs-arc?via=embed) | Final · no votes | [![Pollreal: NVIDIA GeForce RTX 50 Series vs AMD Radeon RX 9000 Series vs Intel Arc](https://pollreal.com/badge/9xr9wps5.svg)](https://pollreal.com/v/9xr9wps5/geforce-rtx-50-series-vs-radeon-rx-9000-series-vs-arc?via=embed) |

### Phones & tablets

| Poll | Status | Live badge |
|---|---|---|
| [Apple iPhone vs Google Pixel vs Samsung Galaxy S](https://pollreal.com/v/teggd3cc/iphone-vs-pixel-vs-galaxy-s?via=embed) | Final · **Samsung Galaxy S** 100% · 1 votes | [![Pollreal: Apple iPhone vs Google Pixel vs Samsung Galaxy S](https://pollreal.com/badge/teggd3cc.svg)](https://pollreal.com/v/teggd3cc/iphone-vs-pixel-vs-galaxy-s?via=embed) |

### Printers & 3D printers

| Poll | Status | Live badge |
|---|---|---|
| [Bambu Lab P1S vs Prusa Research CORE One vs Creality K2 Plus](https://pollreal.com/v/5bbbfsvb/p1s-vs-core-one-vs-k2-plus?via=embed) | Final · no votes | [![Pollreal: Bambu Lab P1S vs Prusa Research CORE One vs Creality K2 Plus](https://pollreal.com/badge/5bbbfsvb.svg)](https://pollreal.com/v/5bbbfsvb/p1s-vs-core-one-vs-k2-plus?via=embed) |

### Programming languages

| Poll | Status | Live badge |
|---|---|---|
| [Python Software Foundation Python vs Microsoft TypeScript vs Rust Foundation Rust vs Google Go](https://pollreal.com/v/mrvq9ezq/python-vs-typescript-vs-rust-vs-go?via=embed) | Final · no votes | [![Pollreal: Python Software Foundation Python vs Microsoft TypeScript vs Rust Foundation Rust vs Google Go](https://pollreal.com/badge/mrvq9ezq.svg)](https://pollreal.com/v/mrvq9ezq/python-vs-typescript-vs-rust-vs-go?via=embed) |

### Search & research

| Poll | Status | Live badge |
|---|---|---|
| [Perplexity vs Google AI Mode vs OpenAI ChatGPT](https://pollreal.com/v/gewsf95e/perplexity-vs-ai-mode-vs-chatgpt?via=embed) | Final · no votes | [![Pollreal: Perplexity vs Google AI Mode vs OpenAI ChatGPT](https://pollreal.com/badge/gewsf95e.svg)](https://pollreal.com/v/gewsf95e/perplexity-vs-ai-mode-vs-chatgpt?via=embed) |

### Smartwatches & wearables

| Poll | Status | Live badge |
|---|---|---|
| [Apple Watch vs Samsung Galaxy Watch vs Garmin Forerunner vs Google Pixel Watch](https://pollreal.com/v/gykhj7bk/apple-watch-vs-galaxy-watch-vs-forerunner-vs-pixel-watch?via=embed) | Final · no votes | [![Pollreal: Apple Watch vs Samsung Galaxy Watch vs Garmin Forerunner vs Google Pixel Watch](https://pollreal.com/badge/gykhj7bk.svg)](https://pollreal.com/v/gykhj7bk/apple-watch-vs-galaxy-watch-vs-forerunner-vs-pixel-watch?via=embed) |

### Streaming services

| Poll | Status | Live badge |
|---|---|---|
| [Spotify Premium vs Apple Music vs Google YouTube Music](https://pollreal.com/v/2cx4zchf/spotify-premium-vs-apple-music-vs-youtube-music?via=embed) | Final · no votes | [![Pollreal: Spotify Premium vs Apple Music vs Google YouTube Music](https://pollreal.com/badge/2cx4zchf.svg)](https://pollreal.com/v/2cx4zchf/spotify-premium-vs-apple-music-vs-youtube-music?via=embed) |

### Terminals & shells

| Poll | Status | Live badge |
|---|---|---|
| [Ghostty vs Warp vs iTerm2 vs WezTerm](https://pollreal.com/v/9z3pah9r/ghostty-vs-warp-vs-iterm2-vs-wezterm?via=embed) | Final · no votes | [![Pollreal: Ghostty vs Warp vs iTerm2 vs WezTerm](https://pollreal.com/badge/9z3pah9r.svg)](https://pollreal.com/v/9z3pah9r/ghostty-vs-warp-vs-iterm2-vs-wezterm?via=embed) |

### Video generation

| Poll | Status | Live badge |
|---|---|---|
| [Google Veo vs Runway Gen-4.5 vs Kling AI Kling vs Luma AI Ray3](https://pollreal.com/v/gx729c4z/veo-vs-gen-4-5-vs-kling-vs-ray3?via=embed) | Final · **Kling AI Kling** 100% · 1 votes | [![Pollreal: Google Veo vs Runway Gen-4.5 vs Kling AI Kling vs Luma AI Ray3](https://pollreal.com/badge/gx729c4z.svg)](https://pollreal.com/v/gx729c4z/veo-vs-gen-4-5-vs-kling-vs-ray3?via=embed) |

### Voice & music

| Poll | Status | Live badge |
|---|---|---|
| [Suno vs Udio vs ElevenLabs ElevenMusic](https://pollreal.com/v/m2s4v26u/suno-vs-udio-vs-elevenmusic?via=embed) | Final · no votes | [![Pollreal: Suno vs Udio vs ElevenLabs ElevenMusic](https://pollreal.com/badge/m2s4v26u.svg)](https://pollreal.com/v/m2s4v26u/suno-vs-udio-vs-elevenmusic?via=embed) |

### Web browsers

| Poll | Status | Live badge |
|---|---|---|
| [Google Chrome vs Apple Safari vs Mozilla Firefox vs Brave](https://pollreal.com/v/ga3hxy8x/chrome-vs-safari-vs-firefox-vs-brave?via=embed) | Final · **Google Chrome** 100% · 1 votes | [![Pollreal: Google Chrome vs Apple Safari vs Mozilla Firefox vs Brave](https://pollreal.com/badge/ga3hxy8x.svg)](https://pollreal.com/v/ga3hxy8x/chrome-vs-safari-vs-firefox-vs-brave?via=embed) |

## Put a badge in your README

Every poll has a badge that updates by itself. Add `?for=N` to speak for candidate N (1 = first), or use the card with the gauge:

```markdown
[![Pollreal](https://pollreal.com/badge/<poll-id>.svg?for=1)](https://pollreal.com/v/<poll-id>?via=embed)
[![Pollreal](https://pollreal.com/badge/card/<poll-id>.svg)](https://pollreal.com/v/<poll-id>?via=embed)
```

While a poll is open its split is shown only to people who voted, so the badge says "voting"; the numbers appear when it closes.

---
Updated 2026-11-14 10:34 UTC from https://pollreal.com/api/public/polls
