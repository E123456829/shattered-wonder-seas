# Portfolio Notes

This file explains how I would describe the project in a portfolio, resume, or
interview setting.

## Recommended Resume Framing

**Civilization VII Custom Map Mod**

Designed and shipped a massive YnAMP-based Civilization VII fixed-map mod with
handcrafted continents, a central Isabella-focused start island, curated natural
wonder placement, deterministic true-start logic, localization, mod packaging,
save/load dependency fixes, and GitHub release preparation.

## What I Would Claim As My Work

- Gameplay concept and design goals:
  - central Isabella island between two continents;
  - exploration-era separation between major landmasses;
  - dense home-island wonder fantasy balanced against mainland AI starts;
  - specific terrain, river, island, shallow-sea, and natural-wonder requirements.
- Iteration and acceptance testing:
  - checking whether starts appeared in the intended locations;
  - identifying missing or misplaced natural wonders;
  - reporting terrain, river, coastline, and save/load problems after in-game tests;
  - deciding when a map version matched the intended player experience.
- Product direction:
  - choosing the project scope as a playable mod rather than a static map sketch;
  - deciding to support English and Simplified Chinese text;
  - preparing the project for GitHub and future public sharing.

## What I Would Describe As AI-Assisted

- Implementation support:
  - drafting and editing Civ VII/YnAMP JavaScript, XML, and SQL files;
  - translating design requirements into coordinate tables and terrain passes;
  - adding defensive terrain stabilization around natural-wonder placement rules.
- Debugging support:
  - diagnosing why specific wonders failed placement;
  - investigating true-start-location behavior;
  - identifying the save/load dependency issue caused by optional DLC modules.
- Documentation and repository support:
  - drafting README, changelog, and release notes;
  - organizing Git commits and GitHub publishing steps;
  - fixing malformed localization XML.

## Honest Short Disclosure

This project was built with AI-assisted tooling. I provided the design goals,
gameplay constraints, iteration feedback, and in-game validation; AI assistance
was used to accelerate scripting, data-file editing, debugging, and documentation.

## Why This Still Demonstrates Useful Game-Dev Skill

- The work required turning a player-facing design goal into a playable,
  packaged mod.
- The iteration loop depended on in-game testing, observation, and design
  judgment rather than one-shot code generation.
- The project involved real production concerns: dependencies, localization,
  save/load compatibility, version history, documentation, and distribution.
- The final artifact can be installed, tested, and discussed by other players.

## Interview Talking Points

- Why I chose a directed scenario map instead of a balanced Earth-style map.
- How I used constraints to keep Isabella's start special while giving AI players
  normal mainland development space.
- Why natural-wonder placement needed stabilization passes instead of only XML
  coordinates.
- What failed during iteration and how I adjusted the implementation after
  testing.
- How I used AI as a development tool while retaining design ownership and QA
  responsibility.
