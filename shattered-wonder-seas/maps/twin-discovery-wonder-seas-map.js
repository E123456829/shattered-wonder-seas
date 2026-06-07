/*
 * Twin Discovery Wonder Seas
 * Fixed 128x80 YnAMP map with two distant continents and a central Isabella wonder island.
 */
console.log("loading script twin-discovery-wonder-seas-map.js");

import { generateYnAMP } from '/ged-ynamp/maps/ynamp-map-loading.js';
import { assignAdvancedStartRegions } from '/base-standard/maps/assign-advanced-start-region.js';
import {
    CITY_STATE_EXCLUSION_RADIUS,
    CITY_STATE_EXCLUSION_WONDERS,
    CITY_STATE_EXCLUSION_ZONES,
    CITY_STATE_MAINLAND_ZONES,
    CITY_STATE_MIN_MAINLAND_COMPONENT_SIZE,
    GetMap,
    MAP_HEIGHT,
    MAP_WIDTH
} from '/codex-shattered-wonder-seas/maps/twin-discovery-wonder-seas-data.js';

const CITY_STATE_BLOCKER_RESOURCE_TYPES = [
    "RESOURCE_CLAY",
    "RESOURCE_LIMESTONE",
    "RESOURCE_GYPSUM",
    "RESOURCE_MARBLE",
    "RESOURCE_WILD_GAME",
    "RESOURCE_HARDWOOD",
    "RESOURCE_RICE",
    "RESOURCE_MANGOS",
    "RESOURCE_DATES",
    "RESOURCE_COTTON",
    "RESOURCE_HORSES",
    "RESOURCE_IRON"
];

function requestMapData(initParams) {
    initParams.width = MAP_WIDTH;
    initParams.height = MAP_HEIGHT;
    initParams.wrapX = false;
    initParams.wrapY = false;
    engine.call("SetMapInitData", initParams);
}

function forceTwinDiscoveryOptions() {
    if (typeof Configuration === "undefined" || typeof Configuration.setMapValue !== "function" ||
            typeof Database === "undefined" || typeof Database.makeHash !== "function") {
        console.log("TwinDiscoveryWonderSeas: map option override is unavailable; using database defaults.");
        return;
    }

    Configuration.setMapValue("NWPlacementMode", Database.makeHash("YNAMP_NW_PLACEMENT_REAL_ONLY"));
    Configuration.setMapValue("CivilizationTSL", 1);
}

function getPlotIndex(x, y) {
    return y * MAP_WIDTH + x;
}

function getPlotLocation(plot) {
    return {
        x: plot % MAP_WIDTH,
        y: Math.floor(plot / MAP_WIDTH)
    };
}

function isValidPlot(plot) {
    return plot !== undefined && plot !== null && !isNaN(plot) && plot >= 0;
}

function getMainlandZone(x, y) {
    for (const zone of CITY_STATE_MAINLAND_ZONES) {
        if (x >= zone.minX && x <= zone.maxX && y >= zone.minY && y <= zone.maxY) {
            return zone;
        }
    }
    return null;
}

function isInCityStateExclusionZone(x, y) {
    for (const zone of CITY_STATE_EXCLUSION_ZONES) {
        if (x >= zone.minX && x <= zone.maxX && y >= zone.minY && y <= zone.maxY) {
            return true;
        }
    }
    return false;
}

function isNearWonder(x, y, wonderRadius = CITY_STATE_EXCLUSION_RADIUS) {
    for (const wonder of CITY_STATE_EXCLUSION_WONDERS) {
        if (GameplayMap.getPlotDistance(x, y, wonder.x, wonder.y) <= wonderRadius) {
            return true;
        }
    }

    for (let scanY = Math.max(0, y - wonderRadius); scanY <= Math.min(MAP_HEIGHT - 1, y + wonderRadius); scanY++) {
        for (let scanX = Math.max(0, x - wonderRadius); scanX <= Math.min(MAP_WIDTH - 1, x + wonderRadius); scanX++) {
            if (GameplayMap.getPlotDistance(x, y, scanX, scanY) <= wonderRadius &&
                    GameplayMap.isNaturalWonder(scanX, scanY)) {
                return true;
            }
        }
    }

    return false;
}

function isSettlableCityStatePlot(x, y) {
    return !GameplayMap.isWater(x, y) &&
        !GameplayMap.isMountain(x, y) &&
        !GameplayMap.isNaturalWonder(x, y) &&
        GameplayMap.getResourceType(x, y) === ResourceTypes.NO_RESOURCE;
}

function getResourceIndex(resourceType) {
    if (typeof GameInfo === "undefined" || !GameInfo.Resources) {
        return ResourceTypes.NO_RESOURCE;
    }

    const resource = GameInfo.Resources.find((row) => row.ResourceType === resourceType);
    return resource ? resource.$index : ResourceTypes.NO_RESOURCE;
}

function collectBlockerResourceIndexes() {
    const indexes = [];
    for (const resourceType of CITY_STATE_BLOCKER_RESOURCE_TYPES) {
        const index = getResourceIndex(resourceType);
        if (index !== ResourceTypes.NO_RESOURCE && !indexes.includes(index)) {
            indexes.push(index);
        }
    }
    return indexes;
}

function canHaveResourceSafe(x, y, resourceIndex) {
    if (typeof ResourceBuilder === "undefined" || typeof ResourceBuilder.canHaveResource !== "function") {
        return false;
    }

    try {
        return ResourceBuilder.canHaveResource(x, y, resourceIndex, true);
    } catch (_err) {
        try {
            return ResourceBuilder.canHaveResource(x, y, resourceIndex);
        } catch (_innerErr) {
            return false;
        }
    }
}

function placeBlockerResource(x, y, blockerResourceIndexes) {
    if (GameplayMap.getResourceType(x, y) !== ResourceTypes.NO_RESOURCE ||
            typeof ResourceBuilder === "undefined" || typeof ResourceBuilder.setResourceType !== "function") {
        return false;
    }

    for (const resourceIndex of blockerResourceIndexes) {
        if (canHaveResourceSafe(x, y, resourceIndex)) {
            ResourceBuilder.setResourceType(x, y, resourceIndex);
            return true;
        }
    }

    if (blockerResourceIndexes.length > 0) {
        ResourceBuilder.setResourceType(x, y, blockerResourceIndexes[0]);
        return GameplayMap.getResourceType(x, y) !== ResourceTypes.NO_RESOURCE;
    }

    return false;
}

function tagIndependentExclusionPlot(x, y) {
    if (typeof TerrainBuilder === "undefined" || typeof TerrainBuilder.addPlotTag !== "function" ||
            typeof PlotTags === "undefined" || PlotTags.PLOT_TAG_ISLAND === undefined) {
        return false;
    }

    TerrainBuilder.addPlotTag(x, y, PlotTags.PLOT_TAG_ISLAND);
    return true;
}

function isIndependentSpawnExclusionPlot(x, y) {
    return isInCityStateExclusionZone(x, y) || isNearWonder(x, y);
}

function isCandidateForIndependentBlocker(x, y, usedPlots) {
    if (!isIndependentSpawnExclusionPlot(x, y) || !isSettlableCityStatePlot(x, y)) {
        return false;
    }

    const plot = getPlotIndex(x, y);
    if (usedPlots.has(plot)) {
        return false;
    }

    if (typeof StartPositioner === "undefined" ||
            typeof StartPositioner.getStartPositionScore !== "function") {
        return true;
    }

    return StartPositioner.getStartPositionScore(x, y) > 0;
}

function reserveIndependentSpawnExclusionZones() {
    if (typeof GameplayMap === "undefined" || typeof ResourceBuilder === "undefined" ||
            typeof ResourceTypes === "undefined") {
        console.log("TwinDiscoveryWonderSeas: independent exclusion resource pass unavailable.");
        return;
    }

    const blockerResourceIndexes = collectBlockerResourceIndexes();
    if (blockerResourceIndexes.length === 0) {
        console.log("TwinDiscoveryWonderSeas: no blocker resources available for independent exclusion.");
        return;
    }

    const usedPlots = collectUsedStartPlots();
    let taggedPlots = 0;
    let candidatePlots = 0;
    let blockedPlots = 0;
    let failedPlots = 0;

    for (let y = 0; y < MAP_HEIGHT; y++) {
        for (let x = 0; x < MAP_WIDTH; x++) {
            if (!isIndependentSpawnExclusionPlot(x, y) || GameplayMap.isWater(x, y) ||
                    GameplayMap.isMountain(x, y) || GameplayMap.isNaturalWonder(x, y)) {
                continue;
            }

            if (tagIndependentExclusionPlot(x, y)) {
                taggedPlots++;
            }

            if (!isCandidateForIndependentBlocker(x, y, usedPlots)) {
                continue;
            }

            candidatePlots++;
            if (placeBlockerResource(x, y, blockerResourceIndexes)) {
                blockedPlots++;
            } else {
                failedPlots++;
            }
        }
    }

    console.log("TwinDiscoveryWonderSeas: independent spawn exclusion tagged=" + taggedPlots +
        " candidates=" + candidatePlots +
        " resourceBlocked=" + blockedPlots +
        " failed=" + failedPlots);
}

function buildLandComponentSizes() {
    const sizesByPlot = new Map();
    const visited = new Set();
    const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1], [1, -1], [-1, 1]
    ];

    for (let y = 0; y < MAP_HEIGHT; y++) {
        for (let x = 0; x < MAP_WIDTH; x++) {
            const startPlot = getPlotIndex(x, y);
            if (visited.has(startPlot) || GameplayMap.isWater(x, y)) {
                continue;
            }

            const queue = [{ x, y }];
            const plots = [];
            visited.add(startPlot);

            while (queue.length > 0) {
                const current = queue.shift();
                const plot = getPlotIndex(current.x, current.y);
                plots.push(plot);

                for (const [dx, dy] of directions) {
                    const nx = current.x + dx;
                    const ny = current.y + dy;
                    const nextPlot = getPlotIndex(nx, ny);
                    if (nx < 0 || ny < 0 || nx >= MAP_WIDTH || ny >= MAP_HEIGHT ||
                            visited.has(nextPlot) || GameplayMap.isWater(nx, ny)) {
                        continue;
                    }

                    visited.add(nextPlot);
                    queue.push({ x: nx, y: ny });
                }
            }

            for (const plot of plots) {
                sizesByPlot.set(plot, plots.length);
            }
        }
    }

    return sizesByPlot;
}

function isTooCloseToUsed(x, y, usedPlots, minDistance) {
    for (const plot of usedPlots) {
        const used = getPlotLocation(plot);
        if (GameplayMap.getPlotDistance(x, y, used.x, used.y) < minDistance) {
            return true;
        }
    }
    return false;
}

function collectCityStateCandidates(usedPlots) {
    const componentSizes = buildLandComponentSizes();
    const candidates = [];

    for (let y = 0; y < MAP_HEIGHT; y++) {
        for (let x = 0; x < MAP_WIDTH; x++) {
            const zone = getMainlandZone(x, y);
            if (!zone || !isSettlableCityStatePlot(x, y) || isNearWonder(x, y)) {
                continue;
            }

            const plot = getPlotIndex(x, y);
            if (usedPlots.has(plot) || componentSizes.get(plot) < CITY_STATE_MIN_MAINLAND_COMPONENT_SIZE) {
                continue;
            }

            if (typeof GameplayMap.hasPlotTag === "function" &&
                    GameplayMap.hasPlotTag(x, y, PlotTags.PLOT_TAG_ISLAND)) {
                continue;
            }

            const score = StartPositioner.getStartPositionScore(x, y);
            if (score <= 0) {
                continue;
            }

            candidates.push({ plot, x, y, side: zone.name, score });
        }
    }

    candidates.sort((a, b) => b.score - a.score);
    return candidates;
}

function chooseCityStateCandidate(candidates, usedPlots, sideCounts) {
    const preferredSide = sideCounts.west <= sideCounts.east ? "west" : "east";
    const passes = [
        { side: preferredSide, minDistance: 7 },
        { side: preferredSide === "west" ? "east" : "west", minDistance: 7 },
        { side: null, minDistance: 5 },
        { side: null, minDistance: 3 }
    ];

    for (const pass of passes) {
        for (const candidate of candidates) {
            if (usedPlots.has(candidate.plot) || (pass.side && candidate.side !== pass.side)) {
                continue;
            }
            if (!isTooCloseToUsed(candidate.x, candidate.y, usedPlots, pass.minDistance)) {
                return candidate;
            }
        }
    }

    return null;
}

function collectUsedStartPlots() {
    const usedPlots = new Set();
    const playerIds = Players.getAliveIds();
    for (const playerId of playerIds) {
        const plot = StartPositioner.getStartPosition(playerId);
        if (isValidPlot(plot)) {
            usedPlots.add(plot);
        }
    }
    return usedPlots;
}

function isRestrictedCityStateStart(plot) {
    if (!isValidPlot(plot)) {
        return true;
    }

    const { x, y } = getPlotLocation(plot);
    return !getMainlandZone(x, y) || isNearWonder(x, y) || !isSettlableCityStatePlot(x, y);
}

function moveCityStatesAwayFromWonderIslands() {
    if (typeof Players === "undefined" || typeof StartPositioner === "undefined" ||
            typeof GameplayMap === "undefined") {
        return;
    }

    const aliveMajorIds = new Set(Players.getAliveMajorIds());
    const controlledPlayers = Players.getAliveIds().filter((playerId) => {
        const player = Players.get(playerId);
        return player && !aliveMajorIds.has(playerId) && (player.isMinor || player.isIndependent);
    });

    if (controlledPlayers.length === 0) {
        console.log("TwinDiscoveryWonderSeas: no city-state or independent starts to relocate.");
        return;
    }

    const usedPlots = collectUsedStartPlots();
    const candidates = collectCityStateCandidates(usedPlots);
    const sideCounts = { west: 0, east: 0 };
    let moved = 0;

    for (const playerId of controlledPlayers) {
        const currentPlot = StartPositioner.getStartPosition(playerId);
        if (!isRestrictedCityStateStart(currentPlot)) {
            const { x } = getPlotLocation(currentPlot);
            if (x < MAP_WIDTH / 2) sideCounts.west++;
            else sideCounts.east++;
            continue;
        }

        if (isValidPlot(currentPlot)) {
            usedPlots.delete(currentPlot);
        }

        const candidate = chooseCityStateCandidate(candidates, usedPlots, sideCounts);
        if (!candidate) {
            console.log("TwinDiscoveryWonderSeas: no mainland city-state candidate for player " + playerId);
            continue;
        }

        StartPositioner.setStartPosition(candidate.plot, playerId);
        usedPlots.add(candidate.plot);
        sideCounts[candidate.side]++;
        moved++;
        console.log("TwinDiscoveryWonderSeas: moved city-state/independent player " + playerId +
            " to " + candidate.side + " mainland (" + candidate.x + "," + candidate.y + ")");
    }

    if (moved > 0) {
        assignAdvancedStartRegions();
    }

    console.log("TwinDiscoveryWonderSeas: city-state mainland relocation moved=" + moved +
        " controlledPlayers=" + controlledPlayers.length +
        " candidates=" + candidates.length);
}

function generateMap() {
    forceTwinDiscoveryOptions();
    generateYnAMP("TwinDiscoveryWonderSeas", GetMap());
    reserveIndependentSpawnExclusionZones();
    moveCityStatesAwayFromWonderIslands();
}

engine.on('RequestMapInitData', requestMapData);
engine.on('GenerateMap', generateMap);

console.log("Loaded twin-discovery-wonder-seas-map.js");
