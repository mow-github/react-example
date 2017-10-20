import React, { Component } from "react";

class SearchBar extends Component{

  render(){
    return (
      <div className="col-4">
        <input type="search" className="form-control" placeholder="search"/>
      </div>
    );
  }

}

export default SearchBar;

