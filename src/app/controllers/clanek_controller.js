const path = require('path');
const model = require(path.join(__dirname, '..', 'models', 'model'));

exports.nahrani = (req, res) =>
{
    res.render("clanek/nahrani");
}

exports.nahrat = (req, res) =>
{
    let id = model.getID();
    let nadpis = req.body.nadpis;
    let obsah = req.body.obsah;
    let datum = req.body.datum;
    let autori = req.body.autori.split(',');
    
    model.nahratClanek(
        id,
        nadpis,
        obsah,
        autori,
        datum
    );

    res.redirect('/');
}