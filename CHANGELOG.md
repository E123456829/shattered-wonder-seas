# Changelog

This changelog reconstructs the major local iteration milestones before the
first public GitHub release.

## v0.6.0 - 2026-06-07

- Added a post-generation relocation pass for city-state and independent-power
  starts on `Twin Discovery Wonder Seas`.
- Steered city-state and independent starts away from the central wonder island,
  satellite wonder islands, and natural-wonder exclusion zones.
- Selected mainland fallback candidates from the two large continents and
  balanced them between west and east where possible.

## v0.5.0 - 2026-06-07

- Prepared the project for public sharing on GitHub.
- Added portfolio-oriented documentation and install notes.
- Fixed Simplified Chinese localization XML encoding and broken text tags.
- Removed optional DLC natural-wonder modules from hard dependencies so save
  files do not report unowned content when those package IDs are unavailable.

## v0.4.0 - 2026-06-06

- Reworked true-start behavior for `Twin Discovery Wonder Seas`.
- Added broader civilization TSL coverage so AI players spawn on the two main
  continents instead of the central island or satellite islands.
- Moved the Isabella-focused home start to a valid land tile next to
  Machapuchare.
- Removed the late post-generation start override to keep actual starts and
  starting visibility in sync.

## v0.3.0 - 2026-06-06

- Hardened curated natural-wonder placement for 19 unique wonders.
- Added final terrain stabilization for waterfall, coast, deep-ocean, mountain,
  and multi-tile natural wonders.
- Added river support for Iguazu Falls and deep-ocean stabilization for Bermuda
  Triangle.
- Expanded coastal footprints for Mapu a Vaea Blowholes, Great Blue Hole, and
  Thera.

## v0.2.0 - 2026-06-06

- Added `Twin Discovery Wonder Seas`, a massive two-continent map with a central
  Isabella island between the landmasses.
- Built shallow-sea access to the west continent and deep-ocean separation from
  the east continent.
- Added satellite islands, inland seas, long rivers, bays, lakes, and mixed
  terrain zones around the home island.

## v0.1.0 - 2026-06-03

- Created the first `Shattered Wonder Seas` fixed-map prototype.
- Registered the mod, map scripts, map options, and English/Simplified Chinese
  map text.
- Added early curated wonder-island layout and YnAMP integration.
