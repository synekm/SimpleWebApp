const path = require('path');
const model = require(path.join(__dirname, '..', 'models', 'model'));


exports.main=(req,res)=>
{
    let data = model.nacistVse();
    res.render("main", {data});
}

exports.nahrani = (req, res) =>
{
    res.render("nahrani");
}

exports.nahrat = (req, res) =>
{
    let id = model.getID();
    let nazev = req.body.nazev;
    let telo = req.body.telo;

    console.log(id + " " +  nazev + " " + telo);
    
    model.nahratClanek(
        id,
        nazev,
        telo
    );

    res.redirect('/');
}

exports.detail = (req, res) =>
{
    let id = req.params.id;
    let data = model.nacistJeden(id);
    res.render("clanek", {data});
}