const path = require('path');
const model = require(path.join(__dirname, '..', 'models', 'model'));


exports.main=(req,res)=>
{
    let data = model.nacistVse();
    res.render("main", {data});
}

exports.detail = (req, res) =>
{
    let id = req.params.id;
    let data = model.nacistJeden(id);
    res.render("clanek", {data});
}