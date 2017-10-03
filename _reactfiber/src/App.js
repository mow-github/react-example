import React, { Component } from 'react';
import './App.css';

import P from "./P"


class App extends Component {

  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState({
      hasError: true
    });
  }

  render() {



    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      [
      <header key="header">Header</header>,
      <article key="article">Article</article>,
      <P key="p2">paragraph text</P>
  ]
  );
  }
}

export default App;
