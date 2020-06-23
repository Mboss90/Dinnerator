const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dinnerator', { useMongoClient: true });

const db = mongoose.connection;

db.on('error', () => console.error('Error loading Meals database'));
db.once('open', () => console.log('Meals database connected'));

module.exports = { db };