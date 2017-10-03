import React from "react";

function Movie(props){

    return (

      <div className="card col-4">
        <img className="card-img-top" src={ props.posterurl } alt={ props.posterurl } />
          <div className="card-block">
            <h4 className="card-title">{ props.title }</h4>
            <p className="card-text">{ props.imdbRating }</p>
          </div>
      </div>

    )
}

export default Movie;

