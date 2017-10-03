import React, { Component } from "react";

class Select extends Component{

  render(){

    const {
      movieGenres,
      selectMovieGenre
    } = this.props;

    const movieGenresMapped = movieGenres.map((genre) => <option key={genre} value={genre}>{genre}</option> );


    return (
      <select className="form-control" onChange={selectMovieGenre}>
        <option value="">-- Choose a movie genre --</option>
        {movieGenresMapped}
      </select>
    );
  }

}

export default Select;

