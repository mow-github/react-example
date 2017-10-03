import React, { Component } from "react";
class Button extends Component{

  render(){
    const { buttonClick, children } = this.props;
    return (
      <button  onClick={buttonClick}>{children}</button>
    );
  }

}

export default Button;

