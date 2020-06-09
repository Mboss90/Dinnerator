const mongoose = require('mongoose');
const connection = require('./connection.js');

const mealSchema = mongoose.Schema({
  name: String,
  // ingredients: String,
  vegetarian: String,
  vegan: String,
  protein: String,
  recipeURL: String
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

const searchMealByName = (name) => {
  console.log('Searching for meal:', name);
  return new Promise((resolve, reject) => {
    Meal.find({ name })
      .then((docs) => resolve(docs))
      .catch((err) => reject(err));
  });
};

module.exports = { getAllMeals, searchMealByName };
