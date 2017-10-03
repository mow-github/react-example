import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header";
import Content from "./components/Content";
import Paragraph from "./components/Paragraph";

class App extends Component {


  handleClick = () =>{
    console.log('Hej');
  };



  render() {
    return (
      <div className="App">
        <Header name="jesper" obj={headerObj} isVisible={true} />
        <Content />
        <Button onClick={this.handleClick}>
          <Paragraph/>
        </Button>

      </div>
    );
  }
}

export default App;



const headerObj = {
  greeting: "ello there",
  name: "mitt namn är"
};



class Button extends React.Component{
  //It does have to have the name 'onClick' on the actual button element
  //remember, Component !== html-element
  render(){
    return(
      <button onClick={this.props.onClick}>
        { this.props.children }
      </button>
    );
  }
}