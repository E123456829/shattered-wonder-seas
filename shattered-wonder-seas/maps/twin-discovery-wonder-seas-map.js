/*
 * Twin Discovery Wonder Seas
 * Fixed 128x80 YnAMP map with two distant continents and a central Isabella wonder island.
 */
console.log("loading script twin-discovery-wonder-seas-map.js");

import { generateYnAMP } from '/ged-ynamp/maps/ynamp-map-loading.js';
import { GetMap, MAP_HEIGHT, MAP_WIDTH } from '/codex-shattered-wonder-seas/maps/twin-discovery-wonder-seas-data.js';

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

function generateMap() {
    forceTwinDiscoveryOptions();
    generateYnAMP("TwinDiscoveryWonderSeas", GetMap());
}

engine.on('RequestMapInitData', requestMapData);
engine.on('GenerateMap', generateMap);

console.log("Loaded twin-discovery-wonder-seas-map.js");
