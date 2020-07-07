import React from "react";

// Need to make sure labels of vegetarian and vegan get flagged if sort function is to be implemented.
// Need to make a bank of common food allergies

const addMeal = ({ handleSubmit }) => {
  return (
    <div className="meal-form">
      <h2>Add New Meal</h2>
      <div>
        <label>Name:
      <input type="text" id="mealName"></input>
        </label>
      </div>
      <div>
        <label>Ingredients:
      <input type="text" id="ingredients"></input>
        </label>
      </div>
      <div>
        <label>Is this dish Vegetarian?
      <select name="vegetarian" className="vegetarianSelect" form="vegetarianForm">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
      </div>
      <div>
        <label>Is this dish Vegan?
      <select name="vegan" className="veganSelect" form="veganForm">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </div>
      <div>
        <label>Common Food Allergy:
      <input type="text" id="mealName"></input>
        </label>
      </div>
      <div>
        <label>URL to Recipe:
      <input type="text" id="recipeURL"></input>
        </label>
        <button onClick={(e) => handleSubmit(e, document.getElementById("mealName").val(), document.getElementById("ingredients").val(), document.getElementById("vegetarian").val(), document.getElementById("vegan").val(), document.getElementById("recipeURL").val())}>Submit Meal</button>
      </div>
    </div>
  )
}

export default addMeal;