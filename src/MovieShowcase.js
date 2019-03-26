import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return movieData.map(function(movieObj) {
      //do stuff in here
      console.log(movieObj);
      return (
        <MovieCard
          title={movieObj.title}
          IMDBRating={movieObj.IMDBRating}
          poster={movieObj.poster}
          genres={movieObj.genres}
        />
      );
    });
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}

//title: 'GoldenEye',
//IMDBRating: 4,
//genres: ['mystery', 'thriller', 'crime'],
//poster: 'goldeneye'
