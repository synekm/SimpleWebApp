const path = require('path');
const bcrypt = require("bcryptjs");
const clanek_model = require(path.join(__dirname, '..', 'models', 'clanek_model'));


exports.login_form = (req,res) =>
{
    res.render("redakce/login");
}

exports.nahrani_form = (req, res) =>
{
    res.render("redakce/nahrani_clanku");
}

exports.prehled_clanku = (req, res) =>
{
    let clanky = clanek_model.nacistVse();
    res.render("redakce/prehled_clanku",{clanky});
}

exports.uprava_clanku = (req, res) =>
{
    let clanek = clanek_model.nacistClanek(req.params.id);
    clanek.id = req.params.id;
    res.render("redakce/uprava_clanku",{clanek});
}

//Akce- narhani clanku do databaze
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

    res.redirect('/redakce/nahrani_clanku');
}

//Akce - upraveni clanku
exports.upravit = (req,res) =>
{
    clanek_model.nahratClanek(
        req.params.id,
        req.body.nadpis,
        req.body.obsah,
        req.body.autori,
        req.body.datum,
        req.body.kratkyPopis
    );

}

//Akce- Smazani clanku do databaze
exports.smazat = (req, res) => {
    var id = req.params.id;
    clanek_model.smazatClanek(id);
    res.redirect('/redakce/prehled_clanku');
}

//Ukladani prihlasovacich udaju do sessionu 
exports.post_login_info = (req, res, next) => {
    req.session.username = req.body.username;
    req.session.password = req.body.password;
    next();
}

//Overeni zda je admin (redaktor) prihlaseny 
exports.jePrihlasen = (req, res, next) => {
    if (req.session.userid == undefined)
        res.redirect("/redakce/login");
    if (req.session.userid == "admin") 
        next();
}

exports.odhlasit = (req, res) => 
{
    req.session.username = undefined;
    req.session.password = undefined;
    req.session.userid = undefined;
    res.redirect('/redakce/login')
}

exports.porovnat = (req, res) => {
    bcrypt.hash(process.env.ADMIN_PASSWORD, 5, function (err, hash) {
        bcrypt.compare(req.session.password, hash, function (err, result) {
            if(req.session.username == process.env.ADMIN_USERNAME && result == true)
            {
                req.session.userid = 'admin';
                res.redirect('/redakce/nahrani_clanku');
            }
            else {
                res.redirect('/redakce/login');
            }
        });
    }); 
}