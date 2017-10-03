import React, { Component } from "react";

import Todo from "../Todo/Todo";


class Todos extends Component{

  render(){

    const {
      todos,
      updateTodo,
      removeTodo
    }    = this.props;

    const todosMapped  = todos.map((todo, key) => <Todo key={key} {...todo} updateTodo={updateTodo} removeTodo={removeTodo} /> );

    return (
      <div className="row">
        { todosMapped }
      </div>
    );
  }

}

export default Todos;