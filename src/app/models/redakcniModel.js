const bcrypt = require("bcryptjs");

exports.porovnat = (req, res) => {
    bcrypt.hash(process.env.ADMIN_PASSWORD, 5, function (err, hash) {
        bcrypt.compare(req.session.password, hash, function (err, result) {
            if(req.session.username == process.env.ADMIN_USERNAME && result == true){
                req.session.userid = 'admin';
                res.redirect('/redakce/nahrani');
            }
            else {
                res.redirect('/redakce')
            }
        });
    }); 
}