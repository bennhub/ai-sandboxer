# AI Sandboxer

AI Sandboxer is a personal playground for building and testing small AI-powered product ideas.

The repo is meant to hold multiple local-first and AI-assisted experiments over time, not just one app. The goal is to explore practical uses of AI in software workflows, product interactions, QA practice, and engineering tooling without pretending the model should own the whole experience.

This repo is intentionally hands-on:

- prototype ideas quickly
- test local LLM workflows
- compare deterministic logic vs AI-assisted guidance
- turn real interview or job-market signals into portfolio projects

## Current Project: Test Code Dojo

The first project inside AI Sandboxer is `Test Code Dojo`.

Test Code Dojo is a local-first QA training app built around a coding model running in Ollama. It is designed to help practice the kinds of skills that come up in QA engineering interviews and modern AI-enabled test workflows.

Instead of using AI to generate an entire app from scratch, Test Code Dojo uses AI in a narrower and more useful role: coaching. The app provides structured exercises, fixed training lanes, and deterministic checks. The local LLM acts as a sensei for hints, bug explanations, review feedback, and critique.

## What Test Code Dojo Trains

Test Code Dojo is organized around four training lanes:

- `Automation Coding`
- `Code Review Training`
- `Test Design Practice`
- `AI Skill Training`

These lanes are meant to map to real QA expectations:

- write and improve test scripts
- understand and review automation code
- design strong test coverage from requirements
- learn how to structure AI instructions for engineering workflows

## Why This Project Exists

This project is based on a practical observation: QA roles are changing.

Companies increasingly want QA engineers who can:

- write automation code
- review code critically
- think clearly about test design
- use AI tools without becoming dependent on them

Test Code Dojo was built to demonstrate that skill set in one place. It is also a portfolio project that shows practical understanding of local LLM workflows, especially where they help and where they should be constrained.

## How AI Is Used

Test Code Dojo uses a local coding model through Ollama. The intended default model is:

- `qwen2.5-coder:7b`

The model is used for:

- `Get Hint`
- `Explain Bug`
- `Review Draft`

The model is not used as the scoring engine. Exercise definitions, starter prompts, and pass/fail checks stay in the app so the product remains more stable and easier to reason about.

This is deliberate. A big part of the project is showing that AI works better when it is constrained to the right job.

## Features

- local-first model integration with Ollama
- simplified home page with lane-based entry points
- focused 2-panel practice workspace
- deterministic exercise checks
- QA-centered practice content
- multiple exercises per lane
- coaching-style AI interactions instead of full code generation

## Tech Stack

- static HTML/CSS/JavaScript
- Monaco editor
- Ollama local API
- Qwen coding model

## Project Structure

- [index.html](./index.html)  
  Main app UI and interaction logic.

- [challenges.js](./challenges.js)  
  Training lanes, exercises, and deterministic checks.

- [code-store.html](./code-store.html)  
  Legacy or experimental file kept in the repo.

## Running Test Code Dojo

From the repo folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/index.html
```

Make sure Ollama is running and that you have a supported model installed, for example:

```bash
ollama list
ollama pull qwen2.5-coder:7b
```

## Portfolio Framing

AI Sandboxer is not meant to be a generic “AI made something” repo.

The point is to explore useful AI product patterns with a stronger engineering lens:

- when to use a local LLM
- when not to trust the model
- how to combine AI with deterministic workflows
- how to design AI features that stay useful under real constraints

Test Code Dojo is the first project in that direction.

## Roadmap

Potential future additions to this repo:

- more AI-assisted QA tools
- local-first debugging and review experiments
- workflow trainers for prompt and skill design
- small AI product prototypes with clearer engineering boundaries
