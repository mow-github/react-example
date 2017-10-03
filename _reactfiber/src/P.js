import { Component } from "react";
import ReactDOM from "react-dom";

class P extends Component{

  render(){
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById("root2"),
    );
  }

}

export default P;

