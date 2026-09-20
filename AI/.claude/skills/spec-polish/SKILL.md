---
name: spec-polish
description: Condense a markdown spec and strip AI-writing tells
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Given the markdown file I name:
1. Condense: remove restatement, merge redundant sections, keep every decision.
2. Strip AI-writing failure modes: filler adjectives, "not just X but Y", em-dash padding, hedging, summary paragraphs that add nothing.
3. Regenerate the table of contents with doctoc if one exists.
4. Show me a diff summary of what was cut before writing.
