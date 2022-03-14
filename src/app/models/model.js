const path = require('path');

const jsondb = require('simple-json-db');

const db = new jsondb(path.join(__dirname, '..', '..', 'data', 'clanky.json'));

if(!db.has("next_id"))
{
    db.set('next_id', 1);
}

exports.getID = () =>
{
    return db.get("next_id");
}

exports.nacistVse = () =>
{
    let clanky = db.JSON();

    delete clanky.next_id;

    return clanky;
}

exports.nahratClanek = (id, nazev, telo) =>
{
    db.set("next_id", db.get("next_id")+1);
    db.set(id,{
        nazev,
        telo
    });
}

exports.nacistJeden = (id) =>
{
    let clanek = db.get(id);

    return clanek;
}