# Changelog

## v0.6

- Changed the independent/city-state balance pass from only reducing unit counts
  to also giving human-player combat units +50 combat strength against minor-civ
  and independent opponents.
- Allowed independent land combat unit groups to reach 2 units while keeping
  defenders, scouts, naval units, and crisis units tightly capped.

## v0.5

- Replaced the resource-blocking city-state mitigation with database tuning for
  independent military units.
- Kept independent defenders at 1 unit and lowered scout, combat, naval, and
  crisis unit caps to very small groups.
- Removed the resource blocker pass so the map no longer gains artificial
  resource clutter around the wonder island and natural wonders.

## v0.4

- Added a post-generation exclusion pass for the Twin Discovery Wonder Seas map.
- The central Isabella wonder island, its wonder satellite islands, and natural-wonder
  surroundings are now tagged as island plots and seeded with natural resource
  blockers on valid independent/city-state start candidates.
- Kept the older mainland relocation pass as a fallback for city-state or independent
  starts that are visible during map generation.

## v0.3

- Removed hard DLC package dependencies so saves do not depend on unowned natural
  wonder DLC packages.

## v0.2

- Expanded Twin Discovery Wonder Seas with two distant continents, a central
  Isabella wonder island, more rivers, irregular coastlines, and 19 curated natural
  wonder targets.

## v0.1

- Initial Shattered Wonder Seas fixed-map prototype.
