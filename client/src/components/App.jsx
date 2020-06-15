import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// Component Imports
// import Header from './Header.jsx';
import AddRecipe from './AddRecipe.jsx';
import Header from './Header.jsx';
import CurrentRecipe from './CurrentRecipe.jsx';
import Sort from './Sort.jsx';

class App extends React.Component {
  constructor(props) {
    console.log('Constructor did run');
    super(props);
    this.state = {
      meals: [{ _id: "5edfcf121ceb934d303a49ac", name: "Pan-Seared Filet Mignon", vegetarian: "no", vegan: "no", protein: "beef/steak", recipeURL: "https://kitchenswagger.com/pan-seared-filet-mignon-herb-butter-recipe/" }]
    };

    this.getAllMeals = this.getAllMeals.bind(this);
    this.getMealById = this.getMealById.bind(this);
  }

  componentDidMount() {
    console.log('Component did mount log:', this.state.meals);
    this.getAllMeals();
  }

  getAllMeals() {
    axios.get('/dinnerator')
      .then((response) => {
        console.log(response);
        this.setState({ meals: response.data });
      })
      .catch((err) => {
        console.log('Error fetching meals: ', err);
      });
  }

  getMealById(id) {
    axios.get(`/${id}/dinnerator`)
      .then((response) => {
        console.log(response);
        this.setState({ meals: response.data });
      })
      .catch((err) => {
        console.log('Error fetching meals: ', err);
      });
  }

  // addNewMeal() {
  //   axios.post('/dinnerator')
  // }

  buttonClick() {
    console.log('Clicked');
    console.log(arguments);
  }

  render() {
    console.log('Render did run and state:', Math.floor(Math.random() * this.state.meals.length));
    return (
      <div id="reactBody">
        <img className="headerImage" src="electric-generator.png" alt="" />
        <Header />
        <CurrentRecipe current={this.state.meals[Math.floor(Math.random() * this.state.meals.length)]} />
        <AddRecipe />
        <Sort />
        <div className='imageCredit'>Icons made by <a href="https://www.flaticon.com/authors/freepik"
          title="Freepik">Freepik</a>
      from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    )
  }
}

export default App;