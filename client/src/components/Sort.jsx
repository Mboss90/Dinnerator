import React from 'react';

// Sorting buttons:
// Dietary Restrictions: Vegetarian or Vegan
// Allergies?

const Sort = () => {

  return (
    <div>
      <div>
        <label>Search by Ingredients:
      <input type="text" id="allergy"></input>
        </label>
      </div>
      <div>
        <label>Input Allergy:
      <input type="text" id="allergy"></input>
        </label>
      </div>
      <div>
        <a href="https://i1.wp.com/whiterivernow.com/wp-content/uploads/2018/12/Under-Construction-Sign.png?fit=1230%2C580&ssl=1"><button>Get a Vegetarian Meal</button></a>
      </div>
      <div>
      </div>
      <a href="https://i1.wp.com/whiterivernow.com/wp-content/uploads/2018/12/Under-Construction-Sign.png?fit=1230%2C580&ssl=1"><button>Get a Vegan Meal</button></a>
      <div>
        <label>Email Me this Recipe:
      <input type="text" id="email"></input>
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Sort;