const path = require('path');

const clanek_model = require(path.join(__dirname, '..', 'models', 'clanek_model'));
const redakcniModel = require(path.join(__dirname, '..', 'models', 'redakcniModel'));


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

exports.postLoginInfo = (req, res) => {
    req.session.username = req.body.username;
    req.session.password = req.body.password;
    
    res.send({"status":100})
}

exports.jePrihlasen = (req, res, next) => {
    if (req.session.userid == undefined) {
        next();
    }
    if (req.session.userid == 'admin') {
        res.redirect("/redakce/edit")
    }
}

exports.odhlasit = (req, res) => {
    req.session.username = undefined;
    req.session.password = undefined;
    req.session.userid = undefined;
    res.send({"msg":{"status":100, "text":"Success"}})
}

exports.porovnat = (req, res) => {
    redakcniModel.porovnat(req, res);
}