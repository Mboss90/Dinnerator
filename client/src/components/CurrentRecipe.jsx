import React from 'react';

const CurrentRecipe = ({ current }) => {
  console.log('Current recipe log', current);
  return (
    <div className="currentRecipe">
      <h3>Current Recipe:</h3>
      <ul>
        <li>Dish: {current.name}</li>
        <li>Is it vegetarian: {current.vegetarian}</li>
        <li>Is it vegan: {current.vegan}</li>
        <li>Protein: {current.protein}</li>
        <li>
          <a href={current.recipeURL} className="recipeURL">URL to the full recipe</a>
        </li>
      </ul>
    </div>
  );
}

export default CurrentRecipe;