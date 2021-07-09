import React from "react";
import PropTypes from "prop-types";
import reactDom from "react-dom";
import "./Movie.css";

//state 필요 X > class 컴포넌트 안해도 됨

function Movie({ year, title, summary, poster, genres }) {
    return <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie_data">
            <h3 className="movie__title"> {title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">{genres.map((genre, index) => <li key={index} className="genres__genre">{genre}</li>)}</ul>
            <p className="movie__summary">{summary.slice(0, 180)} ...</p>
        </div>
    </div >
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf.isRequired,
}

export default Movie;