import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { bindActionCreators } from 'redux';

import Todos from "../Todos/Todos";
import Input from "../Input/Input";

import firebase from "../../firebase"

import "./App.css";

// import firebase from "firebase";

class App extends Component {

  state = {
    email: "",
    password: "",
    user: null
  };

  componentDidMount(){
    // this.props.actions.getTODO();
    this.props.actions.addTodoListener();
    this.props.actions.removeTodoListener();
    this.props.actions.changeTodoListener();

   // this.props.actions.getEmployees(); // sort employee data


    this.props.actions.userChanged();
/*    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        console.log(user);
        this.setState({user})
      }else{
        this.setState({user: null});
        console.log("no user");
      }
    })*/

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





  onChange = e => this.setState({ [e.target.name]: e.target.value });

  register = e => {
    e.preventDefault();

    const { email, password } = this.state;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch(error => {
        // show friendly user error msg
      })

  };

  signIn = e => {

    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(error => {
        console.log(error);
        // show friendly user error msg
      })

  };

  signOut = () => {
    firebase.auth().signOut();

  };

  render() {

    const errors = this.props.errors[0];
    const { loading } = this.props;

    return (
      <div className="App">


        <form className="col-6" onSubmit={this.register}>
          <input className="form-control" type="email" name="email" onChange={this.onChange} />
          <input className="form-control" type="password" name="password" onChange={this.onChange} />
          <input className="form-control" type="submit" value="Register" />
        </form>
        <button className="btn btn-primary" onClick={this.signOut} >Logout</button>
        <button className="btn btn-primary" onClick={this.signIn}>Sign in</button>
        {this.props.users && <h2 className="container">Logged in with: {this.props.users.uid}</h2>}



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
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);