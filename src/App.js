import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./App.css"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getmovies = async () => { //데이터 가져오기까지 시간이 좀 걸릴거다!
    const {
      data: {
        data: {
          movies
        }
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");

    this.setState({ movies, isLoading: false });
  };

  componentDidMount() { //component 처음 render될 때
    this.getmovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">{
        isLoading
          ? <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>

          : (
            <div className="movies">
              {
                movies.map(movie => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres} />
                ))
              }
            </div>
          )
      }</section>
    )
  }
}

export default App;