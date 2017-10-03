import React, { Component } from 'react';
import './App.css';

import Movies from "../Movies/Movies";
import Todos from "../Todos/Todos";

import Form from "../Form/Form";

class App extends Component {

  state = {
    movies: [],
    moviesOrg: [],
    todos: [],
    movieGenres: [],
    checkedHeaderAndImgages: true,
    loginForm:{
      username: "username1",
      password: "pass1",
      errors: [],
      validForm: false
    }
  };

  createMovieGenres = (json) => {
    // store unique values - set
    // convert to an array - array.from

    let movieGenres     = [];
    let movieGenresSet  = new Set();
    json.filter((movie) => movie.genres.filter((genre) => movieGenresSet.add(genre)));
    movieGenres         = Array.from(movieGenresSet);
    return movieGenres;
  };

  fetchAsyncData = async () => {

    const response  = await fetch("https://fend-api.herokuapp.com/movies?_limit=20");
    const json      = await response.json();

    const movieGenres = this.createMovieGenres(json);

    const response_todos = await fetch("https://fend-api.herokuapp.com/notes")
    const json_todos     = await response_todos.json();

    this.setState({
      movies: json,
      moviesOrg: json,
      todos: json_todos,
      movieGenres
    });

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



  selectMovieGenre = (e) => {
    const word            = e.target.value;

    const { moviesOrg }   = this.state;
    const moviesFiltered  = moviesOrg.filter((movie) => movie.genres.indexOf(word) !== -1 || word === "");

    this.setState({
      movies: moviesFiltered
    });
  };

  toggleHeader = (e) => {
    const checkedValue = e.target.checked;
    this.setState({checkedHeaderAndImgages: checkedValue })
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



  submitLoginform = (e) => {
    e.preventDefault();

    const username  = e.target.username.value;
    const password  = e.target.password.value;
    let errors      = [];
    let validForm   = false;
    console.log( username,password );

    if( username.length === 0 ){
      errors.push("check username length")
    }

    if( password.length < 8 ){
      errors.push("check password length < 8")
    }

    validForm = errors.length === 0 ? true : false;
    
    this.setState({
      loginForm: {
        username,
        password,
        errors,
        validForm
      }
    });
console.log(validForm);
  };


  render() {

    const {
      movies,
      todos,
      movieGenres,
      checkedHeaderAndImgages,
      loginForm
    } = this.state;


    return (
      <div className="App">



          { !loginForm.validForm &&
            <Form submitLoginform={this.submitLoginform} loginForm={loginForm} checkedHeaderAndImgages={checkedHeaderAndImgages}/>
          }

          {loginForm.validForm &&
          <Movies
            movies={movies}
            checkedHeaderAndImgages={checkedHeaderAndImgages}
            filterMovies={this.filterMovies}
            movieGenres={movieGenres}
            selectMovieGenre={this.selectMovieGenre}
            toggleHeader={this.toggleHeader}
          />
          }

          {loginForm.validForm &&
          <Todos
            todos={todos}
            updateTodo={this.updateTodo}
            removeTodo={this.removeTodo}
            postTODO={this.postTODO}
            checkedHeaderAndImgages={checkedHeaderAndImgages}
          />
          }

      </div>
    );

  }
}

export default App;
