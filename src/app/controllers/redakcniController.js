const path = require('path');

const clanek_model = require(path.join(__dirname, '..', 'models', 'clanek_model'));

exports.main = (req,res) =>
{
    res.render("redakce/redakce");
}

exports.nahrani = (req, res) =>
{
    res.render("redakce/nahrani");
}

exports.nahrat = (req, res) =>
{
    let id = clanek_model.getID();
    let nadpis = req.body.nadpis;
    let obsah = req.body.obsah;
    let datum = req.body.datum;
    let autori = req.body.autori.split(',');
    let kratkyPopis = req.body.kratkyPopis;
    
    clanek_model.nahratClanek(
        id,
        nadpis,
        obsah,
        autori,
        datum,
        kratkyPopis
    );

    res.redirect('/');
}