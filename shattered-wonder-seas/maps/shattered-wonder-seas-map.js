/*
 * Shattered Wonder Seas
 * Fixed 128x80 YnAMP map with fractured oceans, isolated starts, and curated wonder islands.
 */
console.log("loading script shattered-wonder-seas-map.js");

import { generateYnAMP } from '/ged-ynamp/maps/ynamp-map-loading.js';
import { GetMap, MAP_HEIGHT, MAP_WIDTH } from '/codex-shattered-wonder-seas/maps/shattered-wonder-seas-data.js';

function requestMapData(initParams) {
    initParams.width = MAP_WIDTH;
    initParams.height = MAP_HEIGHT;
    initParams.wrapX = false;
    initParams.wrapY = false;
    engine.call("SetMapInitData", initParams);
}

function generateMap() {
    generateYnAMP("ShatteredWonderSeas", GetMap());
}

engine.on('RequestMapInitData', requestMapData);
engine.on('GenerateMap', generateMap);

console.log("Loaded shattered-wonder-seas-map.js");
