# Source Fidelity

Use this standard before turning podcast material into public copy.

## Classify every claim

### Verified

Use when the idea, event, metaphor, or instruction appears clearly in the transcript or audio. A NotebookLM answer can point to the evidence, but verify direct quotations against the original source.

### Close paraphrase

Use when the English wording is an accurate transcreation of a verified Chinese idea. Keep the meaning and emotional weight while making the sentence natural for an English reader. Do not use quotation marks.

### Editorial interpretation

Use when the sentence extends, explains, or infers beyond the source. Do not present it as the episode's view. Remove it or ask the user to approve it explicitly.

## Build the Source Card

Record:

- Episode number and title.
- Relevant scene or conversational context.
- Verified facts and claims.
- Exact Chinese metaphor or phrase when useful.
- Practical advice stated in the episode.
- Quote status for every proposed English quotation.
- Any uncertainty or transcription error.

## Guardrails

- Never invent the creator's location, history, client stories, numbers, relationships, or motives.
- Never add a psychological mechanism because it sounds plausible.
- Never turn correlation into causation.
- Never polish an automatic transcript into a direct English quotation without checking the audio.
- Treat NotebookLM's English translation as a close paraphrase.
- Omit a doubtful detail when it does not change the idea.
- Ask the user when a doubtful detail materially changes the message.

## Transcreation standard

Translate the experience, not the syntax. Preserve the cultural texture of the source while making the English self-contained. Prefer short sentences and concrete nouns. Avoid explanatory padding.

## Native-English pass

Run this only after the source-faithful draft is stable.

1. Rewrite from the intended meaning instead of polishing the Chinese sentence structure word by word.
2. Replace translated collocations with phrases an English-speaking creator would naturally use.
3. Read the caption aloud and remove formal transitions, repeated sentence openings, and unnecessary explanation.
4. Keep the emotional register conversational without adding slang that changes the voice.
5. Compare the native draft against the Source Card. If smoother wording changes the claim, restore the source-faithful meaning.

Prefer a direct phrase such as `Uncertainty has a way of making us rush towards an answer` over an abstract explanation of the same idea. Keep captions human and fluid, not maximally polished.

Reject:

- Rule-of-three lists.
- Buzzwords such as “delve,” “crucial,” “robust,” “multifaceted,” and “testament to.”
- Motivational platitudes.
- Manufactured urgency.
- Passive constructions when a clear subject can act.
- Decorative em dashes.
- Translation-shaped phrases that are technically correct but unlikely in natural social writing.

## Public-story default

Keep personal scenes in the internal Source Card unless the user asks for story-led copy. For the current Power Within Instagram system, default to an idea-led carousel with no invented or unnecessary personal narrative.
