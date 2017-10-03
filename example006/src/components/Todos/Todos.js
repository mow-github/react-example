import React, { Component } from "react";

import Todo from "../Todo/Todo";
import Header from "../Header/Header";
import Input from "../Input/Input";

class Todos extends Component{

  render(){

    const {
      todos,
      updateTodo,
      removeTodo,
      postTODO,
      checkedHeaderAndImgages
    } = this.props;
    const todosMapped  = todos.map((todo, key) => <Todo key={key} {...todo} updateTodo={updateTodo} removeTodo={removeTodo} /> );

    return (
      <div>

        { checkedHeaderAndImgages && <Header text="TODOS" /> }
        <Input inputEnter={postTODO} placeholder="add todo"/>

        <div className="row">
          { todosMapped }
        </div>

      </div>

    );
  }

}

export default Todos;

