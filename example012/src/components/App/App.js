import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { bindActionCreators } from 'redux';

import Todos from "../Todos/Todos";
import Input from "../Input/Input";

import "./App.css";

// import firebase from "firebase";

class App extends Component {

  componentDidMount(){
    // this.props.actions.getTODO();
    this.props.actions.addTodoListener();
    this.props.actions.removeTodoListener();
    this.props.actions.changeTodoListener();
  }

  postTODO   = (e) => {
    e.preventDefault();
    const word      = e.target.postTODO.value;

    this.props.actions.updateLoading( !this.props.loading );
    this.props.actions.postTODO(word);
  };
  removeTodo = (todoID) => {
    this.props.actions.removeTODO(todoID);
  };
  updateTodo = (e) => {
    // const todoID          = Number(e.target.id);
    // firebase key/id is a non-numeric
    // firebase .set() overwrites the old obj.. we need tbe text
    const text            = e.target.getAttribute('data-custom-text');
    const todoID          = e.target.id;
    const newTodos        = {...this.props.todos};
    let   newCompleted    = false;
    const newTodosMapped  = Object
      .keys(newTodos).map((key) => {
        if( newTodos[key].id === todoID ){
          newCompleted = newTodos[key].completed
            = !newTodos[key].completed;
        }
        return newTodos[key];
      });
    this.props.actions.updateLoading( !this.props.loading );
    this.props.actions.updateTODO(todoID, newCompleted,newTodosMapped, text);
  };

  render() {

    const errors = this.props.errors[0];
    const { loading } = this.props;

    return (
      <div className="App">
        {errors && <h2 className="container">{errors}</h2>}

        {!errors &&
        <div className="container">
          <h2 className="text-center">TODOS</h2>
          {!loading && <Input inputEnter={this.postTODO} placeholder="add todo"/> }
          <Todos todos={this.props.todos} updateTodo={this.updateTodo} removeTodo={this.removeTodo}/>
        </div>
        }

        {loading &&
          <div className="loader"></div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    errors: state.errors,
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);