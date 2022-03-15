const path = require('path');
const clanek_model = require(path.join(__dirname, '..', 'models', 'clanek_model'));


exports.main = (req, res) =>
{
    let data = clanek_model.nacistVse();
    res.render("main", {data});
}


