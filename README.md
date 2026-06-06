# Shattered Wonder Seas

A Civilization VII YnAMP fixed-map mod focused on handcrafted world layout,
curated natural wonders, and deterministic true-start behavior.

## Project Summary

This project builds two massive custom maps for Civilization VII, with the
primary showcase map, **Twin Discovery Wonder Seas**, designed around a central
Isabella island between two exploration-separated continents.

The map uses YnAMP's fixed-map loader, true-start-location tables, and custom
natural-wonder placement data, then layers additional terrain stabilization logic
to keep starts, rivers, terrain, and natural-wonder footprints reliable across
game generation.

## Highlights

- Massive 128x80 fixed map for Civilization VII.
- Two major continents separated by deep ocean exploration routes.
- A central Isabella start island with shallow-sea access, lakes, bays, rivers,
  desert, tropical, and temperate terrain.
- Curated placement for 19 natural wonders, including the seven production-focused
  wonders on or around the home island.
- Custom terrain generation for irregular continents, satellite islands, inland
  seas, shallow channels, and long navigable river systems.
- True-start-location tuning for many civilizations so AI players spawn on the
  two main continents rather than on the home island or satellite islands.
- Localized English and Simplified Chinese map text.
- Mod packaging for the Civilization VII Mods directory, with only `base-standard`
  and `ged-ynamp` as hard dependencies.

## Technical Work

- Implemented fixed-map data generation in JavaScript using Civ VII terrain row
  structures.
- Added deterministic post-processing passes for coastlines, river edges, island
  separation, wonder terrain support, and start-plot stability.
- Used XML and SQL database updates to register maps, true-start positions, custom
  natural-wonder anchors, and relaxed placement constraints for curated wonders.
- Iterated around engine-specific placement rules for waterfall, coast, deep-ocean,
  multi-tile, and DLC-dependent natural wonders.
- Debugged save/load dependency issues caused by optional DLC modules being treated
  as hard mod dependencies.

## Installation

Install YnAMP for Civilization VII first.

Then copy the `shattered-wonder-seas` folder to:

```text
%localappdata%\Firaxis Games\Sid Meier's Civilization VII\Mods
```

After launching the game, enable the mod and select one of the added maps:

- `Shattered Wonder Seas`
- `Twin Discovery Wonder Seas`

## Current Status

The current build is playable and tuned for a 10-player massive map setup. Old
save files may retain earlier mod dependency metadata, so new test games are
recommended after updating the mod.

## Repository Layout

```text
shattered-wonder-seas/
  config/          Civ VII map selection and option registration
  data/            Start positions, natural wonders, and SQL placement tuning
  maps/            Fixed-map JavaScript generation scripts
  text/            English and Simplified Chinese localization
  *.modinfo        Civ VII mod package metadata
```
