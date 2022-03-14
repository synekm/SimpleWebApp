

exports.nahrani = (req, res) =>
{
    res.render("clanek/nahrani");
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