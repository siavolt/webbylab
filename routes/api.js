let app = require('express')();
let movie = require('./movie');

app.use('/movie', movie);

module.exports = app;
