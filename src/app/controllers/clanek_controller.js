const path = require('path');
const clanek_model = require(path.join(__dirname, '..', 'models', 'clanek_model'));

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
    let kratkyPopis = req.body.kratkyPopis;
    
    model.nahratClanek(
        id,
        nadpis,
        obsah,
        autori,
        datum,
        kratkyPopis
    );

    res.redirect('/');
}

exports.detail_clanek = (req,res) =>
{
    let data = clanek_model.nacistClanek(req.params.id);
    res.render("clanek/detail",{data})
};