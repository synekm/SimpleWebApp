const dotenv = require('dotenv');

dotenv.config({"path":__dirname+"/../.env"});

module.exports = {
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.ADMIN_USERNAME,
    pass: process.env.ADMIN_PASSWORD,
    key: process.env.SECRET_KEY
};
