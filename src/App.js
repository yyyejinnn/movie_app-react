import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";

/* level 1.
const foodILike = [
  {
    id:1,
    name:"Kimchi",
    rating:5,
  },
  {
    id:2,
    name:"ramen",
    rating:5,
  },
  { 
    id:3,
    name:"samgiopsal",
    rating:4.9,
  },
  { 
    id:4,
    name:"chukumi",
    rating:4.8,
  }
];



function Food({id, fav, rating}){
  return <div>
    <h1>id:{id} i like {fav} </h1>
    <h4>rating: {rating} </h4>
    </div>
}

Food.propTypes = {
  id:PropTypes.number.isRequired,
  fav:PropTypes.string.isRequired,
  rating:PropTypes.number
  
}

function renderFood(food){
  return <Food key={food.id} id={food.id} fav={food.name} rating={food.rating} />
}

function App() {
  return (
    <div className="App">
      {foodILike.map(renderFood)}
    </div>);
}*/

class App extends React.Component{
/* level 2. calss component
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({count:current.count + 1}))
  };

  minus = () => {
    this.setState(current => ({count:current.count - 1}))
  };

  render(){
    return <div>
       <h1>The number is {this.state.count}</h1>
       <button onClick={this.add}>Add</button>
       <button onClick={this.minus}>Minus</button>
      </div>
  }*/

  state = {
    isLoading: true,
    movies: []
  };

getmovies = async () => {
  const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
};

  componentDidMount(){
    this.getmovies();
  }

  render(){
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading...":"ready"}</div>
  }
}

export default App;