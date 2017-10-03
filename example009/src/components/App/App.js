import React, { Component } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import LoginForm from '../LoginForm/LoginForm';
import MainContent from '../MainContent/MainContent';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container">

        <Jumbotron />
        <LoginForm />
        <MainContent />
      </div>
    );
  }
}

export default App;