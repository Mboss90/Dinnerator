// Dependecies
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const database = require('../database/index.js')

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(morgan('dev'));

app.get('/dinnerator', (req, res) => {
  database.getAllMeals()
    .then((results) => res.status(200).json(results))
    .catch((err) => res.status(400).json(err));
});

app.get('/:id/dinnerator', (req, res) => {
  const mealId = req.params.id;
  console.log(mealId);
  database.searchMealId(mealId)
    .then((results) => res.status(200).json(results))
    .catch((err) => res.status(400).json(err));
});

app.post('/dinnerator', (req, res) => {
  console.log(req.body);
  db.collection('meals').insertOne(req.body, (err, data) => {
    if (err) return console.log(err);
    res.send(('saved to db: ' + data));
  })
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  console.log('Current Path: ', path.join(__dirname, '/../client/dist'));
});