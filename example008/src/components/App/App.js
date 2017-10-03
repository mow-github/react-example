import React, { Component } from 'react';
import { connect } from 'react-redux'; //To connect to our store
import { addTodo, removeTodo, toggleCompleted, updateTodo, filterTodo } from '../../actions'; //Our actions to dispatch
import "./App.css";

class App extends Component {


  state = {
    flag: false
  };

  addTODO = (e, action) => {
    if(e.key !== "Enter"){ return }

    const content   = e.target.value;
    const id        = this.props.todos.length;
    const completed = document.getElementById("addTODOchkbox").checked;

    this.props.addTodo({
      content,
      completed,
      id
    })
  };

  removeTodo = (id) => {
    this.props.removeTodo({ id })
  };

  toggleCompleted = (id) => {
    this.props.toggleCompleted({ id })
  };

  updateTODO = (e, id, action) => {
    if(e.key !== "Enter"){ return }

    const content = e.target.value;

    this.props.updateTodo({
      content,
      id
    })

  };

  filterTodo = (e) => {
    const flag = e.target.checked;

    this.setState({
      flag
    })
  };


  render() {
    //Both state and our functions are stored in props, redux state is synced to props

    const todosMapped = this.props.todos.map((item,key) => {

      if(item.completed === this.state.flag ){
        return (
          <div className="row"  key={key}>
            <div className="col-3">{item.content} <span className="alert alert-success">{item.completed ? "true" : "false"}</span> </div>
            <div className="col-3"><input className="form-control" type="text" defaultValue={item.content} onKeyPress={(e) => this.updateTODO(e, item.id, "update")} /></div>
            <div className="col-3"><button className="btn btn-warning" onClick={() => this.toggleCompleted(item.id) }>Toggle Completed</button></div>
            <div className="col-3"><button className="btn btn-danger" onClick={() => this.removeTodo(item.id) }>Remove</button></div>
          </div>)
      }
      return null;

    });

    return (
      <div className="container">

        <div className="row">
          <input className="form-control col-4" type="text" onKeyPress={(e) => this.addTODO(e,"add") } />
          <input className="form-control col-4" type="checkbox" id="addTODOchkbox" />
          <input className="form-control col-4" type="checkbox" onClick={this.filterTodo} />
        </div>
        {todosMapped}


      </div>
    );
  }
}

/**
 * `mapDispatchToProps` is in charge of converting `store.dispatch` into
 * more easily handled functions. Our 'Provider' component supplies us with
 * the store via `this.props.store`. This is so we can write 'this.props.addTodo'
 * instead of `this.props.store.dispatch({ type: 'ADD_TODO', payload: todo })` which
 * is what we are actually saying 
 * @param {Function} dispatch 
 */
function mapDispatchToProps(dispatch){
  return{
    addTodo: todo => dispatch(addTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo)),
    toggleCompleted: todo => dispatch(toggleCompleted(todo)),
    updateTodo: todo => dispatch(updateTodo(todo)),
    filterTodo: todo => dispatch(filterTodo(todo)),
  }
}

/**
 * `mapStateToProps` is a helper function to map our redux state to `props` and
 * to only expose the state we need. Right now we only have one object in our state: `todos`
 * We are saying: take the current state which is: `this.props.store.getState()`
 * and put it in this component props: `this.props.todos`. If we have multiple pieces of our state
 * we can choose here which parts of the state should be exposed to this component
 * @param {Object} state 
 */
function mapStateToProps(state){
  return {
    todos: state
  }
}
/**
 * We then use `connect` and pass along our two helper functions: 
 * `mapStateToProps` and `mapDispatchToProps` to init the connection to the store.
 * Our "third" argument is the component to connect. So notice the double ()()
 * This is a Higher Order Component at work. It takes default values and a Component
 * as parameter and then it returns a new enhanced Component when we import the Component
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);
