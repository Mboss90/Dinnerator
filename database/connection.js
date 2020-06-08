const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dinnerator', { useMongoClient: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', err => {
  console.log(err);
});

db.on('connected', () => {
  console.log('connected to Mongo');
});

module.exports = db;