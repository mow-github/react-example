import React, { Component } from "react";

import Movie from "../Movie/Movie";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Select from "../Select/Select";


class Movies extends Component{

  render(){

    const {
      movies,
      checkedHeaderAndImgages,
      filterMovies,
      movieGenres,
      selectMovieGenre,
      toggleHeader
    } = this.props;
    const moviesMapped  = movies.map((movie, key) => <Movie key={key} {...movie} checkedHeaderAndImgages={checkedHeaderAndImgages} /> );

    return (
      <div>
        { checkedHeaderAndImgages && <Header text="MOVIES" /> }

        <Input inputEnter={filterMovies} placeholder="filter movies"/>
        <Select movieGenres={movieGenres} selectMovieGenre={selectMovieGenre} />

        <label>Toggle Header and movie images</label>
        <input type="checkbox" className="form-control"
               checked={checkedHeaderAndImgages} onChange={toggleHeader} />


        <div className="row">
          { moviesMapped }
        </div>
      </div>
    );
  }

}

export default Movies;

