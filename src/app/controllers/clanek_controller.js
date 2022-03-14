const path = require('path');
const clanek_model = require(path.join(__dirname, '..', 'models', 'clanek_model'));

exports.nahrani = (req, res) =>
{
    res.render("clanek/nahrani");
}



exports.nahrat = (req, res) =>
{
    let id = model.getID();

    model.nahratClanek(
        id,
        req.body.nazev,
        req.body.telo
    );

    res.redirect('/');
}

exports.detail_clanek = (req,res) =>
{
    let data = clanek_model.nacistClanek(req.params.id);
    res.render("clanek/detail",{data})
};