-- Twin Discovery Wonder Seas uses curated fixed natural wonders.
-- Keep the constraint relaxation local to the wonders declared for this map, so
-- the map does not depend on the shell option row being visible for every civ pair.

DELETE FROM TypeTags
WHERE Type IN (
    SELECT FeatureType
    FROM NaturalWonderPosition
    WHERE MapName = 'TwinDiscoveryWonderSeas'
)
  AND Tag IN (
    'ADJACENTMOUNTAIN',
    'NOTADJACENTMOUNTAIN',
    'NOTADJACENTTORIVER',
    'ADJACENTTOSAMEBIOME',
    'NOTNEARCOAST',
    'NEARCOAST',
    'ADJACENTTOLAND',
    'ADJACENTTOCOAST',
    'NOTADJACENTTOLAND',
    'ADJACENTCLIFF',
    'NOLANDOPPOSITECLIFF',
    'ADJACENTTOSAMETERRAIN',
    'NOTADJACENTTOICE',
    'SHALLOWWATER',
    'SIMALARELEVATION'
);

UPDATE Features
SET MinimumElevation = 0,
    MaximumElevation = 0
WHERE FeatureType IN (
    SELECT FeatureType
    FROM NaturalWonderPosition
    WHERE MapName = 'TwinDiscoveryWonderSeas'
);

UPDATE Feature_NaturalWonders
SET NoRiver = 0
WHERE FeatureType IN (
    SELECT FeatureType
    FROM NaturalWonderPosition
    WHERE MapName = 'TwinDiscoveryWonderSeas'
);
