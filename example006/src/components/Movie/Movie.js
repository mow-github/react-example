import React from "react";

function Movie(props){

    const {
      posterurl,
      title,
      imdbRating,
      checkedHeaderAndImgages
    } = props;


    return (

      <div className="card col-4">

        { checkedHeaderAndImgages &&
            <img className="card-img-top" src={ posterurl } alt={ posterurl } />
        }
          <div className="card-block">
            <h4 className="card-title">{ title }</h4>
            <p className="card-text">{ imdbRating }</p>
          </div>
      </div>

    )
}

export default Movie;

