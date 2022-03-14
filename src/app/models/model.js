const path = require('path');

const jsondb = require('simple-json-db');

const db = new jsondb(__dirname, '..', '..', 'data', 'clanky');

exports.nacistVse = () =>
{
    let clanky = db.JSON();

    return clanky;
}

exports.nacistJeden = (id) =>
{
    let clanek = db.get(id);

    return clanek;
}