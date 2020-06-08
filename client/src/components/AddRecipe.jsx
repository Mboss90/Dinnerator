import React from "react";

const addMeal = ({ handleSubmit }) => {
  return (
    <div class="meal-form">
      <h2>Add New Meal</h2>
      <label>Name:
      <input type="text" id="mealName"></input>
      </label>
      <label>Ingredients:
      <input type="text" id="ingredients"></input>
      </label>
      <label>Is this dish Vegetarian?
      <input type="text" id="vegetarian"></input>
      </label>
      <label>Is this dish Vegan?
      <input type="text" id="vegan"></input>
      </label>
      <label>URL to Recipe:
      <input type="text" id="recipeURL"></input>
      </label>
      <button onClick={(e) => handleSubmit(e, document.getElementById("mealName").val(), document.getElementById("ingredients").val(), document.getElementById("vegetarian").val(), document.getElementById("vegan").val(), document.getElementById("recipeURL").val())}>Submit Meal</button>
    </div>
  )
}

export default addMeal;