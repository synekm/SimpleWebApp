const express = require('express');
const path = require("path");
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ "extended": true }));

app.use('/', require(path.join(__dirname, 'routers', 'router')));
app.use('/redakce', require(path.join(__dirname, 'routers', 'redakcniRouter')));
app.use(express.static(path.join(__dirname, 'www')));
app.use(express.json());

module.exports = app;