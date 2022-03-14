const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', require(path.join(__dirname, 'routers', 'router')));

module.exports = app;