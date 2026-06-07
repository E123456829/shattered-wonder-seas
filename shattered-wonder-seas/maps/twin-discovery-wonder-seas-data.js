/*
 * Fixed terrain data for Twin Discovery Wonder Seas.
 * Civ6-style rows are used so YnAMP preserves curated natural-wonder positions.
 */
console.log("loading twin-discovery-wonder-seas-data.js");

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
    JUNGLE: 2,
    FOREST: 3
};

const NO_RIVERS = [[0, -1], [0, -1], [0, -1]];
const NO_RESOURCE = [-1, 0];
const NO_CLIFFS = [0, 0, 0];

const CONTINENTS = {
    WEST: "CONTINENT_EUROPE",
    EAST: "CONTINENT_ASIA",
    HOME: "CONTINENT_OCEANIA",
    ISLES: "CONTINENT_AFRICA"
};

const WEST_BLOBS = [
    { cx: 24, cy: 29, rx: 24, ry: 19, rough: 0.68, salt: 11 },
    { cx: 35, cy: 52, rx: 22, ry: 19, rough: 0.66, salt: 12 },
    { cx: 13, cy: 55, rx: 14, ry: 13, rough: 0.68, salt: 13 },
    { cx: 45, cy: 28, rx: 12, ry: 12, rough: 0.62, salt: 14 },
    { cx: 25, cy: 43, rx: 10, ry: 8, rough: 0.70, salt: 15 },
    { cx: 49, cy: 58, rx: 8, ry: 9, rough: 0.64, salt: 16 }
];

const EAST_BLOBS = [
    { cx: 101, cy: 29, rx: 24, ry: 19, rough: 0.68, salt: 21 },
    { cx: 108, cy: 55, rx: 23, ry: 18, rough: 0.66, salt: 22 },
    { cx: 94, cy: 51, rx: 14, ry: 13, rough: 0.68, salt: 23 },
    { cx: 121, cy: 39, rx: 11, ry: 12, rough: 0.64, salt: 24 },
    { cx: 108, cy: 39, rx: 10, ry: 8, rough: 0.70, salt: 25 },
    { cx: 94, cy: 64, rx: 8, ry: 8, rough: 0.62, salt: 26 }
];

const HOME_BLOBS = [
    { cx: 64, cy: 41, rx: 20, ry: 15, rough: 0.70, salt: 31 },
    { cx: 53, cy: 39, rx: 9, ry: 9, rough: 0.66, salt: 32 },
    { cx: 78, cy: 41, rx: 8, ry: 8, rough: 0.66, salt: 33 },
    { cx: 67, cy: 51, rx: 9, ry: 7, rough: 0.64, salt: 34 },
    { cx: 61, cy: 30, rx: 8, ry: 6, rough: 0.62, salt: 35 },
    { cx: 73, cy: 31, rx: 8, ry: 6, rough: 0.62, salt: 36 }
];

const SMALL_ISLANDS = [
    { name: "torres", cx: 54, cy: 22, rx: 6, ry: 4, rough: 0.68, salt: 41, biome: "tundra" },
    { name: "flower-cay", cx: 66, cy: 23, rx: 6, ry: 4, rough: 0.68, salt: 42, biome: "plains" },
    { name: "fuji", cx: 78, cy: 22, rx: 6, ry: 4, rough: 0.68, salt: 43, biome: "grass" },
    { name: "hoerikwaggo", cx: 52, cy: 64, rx: 6, ry: 5, rough: 0.70, salt: 44, biome: "grass" },
    { name: "iguazu-cay", cx: 58, cy: 58, rx: 5, ry: 4, rough: 0.68, salt: 45, biome: "tropical" },
    { name: "blue-hole-cay", cx: 58, cy: 69, rx: 4, ry: 3, rough: 0.66, salt: 50, biome: "grass" },
    { name: "thera-cay", cx: 66, cy: 62, rx: 4, ry: 3, rough: 0.68, salt: 51, biome: "plains" },
    { name: "uluru-cay", cx: 65, cy: 70, rx: 5, ry: 4, rough: 0.68, salt: 58, biome: "desert" },
    { name: "grand-canyon-cay", cx: 74, cy: 69, rx: 5, ry: 4, rough: 0.68, salt: 59, biome: "desert" },
    { name: "everest", cx: 80, cy: 66, rx: 5, ry: 5, rough: 0.68, salt: 60, biome: "tropical" },
    { name: "reef-cay", cx: 79, cy: 58, rx: 4, ry: 3, rough: 0.64, salt: 61, biome: "grass" },
    { name: "inner-west", cx: 27, cy: 44, rx: 3, ry: 2, rough: 0.54, salt: 52, biome: "grass", continent: CONTINENTS.WEST },
    { name: "inner-east", cx: 104, cy: 44, rx: 3, ry: 2, rough: 0.54, salt: 53, biome: "tropical", continent: CONTINENTS.EAST },
    { name: "far-north-a", cx: 16, cy: 10, rx: 3, ry: 2, rough: 0.56, salt: 54, biome: "tundra" },
    { name: "far-north-b", cx: 112, cy: 10, rx: 3, ry: 2, rough: 0.56, salt: 55, biome: "tundra" },
    { name: "far-south-a", cx: 17, cy: 71, rx: 3, ry: 2, rough: 0.56, salt: 56, biome: "grass" },
    { name: "far-south-b", cx: 113, cy: 71, rx: 3, ry: 2, rough: 0.56, salt: 57, biome: "grass" }
];

const STARTS = [
    { name: "Spain-Isabella", x: 61, y: 41, continent: CONTINENTS.HOME },
    { name: "Aksum", x: 30, y: 27, continent: CONTINENTS.WEST },
    { name: "Egypt", x: 36, y: 29, continent: CONTINENTS.WEST },
    { name: "Greece", x: 22, y: 53, continent: CONTINENTS.WEST },
    { name: "Rome", x: 42, y: 55, continent: CONTINENTS.WEST },
    { name: "Maya", x: 33, y: 64, continent: CONTINENTS.WEST },
    { name: "Han", x: 103, y: 28, continent: CONTINENTS.EAST },
    { name: "Khmer", x: 111, y: 31, continent: CONTINENTS.EAST },
    { name: "Maurya", x: 95, y: 55, continent: CONTINENTS.EAST },
    { name: "Persia", x: 114, y: 57, continent: CONTINENTS.EAST }
];

const EXTRA_STARTS = [
    { name: "Abbasid", x: 12, y: 18, continent: CONTINENTS.WEST },
    { name: "America", x: 100, y: 20, continent: CONTINENTS.EAST },
    { name: "Assyria", x: 27, y: 23, continent: CONTINENTS.WEST },
    { name: "Buganda", x: 117, y: 20, continent: CONTINENTS.EAST },
    { name: "Bulgaria", x: 34, y: 23, continent: CONTINENTS.WEST },
    { name: "Carthage", x: 106, y: 24, continent: CONTINENTS.EAST },
    { name: "Chola", x: 43, y: 23, continent: CONTINENTS.WEST },
    { name: "Dai Viet", x: 113, y: 26, continent: CONTINENTS.EAST },
    { name: "French Empire", x: 16, y: 24, continent: CONTINENTS.WEST },
    { name: "Great Britain", x: 100, y: 29, continent: CONTINENTS.EAST },
    { name: "Hawaii", x: 21, y: 29, continent: CONTINENTS.WEST },
    { name: "Iceland", x: 107, y: 31, continent: CONTINENTS.EAST },
    { name: "Majapahit", x: 47, y: 29, continent: CONTINENTS.WEST },
    { name: "Meiji", x: 117, y: 32, continent: CONTINENTS.EAST },
    { name: "Mexico", x: 29, y: 30, continent: CONTINENTS.WEST },
    { name: "Ming", x: 94, y: 33, continent: CONTINENTS.EAST },
    { name: "Mississippian", x: 27, y: 39, continent: CONTINENTS.WEST },
    { name: "Mongolia", x: 36, y: 30, continent: CONTINENTS.WEST },
    { name: "Mughal", x: 101, y: 36, continent: CONTINENTS.EAST },
    { name: "Norman", x: 17, y: 35, continent: CONTINENTS.WEST },
    { name: "Ottomans", x: 111, y: 37, continent: CONTINENTS.EAST },
    { name: "Pirate Republic", x: 24, y: 36, continent: CONTINENTS.WEST },
    { name: "Prussia", x: 102, y: 43, continent: CONTINENTS.EAST },
    { name: "Qajar", x: 31, y: 37, continent: CONTINENTS.WEST },
    { name: "Qing", x: 109, y: 44, continent: CONTINENTS.EAST },
    { name: "Russia", x: 12, y: 41, continent: CONTINENTS.WEST },
    { name: "Shawnee", x: 105, y: 50, continent: CONTINENTS.EAST },
    { name: "Siam", x: 19, y: 42, continent: CONTINENTS.WEST },
    { name: "Silla", x: 117, y: 50, continent: CONTINENTS.EAST },
    { name: "Songhai", x: 46, y: 42, continent: CONTINENTS.WEST },
    { name: "Tonga", x: 111, y: 54, continent: CONTINENTS.EAST }
];

const STABLE_STARTS = [...STARTS, ...EXTRA_STARTS];

function rectPoints(x1, y1, x2, y2) {
    const points = [];
    for (let y = y1; y <= y2; y++) {
        for (let x = x1; x <= x2; x++) {
            points.push([x, y]);
        }
    }
    return points;
}

const WONDER_TERRAIN = [
    { name: "Machapuchare", x: 62, y: 39, terrain: T.GRASS_MOUNTAIN, radius: 2, continent: CONTINENTS.HOME, feature: FEATURE.JUNGLE },
    { name: "Vihren", x: 79, y: 42, terrain: T.PLAINS_MOUNTAIN, radius: 2, continent: CONTINENTS.HOME },
    { name: "Kilimanjaro", x: 62, y: 50, terrain: T.PLAINS_MOUNTAIN, radius: 2, continent: CONTINENTS.HOME },
    { name: "Redwood", x: 74, y: 51, terrain: T.GRASS, radius: 2, continent: CONTINENTS.HOME, feature: FEATURE.FOREST },
    { name: "Vinicunca", x: 53, y: 34, terrain: T.DESERT_MOUNTAIN, radius: 2, continent: CONTINENTS.HOME },
    { name: "Zhangjiajie", x: 72, y: 34, terrain: T.GRASS_MOUNTAIN, radius: 2, continent: CONTINENTS.HOME, feature: FEATURE.JUNGLE },
    { name: "Hoerikwaggo", x: 52, y: 64, terrain: T.GRASS_MOUNTAIN, radius: 2, continent: CONTINENTS.ISLES, footprintRadius: 2 },
    { name: "Everest", x: 80, y: 66, terrain: T.GRASS_MOUNTAIN, radius: 2, continent: CONTINENTS.ISLES, feature: FEATURE.JUNGLE },
    { name: "Fuji", x: 78, y: 22, terrain: T.GRASS_MOUNTAIN, radius: 2, continent: CONTINENTS.ISLES },
    { name: "Paine", x: 54, y: 22, terrain: T.TUNDRA_MOUNTAIN, radius: 2, continent: CONTINENTS.ISLES },
    { name: "ValleyOfFlowers", x: 66, y: 23, terrain: T.PLAINS, radius: 2, continent: CONTINENTS.ISLES },
    { name: "GrandCanyon", x: 74, y: 69, terrain: T.DESERT, radius: 2, continent: CONTINENTS.ISLES, footprintRadius: 2 },
    { name: "Iguazu", x: 58, y: 58, terrain: T.GRASS_HILLS, radius: 2, continent: CONTINENTS.ISLES, feature: FEATURE.JUNGLE },
    { name: "Uluru", x: 65, y: 70, terrain: T.DESERT_HILLS, radius: 2, continent: CONTINENTS.ISLES }
];

const COASTAL_WONDERS = [
    { name: "Mapu a Vaea Blowholes", x: 52, y: 47, waterTiles: rectPoints(50, 46, 53, 49), nearbyLand: [[54, 46], [54, 47], [54, 48], [54, 49], [55, 47]], continent: CONTINENTS.HOME },
    { name: "Great Blue Hole", x: 58, y: 69, waterTiles: rectPoints(57, 68, 59, 70), nearbyLand: [[56, 67], [56, 68], [56, 69], [57, 71], [60, 70], [60, 71]], continent: CONTINENTS.ISLES },
    { name: "Barrier Reef", x: 79, y: 58, waterTiles: [[78, 58], [79, 58], [80, 58], [81, 58], [78, 59], [79, 59], [80, 59], [81, 59]], nearbyLand: [[77, 57], [77, 58], [77, 59], [78, 57], [78, 60]], continent: CONTINENTS.ISLES },
    { name: "Thera", x: 66, y: 62, waterTiles: rectPoints(64, 60, 68, 64), nearbyLand: [[63, 60], [63, 61], [63, 62], [69, 62], [69, 63], [69, 64]], continent: CONTINENTS.ISLES }
];

const OCEAN_WONDERS = [
    { name: "Bermuda Triangle", x: 69, y: 76 }
];

export const CITY_STATE_EXCLUSION_RADIUS = 6;

export const CITY_STATE_EXCLUSION_WONDERS = [
    ...WONDER_TERRAIN.map(({ name, x, y }) => ({ name, x, y })),
    ...COASTAL_WONDERS.map(({ name, x, y }) => ({ name, x, y })),
    ...OCEAN_WONDERS.map(({ name, x, y }) => ({ name, x, y }))
];

export const CITY_STATE_MAINLAND_ZONES = [
    { name: "west", minX: 0, maxX: 47, minY: 13, maxY: 68 },
    { name: "east", minX: 91, maxX: 127, minY: 13, maxY: 68 }
];

export const CITY_STATE_MIN_MAINLAND_COMPONENT_SIZE = 180;

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
    const bite = hashNoise(x + 17, y - 9, blob.salt + 77) > 0.82 ? 0.15 : 0;
    const spur = hashNoise(Math.floor(x / 3), Math.floor(y / 3), blob.salt + 140) > 0.85 ? -0.12 : 0;
    const ripple = (hashNoise(x, y, blob.salt) - 0.5) * blob.rough;
    return (nx * nx) + (ny * ny) + ripple + bite + spur <= 1;
}

function isLand(row) {
    return row[0] !== T.OCEAN && row[0] !== T.COAST;
}

function rotateBiome(base, x, y, salt) {
    const n = blockNoise(x, y, 4, 4, salt);
    if (base === "desert") {
        if (n < 0.18) return "plains";
        if (n > 0.86) return "grass";
        return "desert";
    }
    if (base === "tropical") {
        if (n < 0.18) return "grass";
        if (n > 0.82) return "plains";
        return "tropical";
    }
    if (base === "tundra") {
        if (n < 0.24) return "grass";
        return "tundra";
    }
    if (base === "plains") {
        if (n < 0.20) return "grass";
        if (n > 0.78) return "desert";
        return "plains";
    }
    if (n > 0.82 && y > 45) return "tropical";
    if (n > 0.76 && y < 25) return "tundra";
    if (n < 0.16) return "plains";
    return "grass";
}

function terrainFromBiome(x, y, biome, salt = 0) {
    const n = hashNoise(x, y, salt);
    const ridge = hashNoise(x + 5, y - 3, salt + 100);
    if (biome === "tundra") {
        if (ridge > 0.88) return T.TUNDRA_MOUNTAIN;
        if (n > 0.54) return T.TUNDRA_HILLS;
        return T.TUNDRA;
    }
    if (biome === "desert") {
        if (ridge > 0.92) return T.DESERT_MOUNTAIN;
        if (n > 0.48) return T.DESERT_HILLS;
        return T.DESERT;
    }
    if (biome === "tropical") {
        if (ridge > 0.92) return T.GRASS_MOUNTAIN;
        if (n > 0.45) return T.GRASS_HILLS;
        return T.GRASS;
    }
    if (biome === "plains") {
        if (ridge > 0.92) return T.PLAINS_MOUNTAIN;
        if (n > 0.50) return T.PLAINS_HILLS;
        return T.PLAINS;
    }
    if (ridge > 0.92) return T.GRASS_MOUNTAIN;
    if (n > 0.52) return T.GRASS_HILLS;
    return T.GRASS;
}

function westBiome(x, y) {
    let base = "grass";
    if (y < 24) base = "tundra";
    else if (x > 34 && y > 43) base = "desert";
    else if (y > 52 && x < 30) base = "tropical";
    else if (x < 20 && y > 35) base = "plains";
    return rotateBiome(base, x, y, 201);
}

function eastBiome(x, y) {
    let base = "grass";
    if (y < 22) base = "tundra";
    else if (x > 111 && y > 35) base = "desert";
    else if (y > 50 || x < 96) base = "tropical";
    else if (x < 102 && y < 38) base = "plains";
    return rotateBiome(base, x, y, 301);
}

function homeBiome(x, y) {
    let base = "grass";
    if ((x >= 56 && x <= 62 && y >= 31 && y <= 37) || (x <= 59 && y <= 34)) base = "desert";
    if ((x >= 61 && x <= 68 && y <= 42) || (x >= 72 && y >= 44)) base = "tropical";
    if (x >= 68 && x <= 73 && y >= 40 && y <= 46) base = "grass";
    return rotateBiome(base, x, y, 401);
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

function setSquare(map, centerX, centerY, radius, terrain, continent = -1, feature = FEATURE.NONE) {
    for (let y = centerY - radius; y <= centerY + radius; y++) {
        for (let x = centerX - radius; x <= centerX + radius; x++) {
            setTile(map, x, y, terrain, continent, feature);
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

function setLandPath(map, points, radius, continent, salt) {
    for (let i = 0; i < points.length - 1; i++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[i + 1];
        const steps = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
        for (let s = 0; s <= steps; s++) {
            const t = steps === 0 ? 0 : s / steps;
            const x = Math.round(x1 + ((x2 - x1) * t));
            const y = Math.round(y1 + ((y2 - y1) * t));
            for (let yy = y - radius; yy <= y + radius; yy++) {
                for (let xx = x - radius; xx <= x + radius; xx++) {
                    if (Math.hypot(xx - x, yy - y) <= radius + (hashNoise(xx, yy, salt + i) > 0.72 ? 0.5 : 0)) {
                        const biome = continent === CONTINENTS.EAST ? eastBiome(xx, yy) : westBiome(xx, yy);
                        setTile(map, xx, yy, terrainFromBiome(xx, yy, biome, salt + i), continent);
                    }
                }
            }
        }
    }
}

function stampBlobs(map, blobs, continent, biomePicker) {
    for (const blob of blobs) {
        for (let y = 0; y < MAP_HEIGHT; y++) {
            for (let x = 0; x < MAP_WIDTH; x++) {
                if (!inBlob(x, y, blob)) continue;
                const biome = biomePicker(x, y, blob);
                const feature = biome === "tropical" && hashNoise(x, y, blob.salt + 500) > 0.50 ? FEATURE.JUNGLE : FEATURE.NONE;
                setTile(map, x, y, terrainFromBiome(x, y, biome, blob.salt), continent, feature);
            }
        }
    }
}

function stampSmallIsland(map, island) {
    for (let y = 0; y < MAP_HEIGHT; y++) {
        for (let x = 0; x < MAP_WIDTH; x++) {
            if (!inBlob(x, y, island)) continue;
            const continent = island.continent ?? CONTINENTS.ISLES;
            const biome = rotateBiome(island.biome, x, y, island.salt + 300);
            const feature = biome === "tropical" && hashNoise(x, y, island.salt + 501) > 0.42 ? FEATURE.JUNGLE : FEATURE.NONE;
            setTile(map, x, y, terrainFromBiome(x, y, biome, island.salt), continent, feature);
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

function carveWater(map) {
    setEllipse(map, 64, 45, 2, 2, T.COAST);
    setEllipse(map, 68, 39, 2, 2, T.COAST);
    setEllipse(map, 58, 44, 2, 3, T.COAST);
    setEllipse(map, 74, 40, 2, 3, T.COAST);
    setEllipse(map, 64, 54, 5, 3, T.COAST);
    setEllipse(map, 63, 28, 4, 3, T.COAST);
    setEllipse(map, 50, 39, 3, 7, T.COAST);
    setEllipse(map, 59, 28, 4, 2, T.COAST);
    setEllipse(map, 81, 35, 3, 5, T.COAST);
    setEllipse(map, 70, 57, 5, 3, T.COAST);
    setEllipse(map, 28, 42, 7, 5, T.COAST);
    setEllipse(map, 36, 57, 5, 4, T.COAST);
    setEllipse(map, 103, 43, 7, 5, T.COAST);
    setEllipse(map, 95, 58, 5, 4, T.COAST);
    setEllipse(map, 22, 25, 5, 4, T.COAST);
    setEllipse(map, 42, 35, 4, 8, T.COAST);
    setEllipse(map, 17, 55, 5, 5, T.COAST);
    setEllipse(map, 34, 62, 4, 4, T.COAST);
    setEllipse(map, 12, 31, 5, 9, T.COAST);
    setEllipse(map, 31, 20, 7, 3, T.COAST);
    setEllipse(map, 45, 49, 5, 9, T.COAST);
    setEllipse(map, 23, 64, 7, 3, T.COAST);
    setEllipse(map, 39, 20, 4, 4, T.OCEAN);
    setEllipse(map, 9, 49, 4, 6, T.OCEAN);
    setEllipse(map, 6, 33, 5, 12, T.OCEAN);
    setEllipse(map, 19, 20, 8, 4, T.COAST);
    setEllipse(map, 47, 18, 5, 8, T.OCEAN);
    setEllipse(map, 49, 43, 4, 11, T.OCEAN);
    setEllipse(map, 22, 68, 9, 4, T.COAST);
    setEllipse(map, 11, 61, 5, 7, T.OCEAN);
    setEllipse(map, 38, 36, 3, 9, T.OCEAN);
    setEllipse(map, 96, 26, 5, 5, T.COAST);
    setEllipse(map, 116, 42, 5, 8, T.COAST);
    setEllipse(map, 102, 61, 6, 4, T.COAST);
    setEllipse(map, 90, 48, 4, 6, T.COAST);
    setEllipse(map, 94, 18, 8, 3, T.COAST);
    setEllipse(map, 121, 28, 4, 8, T.COAST);
    setEllipse(map, 98, 50, 8, 4, T.COAST);
    setEllipse(map, 115, 65, 7, 3, T.COAST);
    setEllipse(map, 111, 20, 4, 5, T.OCEAN);
    setEllipse(map, 124, 51, 4, 7, T.OCEAN);
    setEllipse(map, 92, 20, 6, 10, T.OCEAN);
    setEllipse(map, 109, 18, 9, 4, T.COAST);
    setEllipse(map, 124, 34, 6, 11, T.OCEAN);
    setEllipse(map, 95, 44, 5, 11, T.OCEAN);
    setEllipse(map, 110, 66, 10, 4, T.COAST);
    setEllipse(map, 121, 61, 5, 8, T.OCEAN);
    setEllipse(map, 113, 48, 4, 9, T.OCEAN);
    setEllipse(map, 79, 32, 4, 11, T.OCEAN);
    setEllipse(map, 84, 49, 5, 13, T.OCEAN);
}

function stitchContinents(map) {
    setLandPath(map, [[102, 29], [107, 35], [110, 41], [108, 48], [104, 55], [96, 55]], 2, CONTINENTS.EAST, 701);
    setLandPath(map, [[104, 55], [110, 56], [115, 57]], 2, CONTINENTS.EAST, 711);
    setLandPath(map, [[27, 28], [31, 35], [27, 43], [31, 50], [39, 55]], 2, CONTINENTS.WEST, 721);
}

function separateCentralIsland(map) {
    for (let y = 20; y <= 61; y++) {
        for (let x = 48; x <= 54; x++) {
            setTile(map, x, y, T.OCEAN);
        }
    }
    for (let y = 18; y <= 62; y++) {
        for (let x = 79; x <= 87; x++) {
            setTile(map, x, y, T.OCEAN);
        }
    }
}

function enforceWestStrait(map) {
    for (let y = 0; y < MAP_HEIGHT; y++) {
        for (let x = 48; x <= 50; x++) {
            setTile(map, x, y, T.OCEAN);
        }
    }
}

function enforceEastDeepChannel(map) {
    for (let y = 0; y < MAP_HEIGHT; y++) {
        for (let x = 82; x <= 90; x++) {
            setTile(map, x, y, T.OCEAN);
        }
    }
}

function separateSatelliteIslands(map) {
    for (let x = 50; x <= 81; x++) {
        for (let y = 28; y <= 30; y++) {
            setTile(map, x, y, T.OCEAN);
        }
        for (let y = 54; y <= 56; y++) {
            setTile(map, x, y, T.OCEAN);
        }
    }
}

function splitSatelliteIslands(map) {
    const gaps = [
        { x1: 55, x2: 56, y1: 57, y2: 68 },
        { x1: 62, x2: 63, y1: 57, y2: 68 },
        { x1: 70, x2: 71, y1: 57, y2: 68 },
        { x1: 77, x2: 77, y1: 57, y2: 63 },
        { x1: 56, x2: 57, y1: 19, y2: 27 },
        { x1: 66, x2: 67, y1: 19, y2: 27 },
        { x1: 76, x2: 77, y1: 19, y2: 27 }
    ];

    for (const gap of gaps) {
        for (let x = gap.x1; x <= gap.x2; x++) {
            for (let y = gap.y1; y <= gap.y2; y++) {
                setTile(map, x, y, T.COAST);
            }
        }
    }
}

function restoreWestShallows(map) {
    for (let y = 41; y <= 43; y++) {
        for (let x = 48; x <= 50; x++) {
            setTile(map, x, y, T.COAST);
        }
    }
}

function addShallowNetwork(map) {
    for (let x = 45; x <= 57; x++) {
        const y = 42 + Math.round(Math.sin((x - 45) / 2) * 1.3);
        setDisc(map, x, y, 1, T.COAST);
    }
    setTile(map, 46, 42, T.PLAINS, CONTINENTS.WEST);
    setTile(map, 47, 42, T.PLAINS_HILLS, CONTINENTS.WEST);

    const links = [
        [55, 48], [54, 50], [53, 52],
        [70, 45], [72, 46], [74, 48]
    ];
    for (const [x, y] of links) {
        setDisc(map, x, y, 1, T.COAST);
    }
}

function addWonderBiomes(map) {
    for (const [x, y] of [[60,38], [61,38], [62,39], [63,39], [64,39], [70,34], [71,34], [72,34], [73,34], [74,34]]) {
        setTile(map, x, y, (x === 62 && y === 39) || (x === 72 && y === 34) ? T.GRASS_MOUNTAIN : T.GRASS, CONTINENTS.HOME, FEATURE.JUNGLE);
    }
    for (let y = 30; y <= 39; y++) {
        for (let x = 49; x <= 58; x++) {
            if (Math.hypot(x - 53, y - 34) <= 5 && !(x === 53 && y === 34)) {
                setTile(map, x, y, hashNoise(x, y, 610) > 0.55 ? T.DESERT_HILLS : T.DESERT, CONTINENTS.HOME);
            }
        }
    }
    for (let y = 47; y <= 55; y++) {
        for (let x = 70; x <= 78; x++) {
            if (Math.hypot(x - 74, y - 51) <= 4) {
                setTile(map, x, y, hashNoise(x, y, 620) > 0.50 ? T.GRASS_HILLS : T.GRASS, CONTINENTS.HOME, FEATURE.FOREST);
            }
        }
    }
    for (let y = 62; y <= 70; y++) {
        for (let x = 76; x <= 84; x++) {
            if (Math.hypot(x - 80, y - 66) <= 5) {
                setTile(map, x, y, hashNoise(x, y, 630) > 0.60 ? T.GRASS_HILLS : T.GRASS, CONTINENTS.ISLES, FEATURE.JUNGLE);
            }
        }
    }
    for (let y = 19; y <= 27; y++) {
        for (let x = 62; x <= 70; x++) {
            if (Math.hypot(x - 66, y - 23) <= 4) {
                setTile(map, x, y, T.PLAINS, CONTINENTS.ISLES);
            }
        }
    }
    for (let y = 65; y <= 73; y++) {
        for (let x = 70; x <= 78; x++) {
            if (Math.hypot(x - 74, y - 69) <= 4) {
                setTile(map, x, y, T.DESERT, CONTINENTS.ISLES);
            }
        }
    }
    for (let y = 54; y <= 62; y++) {
        for (let x = 54; x <= 62; x++) {
            if (Math.hypot(x - 58, y - 58) <= 4) {
                setTile(map, x, y, hashNoise(x, y, 640) > 0.45 ? T.GRASS_HILLS : T.GRASS, CONTINENTS.ISLES, FEATURE.JUNGLE);
            }
        }
    }
    for (let y = 66; y <= 74; y++) {
        for (let x = 61; x <= 69; x++) {
            if (Math.hypot(x - 65, y - 70) <= 4) {
                setTile(map, x, y, hashNoise(x, y, 650) > 0.40 ? T.DESERT_HILLS : T.DESERT, CONTINENTS.ISLES);
            }
        }
    }
}

function supportTerrainFor(terrain) {
    if (terrain === T.GRASS_MOUNTAIN || terrain === T.GRASS_HILLS) return T.GRASS;
    if (terrain === T.PLAINS_MOUNTAIN || terrain === T.PLAINS_HILLS) return T.PLAINS;
    if (terrain === T.DESERT_MOUNTAIN || terrain === T.DESERT_HILLS) return T.DESERT;
    if (terrain === T.TUNDRA_MOUNTAIN || terrain === T.TUNDRA_HILLS || terrain === T.SNOW_MOUNTAIN || terrain === T.SNOW_HILLS) return T.TUNDRA;
    return terrain;
}

function prepareWonders(map) {
    addWonderBiomes(map);
    for (const wonder of WONDER_TERRAIN) {
        setDisc(map, wonder.x, wonder.y, wonder.radius, wonder.terrain, wonder.continent, wonder.feature ?? FEATURE.NONE);
    }
    for (const wonder of COASTAL_WONDERS) {
        for (const [x, y] of wonder.nearbyLand) {
            setDisc(map, x, y, 2, T.PLAINS_HILLS, wonder.continent);
        }
        for (const [x, y] of wonder.waterTiles) {
            setTile(map, x, y, T.COAST);
        }
    }
    for (const wonder of OCEAN_WONDERS) {
        setDisc(map, wonder.x, wonder.y, 2, T.OCEAN);
    }
}

function stabilizeWonderTerrain(map) {
    for (const wonder of WONDER_TERRAIN) {
        setDisc(map, wonder.x, wonder.y, wonder.supportRadius ?? 4, supportTerrainFor(wonder.terrain), wonder.continent, wonder.feature ?? FEATURE.NONE);
        setSquare(map, wonder.x, wonder.y, wonder.footprintRadius ?? 1, wonder.terrain, wonder.continent);
    }

    for (const wonder of COASTAL_WONDERS) {
        for (const [x, y] of wonder.nearbyLand) {
            setDisc(map, x, y, 3, T.PLAINS_HILLS, wonder.continent);
        }
        for (const [x, y] of wonder.waterTiles) {
            setTile(map, x, y, T.COAST);
        }
        setTile(map, wonder.x, wonder.y, T.COAST);
    }

    for (const wonder of OCEAN_WONDERS) {
        setDisc(map, wonder.x, wonder.y, 2, T.OCEAN);
    }

    for (const wonder of WONDER_TERRAIN) {
        setTile(map, wonder.x, wonder.y, wonder.terrain, wonder.continent);
    }
}

function stabilizeOpenWaterWonders(map) {
    for (const wonder of OCEAN_WONDERS) {
        setDisc(map, wonder.x, wonder.y, 2, T.OCEAN);
    }
}

function prepareStarts(map) {
    for (const start of STABLE_STARTS) {
        setDisc(map, start.x, start.y, 1, T.PLAINS, start.continent);
        setTile(map, start.x + 1, start.y, T.PLAINS_HILLS, start.continent);
    }
}

function stabilizeStartPlots(map) {
    for (const start of STABLE_STARTS) {
        setTile(map, start.x, start.y, T.PLAINS, start.continent);
    }
}

function makeRiverLowland(map, x, y) {
    if (x < 0 || y < 0 || x >= MAP_WIDTH || y >= MAP_HEIGHT || !isLand(map[x][y])) return;
    const terrain = map[x][y][0];
    if (terrain === T.GRASS_MOUNTAIN) setTile(map, x, y, T.GRASS_HILLS, map[x][y][2], map[x][y][1]);
    if (terrain === T.PLAINS_MOUNTAIN) setTile(map, x, y, T.PLAINS_HILLS, map[x][y][2], map[x][y][1]);
    if (terrain === T.DESERT_MOUNTAIN) setTile(map, x, y, T.DESERT_HILLS, map[x][y][2], map[x][y][1]);
    if (terrain === T.TUNDRA_MOUNTAIN || terrain === T.SNOW_MOUNTAIN) setTile(map, x, y, T.TUNDRA_HILLS, map[x][y][2], map[x][y][1]);
}

function setRiverEdge(map, x, y, edge, flow = 3) {
    if (x < 0 || y < 0 || x >= MAP_WIDTH || y >= MAP_HEIGHT || !isLand(map[x][y])) return;
    map[x][y][3][edge] = [1, flow];
}

function addRiverPath(map, points, flow = 3) {
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
    addRiverPath(map, [[58, 32], [59, 35], [60, 38], [62, 41], [63, 44], [63, 46]], 3);
    addRiverPath(map, [[70, 31], [69, 34], [68, 37], [68, 39], [67, 42], [65, 45], [63, 46]], 3);
    addRiverPath(map, [[72, 36], [71, 38], [69, 40], [66, 42], [63, 44], [63, 46]], 3);
    addRiverPath(map, [[54, 35], [56, 37], [58, 39], [60, 42], [61, 44], [63, 46]], 3);
    addRiverPath(map, [[73, 47], [70, 47], [67, 46], [65, 45], [63, 46]], 3);
    addRiverPath(map, [[18, 18], [21, 23], [24, 28], [27, 33], [29, 38], [28, 42]], 3);
    addRiverPath(map, [[40, 25], [38, 31], [36, 36], [34, 42], [33, 49], [36, 57]], 3);
    addRiverPath(map, [[17, 60], [22, 57], [27, 55], [32, 54], [38, 55], [44, 58]], 3);
    addRiverPath(map, [[96, 20], [99, 26], [102, 32], [104, 38], [103, 43]], 3);
    addRiverPath(map, [[116, 29], [113, 35], [110, 41], [107, 48], [104, 55], [101, 61]], 3);
    addRiverPath(map, [[92, 54], [96, 55], [101, 56], [107, 57], [114, 57]], 3);
    addRiverPath(map, [[14, 30], [18, 33], [22, 36], [27, 39], [33, 42], [39, 44], [45, 46]], 3);
    addRiverPath(map, [[33, 18], [35, 24], [36, 29], [35, 35], [33, 41], [31, 47], [30, 53]], 3);
    addRiverPath(map, [[23, 64], [27, 62], [32, 60], [37, 59], [42, 58], [46, 56]], 3);
    addRiverPath(map, [[92, 30], [96, 34], [100, 38], [105, 42], [110, 45], [116, 48]], 3);
    addRiverPath(map, [[119, 21], [116, 27], [113, 33], [110, 39], [106, 45], [101, 50], [96, 55]], 3);
    addRiverPath(map, [[98, 65], [103, 63], [108, 61], [113, 59], [118, 57]], 3);
    addRiverPath(map, [[99, 54], [101, 55], [103, 56], [104, 57], [106, 58], [108, 59]], 3);
    addRiverPath(map, [[62, 30], [62, 34], [62, 37], [63, 42], [63, 46]], 3);
    addRiverPath(map, [[72, 31], [71, 35], [70, 39], [70, 43], [72, 47]], 3);
}

function addFinalWonderRivers(map) {
    addRiverPath(map, [[99, 54], [101, 55], [103, 56], [104, 57], [106, 58], [108, 59]], 3);
    addRiverPath(map, [[55, 55], [56, 56], [57, 57], [58, 58], [59, 59], [60, 60], [61, 61]], 3);
    addRiverPath(map, [[55, 59], [56, 58], [57, 58], [58, 58], [59, 57], [60, 56], [61, 55]], 3);
}

function buildMap() {
    const map = Array.from({ length: MAP_WIDTH }, () =>
        Array.from({ length: MAP_HEIGHT }, () => makeRow(T.OCEAN))
    );

    stampBlobs(map, WEST_BLOBS, CONTINENTS.WEST, westBiome);
    stampBlobs(map, EAST_BLOBS, CONTINENTS.EAST, eastBiome);
    stampBlobs(map, HOME_BLOBS, CONTINENTS.HOME, homeBiome);
    carveWater(map);
    stitchContinents(map);
    separateCentralIsland(map);
    enforceEastDeepChannel(map);
    for (const island of SMALL_ISLANDS) {
        stampSmallIsland(map, island);
    }
    separateSatelliteIslands(map);
    enforceWestStrait(map);
    enforceEastDeepChannel(map);
    prepareWonders(map);
    stabilizeWonderTerrain(map);
    separateSatelliteIslands(map);
    prepareStarts(map);
    enforceWestStrait(map);
    enforceEastDeepChannel(map);
    addCoasts(map);
    addShallowNetwork(map);
    enforceWestStrait(map);
    enforceEastDeepChannel(map);
    restoreWestShallows(map);
    addCoasts(map);
    enforceEastDeepChannel(map);
    addRivers(map);
    stabilizeWonderTerrain(map);
    separateSatelliteIslands(map);
    splitSatelliteIslands(map);
    enforceEastDeepChannel(map);
    addFinalWonderRivers(map);
    stabilizeWonderTerrain(map);
    enforceWestStrait(map);
    enforceEastDeepChannel(map);
    addCoasts(map);
    stabilizeWonderTerrain(map);
    addFinalWonderRivers(map);
    stabilizeOpenWaterWonders(map);
    stabilizeStartPlots(map);

    return map;
}

export function GetMap() {
    return buildMap();
}

console.log("loaded twin-discovery-wonder-seas-data.js");
