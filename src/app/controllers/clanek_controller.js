const path = require('path');
const clanek_model = require(path.join(__dirname, '..', 'models', 'clanek_model'));

exports.detail_clanek = (req,res) =>
{
    let data = clanek_model.nacistClanek(req.params.id);
    res.render("clanek/detail",{data})
};