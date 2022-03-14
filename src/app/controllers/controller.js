const path = require('path');
const model = require(path.join(__dirname, '..', 'models', 'model'));


exports.main=(req,res)=>
{
    let data = model.nacistVse();
    res.render("main", {data});
}