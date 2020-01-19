import { Pool } from 'pg';

const pool = new Pool({
    user: 'admin',
    host: 'db',
    database: 'roads',
    password: 'password123',
    port: 5432,
});

function filterRoads(req) {
    if (req.query.bbox) {
        // TODO: Add some validation to check bbox is list of numbers
        return `SELECT identifier, roadnumber, name1, formofway, startnode, endnode, function, ST_AsGeoJSON(geom) as geom
        FROM roads.roadlink
        WHERE ST_Within(geom, ST_Transform(ST_MakeEnvelope(${req.query.bbox}, 4326), 27700));`;
    }

    if (req.query.name) {
        return `SELECT identifier, roadnumber, name1, formofway, startnode, endnode, function, ST_AsGeoJSON(geom)
        FROM roads.roadlink
        WHERE name1 ILIKE '${req.query.name}%';`;
    }
}

function getRoads(req, res) {
    pool.query(filterRoads(req), (err, results) => {
        if (err) {
            console.error(err);
        }
        res.json({ data: results.rows });
    });
}

export { getRoads };
