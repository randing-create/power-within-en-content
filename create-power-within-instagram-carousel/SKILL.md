---
name: create-power-within-instagram-carousel
description: Create, revise, review, or package source-faithful, native-English Power Within carousels for Instagram and LinkedIn from NotebookLM, transcripts, podcast episodes, or approved copy. Use for episode-sequenced production, five-slide idea-led carousels, platform-native captions, Source Cards, nature-led branded layouts, podcast and 1:1 coaching CTAs, SVG/PNG/PDF rendering, weekly Sunday finalization, and approval-gated Tuesday/Friday publishing handoff.
---

# Create Power Within Cross-Platform Carousel

Turn one verified podcast idea into one English carousel that feels clear, human, editorial, and visually grounded. Use the same slide content and design on Instagram and LinkedIn. Default to five slides, no invented personal story, and no publishing before the user approves the finished content and visuals.

## Load the right references

- Read [references/source-fidelity.md](references/source-fidelity.md) before writing or checking claims.
- Read [references/carousel-system.md](references/carousel-system.md) before drafting slides or designing layouts.
- Read [references/qa-and-delivery.md](references/qa-and-delivery.md) before rendering or handing off files.
- Read [references/notebooklm-intake.md](references/notebooklm-intake.md) only when the source material must be pulled from the Power Within NotebookLM notebook.
- Read [references/weekly-automation.md](references/weekly-automation.md) whenever the assignment is part of the Sunday draft and Tuesday/Friday publishing cycle.
- Use [assets/carousel-template.json](assets/carousel-template.json) as the source-neutral rendering brief. Replace every bracketed placeholder with verified material before rendering.
- Use [assets/logo.png](assets/logo.png) only when a logo is actually needed. Keep it small and undistorted.

## Establish the assignment

Confirm or infer these points from the request:

- Topic and episode.
- Available source material.
- Intended emotional register.
- Whether the user wants copy, visuals, or the complete production pack.
- Any approved CTA, episode number, collaborator, and link.

Apply these project defaults when the user has not changed them:

- Platforms: Instagram and LinkedIn.
- Language: English.
- Format: one five-slide carousel, an Instagram caption, and a short LinkedIn wrapper caption.
- Editorial approach: idea-led, without a personal story.
- Publishing status: draft for approval.
- Podcast destination: `https://powerwithin.riverside.com/`.
- Ran 1:1 Discovery Call: `https://calendly.com/randing-work/coaching-session`.
- Collaboration handle: `@powerwithin.xlys`, for a later approved publishing step only.

Do not rewrite the carousel into a separate LinkedIn essay or 220–350-word feed post. LinkedIn receives the same ordered pages as a PDF document post. Change only the short wrapper caption and platform mechanics.

When producing the series in episode order, verify the numbered NotebookLM source list and select the lowest episode that has not yet been produced. Record the episode number in the folder name, Source Card, metadata, caption, and CTA. Do not infer a publication date when the source does not provide one.

## Build a traceable content core

1. Retrieve or inspect the source material.
2. Create a Source Card with episode, scene or context, verified claims, exact metaphor, practical suggestion, and quote status.
3. Label every proposed claim as verified, close paraphrase, or editorial interpretation.
4. Remove unsupported biography, locations, numbers, motives, mechanisms, and causality.
5. Write one internal content thesis in plain English before drafting slides.
6. Write a source-faithful English draft, then run a separate native-English pass without changing the claim.

Treat NotebookLM translations as close paraphrases. Use quotation marks only after checking the original transcript or audio.

## Draft the carousel

Use this five-slide movement unless the source demands a better structure:

1. Name the tension or redefine the topic.
2. Clarify the key distinction.
3. Use the episode's exact metaphor or strongest concrete image.
4. Offer one source-grounded practice.
5. End with a warm invitation, podcast CTA, and 1:1 coaching CTA.

Keep each slide to one information action. Let the story or source context live in the Source Card unless the user asks for story-led public copy.

Write an 80–150 word Instagram caption that deepens the carousel without repeating every slide. Write a 50–100 word LinkedIn wrapper caption that introduces the same carousel without restating it or turning it into a professional essay. Both captions end their editorial section with one specific, answerable question and use the approved podcast and coaching CTA block from [references/carousel-system.md](references/carousel-system.md). Use three to five hashtags on Instagram and no more than two on LinkedIn.

## Design the visual sequence

Follow [references/carousel-system.md](references/carousel-system.md). In particular:

- Work at `1080 × 1350`.
- Use no more than two brand colours plus one neutral on a slide.
- Give every slide one meaningful natural gesture.
- Use the approved bookend hierarchy: slides 1 and 5 use `76 px` all-caps titles; slides 2–4 use `64 px` sentence-case titles.
- Keep every title left-aligned at the same horizontal anchor. Never spread all-caps styling across the middle slides.
- Preserve negative space and asymmetrical balance.
- Avoid quote-card templates, botanical decoration, stock wellness imagery, and repeated layouts.

Use [scripts/render-carousel.mjs](scripts/render-carousel.mjs) with a JSON brief when the supplied layout system fits. Start from [assets/carousel-template.json](assets/carousel-template.json). The renderer supports rings, open edges, silence, meeting lines, paths, compasses, forks, waves, breathing rhythms, inner compasses, separation, dilution, and boundaries. Edit explicit line breaks deliberately; never rely on accidental text wrapping.

## Review before delivery

Render every slide and inspect both the full-size images and the contact sheet. Apply [references/qa-and-delivery.md](references/qa-and-delivery.md), then deliver:

- Source Card and content thesis.
- Final slide copy and caption.
- Five PNG files at `1080 × 1350`.
- Five editable SVG files.
- One ordered LinkedIn PDF containing the same five pages.
- One contact sheet.
- One short art-direction note.

Outside the approved weekly automation, end at an approval-ready draft. Do not schedule, publish, invite a collaborator, or send the user into a booking flow until the user explicitly approves the finished assets and asks for that action.

When this skill runs inside the approved weekly automation, follow [references/weekly-automation.md](references/weekly-automation.md). The user has pre-authorized platform scheduling after explicit approval of the exact files, so that approval opens the Sunday scheduling phase. Treat approval as asset-specific: any edit to copy, links, page order, or visuals returns the post to draft status.
