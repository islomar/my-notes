---
name: spec-polish
description: Condense a markdown spec and strip AI-writing tells
---
Given the markdown file I name:
1. Condense: remove restatement, merge redundant sections, keep every decision.
2. Strip AI-writing failure modes: filler adjectives, "not just X but Y", em-dash padding, hedging, summary paragraphs that add nothing.
3. Regenerate the table of contents with doctoc if one exists.
4. Show me a diff summary of what was cut before writing.
