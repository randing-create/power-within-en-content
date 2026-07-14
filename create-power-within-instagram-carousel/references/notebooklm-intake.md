# NotebookLM Intake

Use the Power Within NotebookLM notebook as a retrieval layer, not as unquestioned authority.

Obtain the Power Within notebook URL from the user or the team's protected configuration. Do not commit a private notebook identifier to a public repository.

Always use the installed wrapper. Never call the underlying NotebookLM scripts directly.

```bash
cd ~/.claude/skills/notebooklm
python3 scripts/run.py auth_manager.py status
python3 scripts/run.py ask_question.py \
  --question "YOUR COMPLETE QUESTION" \
  --notebook-url "POWER_WITHIN_NOTEBOOK_URL"
```

Ask one topic per query. Include full context because each query opens a new browser session. Request:

- The strongest concrete moment.
- The emotional tension before and after it.
- The exact metaphor in the source language.
- Memorable phrasing with surrounding context.
- Any practical suggestion made in the episode.
- Episode number or title when available.

Ask for raw material, not a general summary. If the answer is thin, ask one follow-up with more specific context, then move on.

After retrieval:

1. Preserve the Chinese evidence in the Source Card.
2. Note automatic-transcription errors.
3. Classify English wording as verified, close paraphrase, or editorial interpretation.
4. Check the original transcript or audio before publishing a direct quotation.

If wrapper access is unavailable, use an authenticated browser only when the user has made it available and the browser skill is authorised for the task.
