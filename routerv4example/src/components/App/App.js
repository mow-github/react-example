import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { bindActionCreators } from 'redux';

import {Link} from "react-router-dom";

import { Button } from 'reactstrap';

class App extends Component {

  componentDidMount(){

    if(this.props.history.action === "POP"){

      const {actions} = this.props;
      actions.postUser(1);
    }

  }

  render(){

    const { users } = this.props;

    return (
      <div>

        <Button color="primary" onClick={() => this.props.actions.postUser(1) }>post new user</Button>

        <Link to="/test">TestPage</Link>

        <p>{users}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users:    state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
