import React, { Component } from 'react';
import './App.css';

import Movies from "../Movies/Movies";
import Todos from "../Todos/Todos";
import Input from "../Input/Input";

class App extends Component {

  state = {
    movies: [],
    moviesOrg: [],
    todos: [],
  };

  fetchAsyncData = async () => {

    const response  = await fetch("https://fend-api.herokuapp.com/movies?_limit=20");
    const json      = await response.json();

    const response_todos = await fetch("https://fend-api.herokuapp.com/notes");
    const json_todos     = await response_todos.json();
    this.setState({
        movies: json,
        moviesOrg: json,
        todos: json_todos
    })

  };

  componentDidMount(){
    this.fetchAsyncData();
  }

  filterMovies = (e) => {
    if( e.key !== "Enter" ){ return; }

    const word      = e.target.value;
    const { moviesOrg }   = this.state;
    const moviesFiltered  = moviesOrg.filter((movie) =>
      movie.title.toLowerCase().includes(word)
    );

    this.setState({
      movies: moviesFiltered
    });
  };

  postTODO = (e) => {
    if( e.key !== "Enter" ){ return; }

    const word      = e.target.value;

    fetch("https://fend-api.herokuapp.com/notes", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text : word,
        completed: true
      })
    }).then(res => res.json())
      .then(addedTodo => {
        const newTodoList = [...this.state.todos, addedTodo];
        this.setState({ todos: newTodoList });
      });


  };

  updateTodo = (e) => {
    const todoID          = Number(e.target.id);
    const newTodos        = {...this.state.todos};
    let   newCompleted    = false;
    const newTodosMapped  = Object
                              .keys(newTodos).map((key) => {
                                if( newTodos[key].id === todoID ){
                                  newCompleted = newTodos[key].completed
                                    = !newTodos[key].completed;
                                }
                                return newTodos[key];
                              });

    this.setState({
      todos: newTodosMapped
    });

    fetch(`https://fend-api.herokuapp.com/notes/${todoID}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed: newCompleted
      })
    });


  };

  removeTodo = (todoID) => {
    const todos = this.state.todos;

    fetch(`https://fend-api.herokuapp.com/notes/${todoID}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(() => {
      const newTodosFiltered = todos.filter(todo => todo.id !== todoID);
      this.setState({ todos: newTodosFiltered });
    });

  };




  render() {

    const {
      movies,
      todos
    } = this.state;

    return (
      <div className="App">

        <div>
          <h2>TODOS</h2>
          <Input inputEnter={this.postTODO} placeholder="add todo"/>
          <Todos todos={todos} updateTodo={this.updateTodo} removeTodo={this.removeTodo}/>
        </div>

        <div>
          <h2>MOVIES</h2>
          <Input inputEnter={this.filterMovies} placeholder="filter movies"/>
          <Movies movies={movies} />
        </div>

      </div>
    );

  }
}

export default App;
