import React, { Component } from "react";

class Input extends Component{

  render(){

    const { inputEnter, placeholder } = this.props;

    return (
      <input
        className="form-control"
        type="search"
        placeholder={ placeholder }
        onKeyPress={(e) => inputEnter(e) }
      />
    );
  }

}

export default Input;

