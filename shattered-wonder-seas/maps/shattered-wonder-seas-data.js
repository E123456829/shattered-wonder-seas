/*
 * Fixed terrain data for Shattered Wonder Seas.
 * YnAMP treats this as a Civ6-style imported map, which preserves XML-placed natural wonders.
 */
console.log("loading shattered-wonder-seas-data.js");

export const MAP_WIDTH = 128;
export const MAP_HEIGHT = 80;

const T = {
    GRASS: 0,
    GRASS_HILLS: 1,
    GRASS_MOUNTAIN: 2,
    PLAINS: 3,
    PLAINS_HILLS: 4,
    PLAINS_MOUNTAIN: 5,
    DESERT: 6,
    DESERT_HILLS: 7,
    DESERT_MOUNTAIN: 8,
    TUNDRA: 9,
    TUNDRA_HILLS: 10,
    TUNDRA_MOUNTAIN: 11,
    SNOW: 12,
    SNOW_HILLS: 13,
    SNOW_MOUNTAIN: 14,
    COAST: 15,
    OCEAN: 16
};

const FEATURE = {
    NONE: -1,
    JUNGLE: 2
};

const NO_RIVERS = [[0, -1], [0, -1], [0, -1]];
const NO_RESOURCE = [-1, 0];
const NO_CLIFFS = [0, 0, 0];

const CONTINENTS = {
    HOME: "CONTINENT_OCEANIA",
    MAIN: "CONTINENT_ASIA",
    TABLE: "CONTINENT_AFRICA",
    EVEREST: "CONTINENT_EUROPE",
    FUJI: "CONTINENT_NORTH_AMERICA",
    PAINE: "CONTINENT_SOUTH_AMERICA",
    OUTER: "CONTINENT_ANTARCTICA"
};

const HOME_BLOBS = [
    { cx: 35, cy: 43, rx: 15, ry: 11, rough: 0.42, salt: 11 },
    { cx: 26, cy: 43, rx: 7, ry: 7, rough: 0.38, salt: 12 },
    { cx: 44, cy: 47, rx: 8, ry: 7, rough: 0.36, salt: 13 },
    { cx: 36, cy: 35, rx: 7, ry: 5, rough: 0.38, salt: 14 }
];

const MAINLAND_BLOBS = [
    { cx: 79, cy: 39, rx: 21, ry: 17, rough: 0.48, salt: 21 },
    { cx: 96, cy: 35, rx: 20, ry: 16, rough: 0.45, salt: 22 },
    { cx: 91, cy: 55, rx: 24, ry: 13, rough: 0.50, salt: 23 },
    { cx: 70, cy: 56, rx: 13, ry: 10, rough: 0.44, salt: 24 },
    { cx: 112, cy: 46, rx: 11, ry: 11, rough: 0.48, salt: 25 },
    { cx: 76, cy: 22, rx: 12, ry: 8, rough: 0.44, salt: 26 },
    { cx: 104, cy: 22, rx: 13, ry: 8, rough: 0.46, salt: 27 },
    { cx: 61, cy: 44, rx: 7, ry: 10, rough: 0.58, salt: 28 }
];

const OUTER_ISLANDS = [
    { name: "table", cx: 16, cy: 64, rx: 6, ry: 4, rough: 0.48, salt: 31, continent: CONTINENTS.TABLE, biome: "grass" },
    { name: "everest", cx: 108, cy: 64, rx: 7, ry: 5, rough: 0.50, salt: 32, continent: CONTINENTS.EVEREST, biome: "mountain" },
    { name: "fuji", cx: 107, cy: 19, rx: 7, ry: 5, rough: 0.48, salt: 33, continent: CONTINENTS.FUJI, biome: "grass" },
    { name: "paine", cx: 18, cy: 16, rx: 7, ry: 5, rough: 0.50, salt: 34, continent: CONTINENTS.PAINE, biome: "tundra" },
    { name: "north-reef-a", cx: 60, cy: 12, rx: 4, ry: 3, rough: 0.52, salt: 35, continent: CONTINENTS.OUTER, biome: "tundra" },
    { name: "north-reef-b", cx: 71, cy: 10, rx: 3, ry: 2, rough: 0.50, salt: 36, continent: CONTINENTS.OUTER, biome: "grass" },
    { name: "north-reef-c", cx: 86, cy: 12, rx: 4, ry: 3, rough: 0.52, salt: 37, continent: CONTINENTS.OUTER, biome: "plains" },
    { name: "north-reef-d", cx: 119, cy: 16, rx: 4, ry: 3, rough: 0.50, salt: 38, continent: CONTINENTS.OUTER, biome: "grass" },
    { name: "south-reef-a", cx: 54, cy: 70, rx: 4, ry: 3, rough: 0.48, salt: 39, continent: CONTINENTS.OUTER, biome: "grass" },
    { name: "south-reef-b", cx: 68, cy: 72, rx: 3, ry: 2, rough: 0.52, salt: 40, continent: CONTINENTS.OUTER, biome: "plains" },
    { name: "south-reef-c", cx: 119, cy: 67, rx: 4, ry: 3, rough: 0.52, salt: 41, continent: CONTINENTS.OUTER, biome: "tropical" },
    { name: "west-dot-a", cx: 7, cy: 40, rx: 3, ry: 3, rough: 0.50, salt: 42, continent: CONTINENTS.OUTER, biome: "plains" },
    { name: "west-dot-b", cx: 10, cy: 53, rx: 3, ry: 2, rough: 0.52, salt: 43, continent: CONTINENTS.OUTER, biome: "grass" },
    { name: "east-dot-a", cx: 121, cy: 39, rx: 4, ry: 3, rough: 0.54, salt: 44, continent: CONTINENTS.OUTER, biome: "tundra" },
    { name: "east-dot-b", cx: 122, cy: 53, rx: 3, ry: 2, rough: 0.50, salt: 45, continent: CONTINENTS.OUTER, biome: "desert" },
    { name: "mid-sea-a", cx: 55, cy: 35, rx: 3, ry: 2, rough: 0.55, salt: 46, continent: CONTINENTS.OUTER, biome: "grass" },
    { name: "mid-sea-b", cx: 58, cy: 47, rx: 3, ry: 2, rough: 0.55, salt: 47, continent: CONTINENTS.OUTER, biome: "plains" },
    { name: "mid-sea-c", cx: 52, cy: 55, rx: 2, ry: 2, rough: 0.55, salt: 48, continent: CONTINENTS.OUTER, biome: "tropical" },
    { name: "far-northwest", cx: 30, cy: 9, rx: 4, ry: 3, rough: 0.52, salt: 49, continent: CONTINENTS.OUTER, biome: "tundra" },
    { name: "far-southwest", cx: 31, cy: 71, rx: 4, ry: 3, rough: 0.52, salt: 50, continent: CONTINENTS.OUTER, biome: "grass" }
];

const HOME_START_TILES = [
    { name: "Spain-Isabella", x: 31, y: 42, continent: CONTINENTS.HOME },
    { name: "Nepal", x: 43, y: 45, continent: CONTINENTS.HOME }
];

const MAINLAND_START_TILES = [
    [66, 31], [73, 29], [80, 28], [88, 27], [97, 29], [105, 32],
    [112, 39], [69, 40], [77, 35], [89, 36], [101, 39], [110, 48],
    [68, 51], [77, 52], [86, 54], [96, 52], [106, 57], [74, 60],
    [84, 63], [95, 64], [67, 62], [66, 44], [72, 46], [92, 44],
    [101, 47], [114, 52], [91, 22], [78, 21], [94, 21], [116, 45],
    [65, 57], [70, 24], [82, 24], [93, 60], [101, 60], [99, 34],
    [74, 67], [63, 36], [114, 29], [88, 66], [116, 50], [66, 48]
].map(([x, y], index) => ({ name: `MainlandStart${index + 1}`, x, y, continent: CONTINENTS.MAIN }));

const WONDER_TERRAIN = [
    { name: "Machapuchare", x: 32, y: 41, terrain: T.GRASS_MOUNTAIN, radius: 2, continent: CONTINENTS.HOME },
    { name: "Vihren", x: 40, y: 38, terrain: T.PLAINS_MOUNTAIN, radius: 2, continent: CONTINENTS.HOME },
    { name: "Kilimanjaro", x: 35, y: 49, terrain: T.PLAINS_MOUNTAIN, radius: 1, continent: CONTINENTS.HOME },
    { name: "Redwood", x: 45, y: 44, terrain: T.GRASS, radius: 2, continent: CONTINENTS.HOME },
    { name: "Vinicunca", x: 30, y: 35, terrain: T.DESERT_MOUNTAIN, radius: 2, continent: CONTINENTS.HOME },
    { name: "Zhangjiajie", x: 42, y: 51, terrain: T.GRASS_MOUNTAIN, radius: 1, continent: CONTINENTS.HOME },
    { name: "TableMountain", x: 16, y: 64, terrain: T.GRASS_MOUNTAIN, radius: 2, continent: CONTINENTS.TABLE },
    { name: "Everest", x: 108, y: 64, terrain: T.SNOW_MOUNTAIN, radius: 2, continent: CONTINENTS.EVEREST },
    { name: "Fuji", x: 107, y: 19, terrain: T.GRASS_MOUNTAIN, radius: 2, continent: CONTINENTS.FUJI },
    { name: "Paine", x: 18, y: 16, terrain: T.TUNDRA_MOUNTAIN, radius: 2, continent: CONTINENTS.PAINE },
    { name: "ValleyOfFlowers", x: 69, y: 29, terrain: T.GRASS_HILLS, radius: 2, continent: CONTINENTS.MAIN },
    { name: "GrandCanyon", x: 83, y: 52, terrain: T.DESERT_HILLS, radius: 3, continent: CONTINENTS.MAIN },
    { name: "Gullfoss", x: 71, y: 22, terrain: T.TUNDRA_HILLS, radius: 2, continent: CONTINENTS.MAIN },
    { name: "Iguazu", x: 95, y: 57, terrain: T.GRASS_HILLS, radius: 2, continent: CONTINENTS.MAIN, feature: FEATURE.JUNGLE },
    { name: "Uluru", x: 99, y: 47, terrain: T.DESERT_HILLS, radius: 2, continent: CONTINENTS.MAIN }
];

const COASTAL_WONDERS = [
    { name: "Mapu a Vaea Blowholes", x: 25, y: 43, nearbyLand: [[26, 43], [26, 44], [27, 44]], continent: CONTINENTS.HOME },
    { name: "Great Blue Hole", x: 54, y: 42, nearbyLand: [[55, 42], [55, 43], [56, 42]], continent: CONTINENTS.MAIN },
    { name: "Barrier Reef", x: 92, y: 27, nearbyLand: [[91, 28], [92, 28], [93, 28]], continent: CONTINENTS.MAIN },
    { name: "Thera", x: 64, y: 34, nearbyLand: [[64, 35], [65, 35], [66, 35]], continent: CONTINENTS.MAIN }
];

const OCEAN_WONDERS = [
    { name: "Bermuda Triangle", x: 118, y: 39 }
];

function makeRow(terrain, continent = -1, feature = FEATURE.NONE) {
    return [
        terrain,
        feature,
        continent,
        NO_RIVERS.map(edge => [...edge]),
        [...NO_RESOURCE],
        [...NO_CLIFFS]
    ];
}

function hashNoise(x, y, salt = 0) {
    const v = Math.sin((x * 127.1) + (y * 311.7) + (salt * 74.7)) * 43758.5453123;
    return v - Math.floor(v);
}

function blockNoise(x, y, scaleX, scaleY, salt) {
    return hashNoise(Math.floor(x / scaleX), Math.floor(y / scaleY), salt);
}

function inBlob(x, y, blob) {
    const nx = (x - blob.cx) / blob.rx;
    const ny = (y - blob.cy) / blob.ry;
    const ripple = (hashNoise(x, y, blob.salt) - 0.5) * blob.rough;
    const nick = (hashNoise(x + 13, y - 17, blob.salt + 97) > 0.84) ? 0.14 : 0;
    const spur = (hashNoise(Math.floor(x / 3), Math.floor(y / 3), blob.salt + 140) > 0.86) ? -0.11 : 0;
    return (nx * nx) + (ny * ny) + ripple + nick + spur <= 1;
}

function isLand(row) {
    return row[0] !== T.OCEAN && row[0] !== T.COAST;
}

function terrainFromBiome(x, y, biome, salt = 0) {
    const n = hashNoise(x, y, salt);
    const ridge = hashNoise(x + 5, y - 3, salt + 100);

    if (biome === "tundra") {
        if (y < 12 || n > 0.95) return T.SNOW_HILLS;
        if (ridge > 0.86) return T.TUNDRA_MOUNTAIN;
        if (n > 0.56) return T.TUNDRA_HILLS;
        return T.TUNDRA;
    }

    if (biome === "desert") {
        if (ridge > 0.90) return T.DESERT_MOUNTAIN;
        if (n > 0.50) return T.DESERT_HILLS;
        return T.DESERT;
    }

    if (biome === "tropical") {
        if (ridge > 0.91) return T.GRASS_MOUNTAIN;
        if (n > 0.48) return T.GRASS_HILLS;
        return T.GRASS;
    }

    if (biome === "mountain") {
        if (ridge > 0.58 || n > 0.76) return T.GRASS_MOUNTAIN;
        if (n > 0.40) return T.GRASS_HILLS;
        return T.GRASS;
    }

    if (biome === "plains") {
        if (ridge > 0.90) return T.PLAINS_MOUNTAIN;
        if (n > 0.52) return T.PLAINS_HILLS;
        return T.PLAINS;
    }

    if (ridge > 0.91) return T.GRASS_MOUNTAIN;
    if (n > 0.55) return T.GRASS_HILLS;
    return T.GRASS;
}

function rotateBiome(base, x, y, salt) {
    const n = blockNoise(x, y, 4, 4, salt);

    if (base === "desert") {
        if (n < 0.18) return "plains";
        if (n < 0.30) return "grass";
        if (n > 0.86) return "tropical";
        return "desert";
    }

    if (base === "tropical") {
        if (n < 0.22) return "plains";
        if (n < 0.44) return "grass";
        if (n > 0.83) return "desert";
        return "tropical";
    }

    if (base === "tundra") {
        if (n < 0.22) return "grass";
        if (n < 0.34) return "plains";
        return "tundra";
    }

    if (base === "plains") {
        if (n < 0.20) return "grass";
        if (n > 0.78) return "desert";
        if (y > 49 && n > 0.62) return "tropical";
        return "plains";
    }

    if (n < 0.18) return "plains";
    if (n > 0.82 && y > 43) return "tropical";
    if (n > 0.70 && y < 27) return "tundra";
    if (n > 0.74 && x > 88) return "desert";
    return "grass";
}

function homeBiome(x, y) {
    let base = "grass";
    if ((x >= 28 && x <= 42 && y >= 33 && y <= 38) || (x >= 41 && y >= 45)) base = "desert";
    if ((x <= 29 && y >= 44) || (x >= 42 && y <= 43)) base = "tropical";
    if (y < 38 && x < 33) base = "plains";
    return rotateBiome(base, x, y, 111);
}

function mainlandBiome(x, y) {
    let base = "grass";
    if (y < 25) base = "tundra";
    else if ((x > 83 && y > 42 && y < 56) || (x > 101 && y > 36 && y < 52)) base = "desert";
    else if (y > 52 || (x > 88 && y > 48)) base = "tropical";
    else if (x < 72 && y > 47) base = "plains";
    return rotateBiome(base, x, y, 222);
}

function setTile(map, x, y, terrain, continent = -1, feature = FEATURE.NONE) {
    if (x < 0 || y < 0 || x >= MAP_WIDTH || y >= MAP_HEIGHT) return;
    map[x][y] = makeRow(terrain, continent, feature);
}

function setDisc(map, centerX, centerY, radius, terrain, continent = -1, feature = FEATURE.NONE) {
    for (let y = centerY - radius; y <= centerY + radius; y++) {
        for (let x = centerX - radius; x <= centerX + radius; x++) {
            if (Math.hypot(x - centerX, y - centerY) <= radius) {
                setTile(map, x, y, terrain, continent, feature);
            }
        }
    }
}

function setEllipse(map, centerX, centerY, rx, ry, terrain, continent = -1, feature = FEATURE.NONE) {
    for (let y = centerY - ry - 1; y <= centerY + ry + 1; y++) {
        for (let x = centerX - rx - 1; x <= centerX + rx + 1; x++) {
            const nx = (x - centerX) / rx;
            const ny = (y - centerY) / ry;
            if ((nx * nx) + (ny * ny) <= 1) {
                setTile(map, x, y, terrain, continent, feature);
            }
        }
    }
}

function setLandPatch(map, centerX, centerY, radius, continent, biome, salt) {
    for (let y = centerY - radius; y <= centerY + radius; y++) {
        for (let x = centerX - radius; x <= centerX + radius; x++) {
            if (Math.hypot(x - centerX, y - centerY) > radius + (hashNoise(x, y, salt) * 0.35)) continue;
            const pickedBiome = rotateBiome(biome, x, y, salt);
            const feature = pickedBiome === "tropical" && hashNoise(x, y, salt + 501) > 0.58 ? FEATURE.JUNGLE : FEATURE.NONE;
            setTile(map, x, y, terrainFromBiome(x, y, pickedBiome, salt), continent, feature);
        }
    }
}

function drawLandChain(map, points, continent, biome, salt) {
    for (let i = 0; i < points.length; i++) {
        const [x, y, radius = 2] = points[i];
        setLandPatch(map, x, y, radius, continent, biome, salt + i);
    }
}

function stampBlobs(map, blobs, continent, biomePicker) {
    for (const blob of blobs) {
        for (let y = 0; y < MAP_HEIGHT; y++) {
            for (let x = 0; x < MAP_WIDTH; x++) {
                if (!inBlob(x, y, blob)) continue;
                const biome = biomePicker(x, y, blob);
                const feature = biome === "tropical" && hashNoise(x, y, blob.salt + 500) > 0.58 ? FEATURE.JUNGLE : FEATURE.NONE;
                setTile(map, x, y, terrainFromBiome(x, y, biome, blob.salt), continent, feature);
            }
        }
    }
}

function stampIsland(map, island) {
    for (let y = 0; y < MAP_HEIGHT; y++) {
        for (let x = 0; x < MAP_WIDTH; x++) {
            if (!inBlob(x, y, island)) continue;
            const biome = rotateBiome(island.biome, x, y, island.salt + 300);
            const feature = biome === "tropical" && hashNoise(x, y, island.salt + 501) > 0.55 ? FEATURE.JUNGLE : FEATURE.NONE;
            setTile(map, x, y, terrainFromBiome(x, y, biome, island.salt), island.continent, feature);
        }
    }
}

function hasAdjacentLand(map, x, y) {
    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const ax = x + dx;
            const ay = y + dy;
            if (ax < 0 || ay < 0 || ax >= MAP_WIDTH || ay >= MAP_HEIGHT) continue;
            if (isLand(map[ax][ay])) return true;
        }
    }
    return false;
}

function addCoasts(map) {
    for (let y = 0; y < MAP_HEIGHT; y++) {
        for (let x = 0; x < MAP_WIDTH; x++) {
            if (map[x][y][0] === T.OCEAN && hasAdjacentLand(map, x, y)) {
                setTile(map, x, y, T.COAST);
            }
        }
    }
}

function keepHomeIslandSeparate(map) {
    for (let y = 30; y <= 57; y++) {
        for (let x = 51; x <= 53; x++) {
            setTile(map, x, y, T.OCEAN);
        }
    }
}

function addShallowSeaRoute(map) {
    for (let x = 49; x <= 56; x++) {
        const y = 42 + Math.round(Math.sin((x - 50) / 2) * 1.4);
        setDisc(map, x, y, 1, T.COAST);
    }
    setDisc(map, 55, 43, 1, T.COAST);
    setTile(map, 55, 42, T.PLAINS, CONTINENTS.MAIN);
    setTile(map, 55, 43, T.PLAINS_HILLS, CONTINENTS.MAIN);
    setTile(map, 56, 42, T.PLAINS_HILLS, CONTINENTS.MAIN);
    setTile(map, 57, 42, T.PLAINS, CONTINENTS.MAIN);
    setTile(map, 58, 42, T.PLAINS_HILLS, CONTINENTS.MAIN);
    setTile(map, 59, 43, T.PLAINS, CONTINENTS.MAIN);
    setTile(map, 60, 43, T.PLAINS_HILLS, CONTINENTS.MAIN);
    setTile(map, 61, 44, T.PLAINS, CONTINENTS.MAIN);
}

function carveWater(map) {
    setEllipse(map, 80, 42, 8, 5, T.COAST);
    setEllipse(map, 88, 45, 5, 3, T.COAST);
    setEllipse(map, 30, 47, 3, 2, T.COAST);
    setEllipse(map, 40, 42, 2, 2, T.COAST);
    setEllipse(map, 61, 29, 4, 3, T.COAST);
    setEllipse(map, 91, 50, 4, 3, T.COAST);
    setEllipse(map, 83, 58, 3, 2, T.COAST);
    setEllipse(map, 104, 30, 3, 2, T.COAST);
    setEllipse(map, 66, 40, 4, 5, T.COAST);
    setEllipse(map, 72, 18, 4, 3, T.COAST);
    setEllipse(map, 99, 27, 5, 4, T.COAST);
    setEllipse(map, 108, 55, 5, 4, T.COAST);
    setEllipse(map, 88, 65, 5, 3, T.COAST);
    setEllipse(map, 61, 51, 3, 5, T.COAST);
    setEllipse(map, 118, 47, 4, 5, T.COAST);
}

function addPeninsulas(map) {
    drawLandChain(map, [[56, 42, 2], [59, 41, 2], [62, 43, 2], [64, 46, 2]], CONTINENTS.MAIN, "plains", 701);
    drawLandChain(map, [[73, 16, 2], [76, 14, 2], [80, 15, 2]], CONTINENTS.MAIN, "tundra", 711);
    drawLandChain(map, [[113, 34, 2], [117, 35, 2], [120, 38, 2]], CONTINENTS.MAIN, "desert", 721);
    drawLandChain(map, [[101, 62, 2], [105, 65, 2], [110, 66, 2]], CONTINENTS.MAIN, "tropical", 731);
    drawLandChain(map, [[67, 61, 2], [63, 64, 2], [59, 66, 2]], CONTINENTS.MAIN, "plains", 741);
}

function carveMoat(map, centerX, centerY, outerRx, outerRy, innerRx, innerRy) {
    for (let y = centerY - outerRy - 1; y <= centerY + outerRy + 1; y++) {
        for (let x = centerX - outerRx - 1; x <= centerX + outerRx + 1; x++) {
            const outer = ((x - centerX) / outerRx) ** 2 + ((y - centerY) / outerRy) ** 2;
            const inner = ((x - centerX) / innerRx) ** 2 + ((y - centerY) / innerRy) ** 2;
            if (outer <= 1 && inner > 1) {
                setTile(map, x, y, T.OCEAN);
            }
        }
    }
}

function isolateDistantWonderIslands(map) {
    carveMoat(map, 107, 19, 13, 10, 7, 5);
    carveMoat(map, 108, 64, 14, 10, 7, 5);
}

function isMountainTerrain(terrain) {
    return terrain === T.GRASS_MOUNTAIN || terrain === T.PLAINS_MOUNTAIN || terrain === T.DESERT_MOUNTAIN || terrain === T.TUNDRA_MOUNTAIN || terrain === T.SNOW_MOUNTAIN;
}

function softenMountainRing(map, centerX, centerY, radius, replacementTerrain, continent) {
    for (let y = centerY - radius; y <= centerY + radius; y++) {
        for (let x = centerX - radius; x <= centerX + radius; x++) {
            const distance = Math.hypot(x - centerX, y - centerY);
            if (distance === 0 || distance > radius) continue;
            if (x < 0 || y < 0 || x >= MAP_WIDTH || y >= MAP_HEIGHT) continue;
            if (isMountainTerrain(map[x][y][0])) {
                setTile(map, x, y, replacementTerrain, continent, map[x][y][1]);
            }
        }
    }
}

function addVinicuncaDesert(map) {
    for (let y = 31; y <= 39; y++) {
        for (let x = 26; x <= 34; x++) {
            const distance = Math.hypot(x - 30, y - 35);
            if (distance > 4 || (x === 30 && y === 35)) continue;
            const terrain = distance <= 2.2 || hashNoise(x, y, 820) > 0.62 ? T.DESERT_HILLS : T.DESERT;
            setTile(map, x, y, terrain, CONTINENTS.HOME);
        }
    }
    setTile(map, 30, 35, T.DESERT_MOUNTAIN, CONTINENTS.HOME);
}

function softenHomeWonderMountains(map) {
    softenMountainRing(map, 35, 49, 4, T.PLAINS_HILLS, CONTINENTS.HOME);
    softenMountainRing(map, 42, 51, 4, T.GRASS_HILLS, CONTINENTS.HOME);
    setTile(map, 35, 49, T.PLAINS_MOUNTAIN, CONTINENTS.HOME);
    setTile(map, 42, 51, T.GRASS_MOUNTAIN, CONTINENTS.HOME);
}

function setRiverEdge(map, x, y, edge, flow = 2) {
    if (x < 0 || y < 0 || x >= MAP_WIDTH || y >= MAP_HEIGHT || !isLand(map[x][y])) return;
    map[x][y][3][edge] = [1, flow];
}

function makeRiverLowland(map, x, y) {
    if (x < 0 || y < 0 || x >= MAP_WIDTH || y >= MAP_HEIGHT || !isLand(map[x][y])) return;
    const terrain = map[x][y][0];
    if (terrain === T.GRASS_MOUNTAIN) setTile(map, x, y, T.GRASS_HILLS, map[x][y][2], map[x][y][1]);
    if (terrain === T.PLAINS_MOUNTAIN) setTile(map, x, y, T.PLAINS_HILLS, map[x][y][2], map[x][y][1]);
    if (terrain === T.DESERT_MOUNTAIN) setTile(map, x, y, T.DESERT_HILLS, map[x][y][2], map[x][y][1]);
    if (terrain === T.TUNDRA_MOUNTAIN || terrain === T.SNOW_MOUNTAIN) setTile(map, x, y, T.TUNDRA_HILLS, map[x][y][2], map[x][y][1]);
}

function addRiverPath(map, points, flow = 2) {
    for (let i = 0; i < points.length; i++) {
        const [x, y] = points[i];
        makeRiverLowland(map, x, y);
        setRiverEdge(map, x, y, i % 3, flow);
        setRiverEdge(map, x, y, (i + 1) % 3, flow);
        if (i > 0) {
            const [px, py] = points[i - 1];
            setRiverEdge(map, px, py, (i + 2) % 3, flow);
        }
    }
}

function addRivers(map) {
    addRiverPath(map, [[31, 35], [32, 37], [33, 39], [34, 42], [33, 45], [31, 47]], 2);
    addRiverPath(map, [[43, 37], [42, 40], [42, 43], [41, 46], [40, 49]], 2);
    addRiverPath(map, [[70, 22], [68, 26], [66, 31], [64, 36], [62, 42], [59, 45]], 3);
    addRiverPath(map, [[92, 24], [89, 29], [86, 34], [83, 39], [80, 43]], 3);
    addRiverPath(map, [[104, 39], [101, 44], [99, 49], [97, 54], [95, 57]], 3);
    addRiverPath(map, [[73, 55], [76, 58], [80, 60], [84, 63], [88, 66]], 2);
    addRiverPath(map, [[26, 43], [28, 42], [31, 42], [34, 43], [37, 45], [39, 48]], 3);
    addRiverPath(map, [[45, 34], [44, 37], [43, 40], [43, 43], [43, 45], [44, 48]], 2);
    addRiverPath(map, [[62, 31], [65, 34], [68, 37], [71, 40], [75, 42], [80, 42]], 3);
    addRiverPath(map, [[78, 19], [82, 22], [86, 26], [90, 31], [94, 35], [99, 38]], 3);
    addRiverPath(map, [[112, 36], [109, 39], [106, 42], [103, 45], [100, 48], [97, 52]], 3);
    addRiverPath(map, [[64, 58], [68, 57], [72, 57], [77, 58], [82, 60], [86, 62]], 2);
    addRiverPath(map, [[115, 50], [112, 53], [108, 56], [104, 59], [101, 62]], 2);
}

function prepareWonders(map) {
    for (const wonder of WONDER_TERRAIN) {
        setDisc(map, wonder.x, wonder.y, wonder.radius, wonder.terrain, wonder.continent, wonder.feature ?? FEATURE.NONE);
    }

    for (const wonder of COASTAL_WONDERS) {
        setDisc(map, wonder.x, wonder.y, 1, T.COAST);
        for (const [x, y] of wonder.nearbyLand) {
            setTile(map, x, y, T.PLAINS_HILLS, wonder.continent);
        }
    }

    for (const wonder of OCEAN_WONDERS) {
        setDisc(map, wonder.x, wonder.y, 2, T.OCEAN);
    }
}

function prepareStarts(map) {
    for (const start of [...HOME_START_TILES, ...MAINLAND_START_TILES]) {
        setDisc(map, start.x, start.y, 1, T.PLAINS, start.continent);
        setTile(map, start.x + 1, start.y, T.PLAINS_HILLS, start.continent);
    }
}

function buildMap() {
    const map = Array.from({ length: MAP_WIDTH }, () =>
        Array.from({ length: MAP_HEIGHT }, () => makeRow(T.OCEAN))
    );

    stampBlobs(map, HOME_BLOBS, CONTINENTS.HOME, homeBiome);
    stampBlobs(map, MAINLAND_BLOBS, CONTINENTS.MAIN, mainlandBiome);
    for (const island of OUTER_ISLANDS) {
        stampIsland(map, island);
    }

    keepHomeIslandSeparate(map);
    carveWater(map);
    addPeninsulas(map);
    isolateDistantWonderIslands(map);
    prepareWonders(map);
    addVinicuncaDesert(map);
    softenHomeWonderMountains(map);
    prepareStarts(map);
    addCoasts(map);
    keepHomeIslandSeparate(map);
    addShallowSeaRoute(map);
    addCoasts(map);
    addRivers(map);

    return map;
}

export function GetMap() {
    return buildMap();
}

console.log("loaded shattered-wonder-seas-data.js");
