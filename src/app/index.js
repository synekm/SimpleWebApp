const express = require('express');
const session = require('express-session');
const path = require("path");

const app = express();

const { key } = require(path.join(__dirname, '..', 'config'));

app.use('/', session({
    secret: key,
    secure: false,
    resave: false,
    saveUninitialized: false,
    cookie: { 
        sameSite: true,
        expires: 300000
    },
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'www')));
app.use(express.json());
app.use(express.urlencoded({ "extended": true }));

app.use('/', require(path.join(__dirname, 'routers', 'router')));
app.use('/clanek', require(path.join(__dirname, 'routers', 'clanek_router')));
app.use('/redakce', require(path.join(__dirname, 'routers', 'redakcniRouter')));

module.exports = app;