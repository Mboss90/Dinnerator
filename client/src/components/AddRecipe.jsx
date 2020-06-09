import React from "react";

const addMeal = ({ handleSubmit }) => {
  return (
    <div className="meal-form">
      <h2>Add New Meal</h2>
      <label>Name:
      <input type="text" id="mealName"></input>
      </label>
      <label>Ingredients:
      <input type="text" id="ingredients"></input>
      </label>
      <label>Is this dish Vegetarian?
      <select name="vegetarian" className="vegetarianSelect" form="vegetarianForm">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>
      <label>Is this dish Vegan?
      <select name="vegan" className="veganSelect" form="veganForm">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <label>URL to Recipe:
      <input type="text" id="recipeURL"></input>
      </label>
      <button onClick={(e) => handleSubmit(e, document.getElementById("mealName").val(), document.getElementById("ingredients").val(), document.getElementById("vegetarian").val(), document.getElementById("vegan").val(), document.getElementById("recipeURL").val())}>Submit Meal</button>
    </div>
  )
}

export default addMeal;