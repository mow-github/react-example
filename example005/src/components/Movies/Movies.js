import React, { Component } from "react";

import Movie from "../Movie/Movie";


class Movies extends Component{

  render(){

    const { movies }    = this.props;
    const moviesMapped  = movies.map((movie, key) => <Movie key={key} {...movie} /> );

    return (
      <div className="row">
        { moviesMapped }
      </div>
    );
  }

}

export default Movies;

