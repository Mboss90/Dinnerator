const mongoose = require('mongoose');
const connection = require('./connection.js');

const mealSchema = mongoose.Schema({
  id: Number,
  name: String,
  ingredients: String,
  vegetarian: Boolean,
  vegan: Boolean,
  recipeURL: String,
});

const Meal = mongoose.model('Meal', mealSchema);

const getAllMeals = () => {
  console.log('find Docs invoked!');
  return new Promise((resolve, reject) => {
    Meal.find({})
      .then((docs) => resolve(docs))
      .catch((err) => reject(err));
  });
};

const searchMealId = (id) => {
  console.log('find Docs by Id invoked!');
  return new Promise((resolve, reject) => {
    Meal.find({ id })
      .then((docs) => resolve(docs))
      .catch((err) => reject(err));
  });
};

module.exports = { getAllMeals, searchMealId };
