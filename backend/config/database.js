const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/musicOntology');
let db = mongoose.connection;

module.exports = db;
