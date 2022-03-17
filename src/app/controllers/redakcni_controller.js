const path = require('path');
const bcrypt = require("bcryptjs");
const clanek_model = require(path.join(__dirname, '..', 'models', 'clanek_model'));
const redakcniModel = require(path.join(__dirname, '..', 'models', 'redakcni_model'));


exports.login_form = (req,res) =>
{
    res.render("redakce/login");
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

//Ukladani prihlasovacich udaju do sessionu 
exports.post_login_info = (req, res,next) => {
    req.session.username = req.body.username;
    req.session.password = req.body.password;
    next();
}

//Overeni zda je admin (redaktor) prihlaseny 
exports.jePrihlasen = (req, res, next) => {
    if (req.session.username == undefined) {
        res.redirect("/redakce/login");
    }
    if (req.session.username == 'admin') 
    {
        next();
    }
}

exports.odhlasit = (req, res) => 
{
    req.session.username = undefined;
    req.session.password = undefined;
    res.send({"msg":{"status":100, "text":"Success"}})
}

exports.porovnat = (req, res) => {
    bcrypt.hash(process.env.ADMIN_PASSWORD, 5, function (err, hash) {
        bcrypt.compare(req.session.password, hash, function (err, result) {
            if(req.session.username == process.env.ADMIN_USERNAME && result == true){
                req.session.userid = 'admin';
                res.redirect('/redakce/nahrani');
            }
            else {
                res.redirect('/redakce/login')
            }
        });
    }); 
}