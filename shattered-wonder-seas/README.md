# Shattered Wonder Seas

Civilization VII YnAMP fixed-map mod with massive fractured seas, handcrafted
continents, deterministic starts, and curated natural wonders.

## Maps

### Twin Discovery Wonder Seas

The main showcase map:

- Massive 128x80 map.
- Two main continents separated by deep ocean routes.
- Central Isabella-focused island between the continents.
- Shallow-sea access from the central island to the western continent.
- Long rivers, lakes, bays, satellite islands, inland seas, and island chains.
- AI true-start positions distributed across the two major continents.
- Independent military pressure reduced to very small unit groups, with a
  mainland relocation fallback when the game exposes city-state or independent
  starts early enough.
- 19 curated natural wonders, with additional terrain stabilization for coastal,
  ocean, mountain, and waterfall wonders.

### Shattered Wonder Seas

Earlier fractured-ocean map variant with a central wonder island and a larger
irregular mainland.

## Requirements

- Civilization VII.
- YnAMP for Civilization VII.

The mod only declares `base-standard` and `ged-ynamp` as hard dependencies. DLC
natural wonders are still listed in the map data; if a feature type is unavailable
in a player's installation, YnAMP will skip that wonder rather than making the
save depend on an unowned DLC package.

## Install

Copy this `shattered-wonder-seas` folder to:

```text
%localappdata%\Firaxis Games\Sid Meier's Civilization VII\Mods
```

Then enable the mod in-game and select one of the added maps.

## Notes

- New games are recommended after updating the mod.
- Old saves may retain older mod dependency metadata from previous builds.
- The curated natural-wonder mode is forced to real-only for these maps, so failed
  curated wonder placements do not get replaced by unrelated random wonders.
- Independent/city-state military unit caps are deliberately lowered for this
  map to avoid heavy garrisons around the central wonder island and satellite
  islands.
