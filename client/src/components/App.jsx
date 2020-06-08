import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// Component Imports

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: []
    }
  }

  componentDidMount() {
    getAllMeals();
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

  addNewMeal() {
    axios.post('/dinnerator')
  }

  render() {
    return (
      <div id="reactBody">
        <Header />
        <div>
          <RecipeList />
        </div>
        <div>
          <AddRecipe />
        </div>
      </div>
    )
  }
}

export default App;
