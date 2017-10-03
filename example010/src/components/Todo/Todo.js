import React from "react";

import logo from "../App/logo.svg";

function Todo(props){

  return (

    <div className="card col-4">
      <img className="card-img-top" src={logo} alt={ props.text } />
      <div className="card-block">
        <h4 className="card-title text-center">{ props.text }</h4>
        <p className="card-text">

          <label className="custom-control custom-checkbox">
            <input
                className="custom-control-input"
                type="checkbox"
                checked={ props.completed ? true : false}
                id={props.id}
                onChange={props.updateTodo} />
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Completed</span>
          </label>

          <button className="btn btn-danger" onClick={() => props.removeTodo(props.id) }>remove todo - id {props.id}</button>
        </p>
      </div>
    </div>

  )
}

export default Todo;