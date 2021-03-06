import * as actionType from '../actions/actionTypes';
import firebase from '../firebase';

export function addToCart(item) {
  return {
      type: 'ADD',
      item: item
  };
}
export function removeFromCart(item) {
  return {
      type: 'REMOVE',
      item: item
  };
}
export function addMovies() {

  return function(dispatch){
    fetch("https://fend-api.herokuapp.com/movies?_limit=20")
      .then(res => res.json())
      .then((movies) => {
      // throw new Error("Unable to fetch movies..cartAction.js TEST");
        dispatch({
          type: 'ADD_MOVIES',
          movies
        })
    })
      .catch(error =>dispatch({type: "FETCH_ERROR", error}))
  };

}

/* redux-thunk TODO started */


/*
function handleErrors(response) {
  if (!response.ok) {
    console.log( response );
    throw Error(response.statusText);
  }
  return response;
}
*/
/*export function getTODO() {

  return function(dispatch, getState){
    fetch("https://fend-api.herokuapp.com/notes")
      .then(handleErrors)
      .then(res => res.json())
      .then((todos) => {
        // throw new Error("123");
        dispatch({
          type: actionType.GET_TODOS,
          todos
        });

        dispatch({
          type: actionType.UPDATE_LOADING,
          loadingValue: !getState().loading
        });


      })
      .catch(error =>dispatch({type: "FETCH_ERROR", error}))
  };

}*/
/*
export function postTODO(word) {

  return function(dispatch, getState){
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
    }).then(handleErrors)
      .then(res => res.json())
      .then((todos) => {
        dispatch({
          type: actionType.POST_TODO,
          todos
        });
        dispatch({
          type: actionType.UPDATE_LOADING,
          loadingValue: !getState().loading
        });
      })
      .catch(error =>dispatch({type: "FETCH_ERROR", error}))

  };

}
*/
/*
export function removeTODO(todoID) {

  return function(dispatch){
    fetch(`https://fend-api.herokuapp.com/notes/${todoID}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(handleErrors)
      .then(() => {
        dispatch({
          type: actionType.REMOVE_TODO,
          todoID
        })
      })
      .catch(error =>dispatch({type: "FETCH_ERROR", error}))
  };

}
*/
/*
export function updateTODO(todoID, newCompleted, newTodosMapped) {

  return function(dispatch, getState){
    fetch(`https://fend-api.herokuapp.com/notes/${todoID}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed: newCompleted
      })
    }).then(handleErrors)
      .then(() => {
      dispatch({
        type: actionType.UPDATE_TODO,
        newTodosMapped
      });
      dispatch({
        type: actionType.UPDATE_LOADING,
        loadingValue: !getState().loading
      });
    })
    .catch(error =>dispatch({type: "FETCH_ERROR", error}))

  };

}
*/


export function updateLoading(loadingValue) {
  return {
    type: actionType.UPDATE_LOADING,
    loadingValue
  };
}

// FIREBASE ACTION ALTERNATIVE

export function postTODO(word) {

  const obj = {text: word, completed: false};

  return function(dispatch, getState){
    firebase.database().ref("todos").push(obj)
      .then((addedTodo) => {
      /*       NOTE: no need for this upd block now - getTODO action IS fetching new todos AUTO !

        const todos = Object.assign({}, obj, {id: addedTodo.key});

        dispatch({
          type: actionType.POST_TODO,
          todos
        });
        dispatch({
          type: actionType.UPDATE_LOADING,
          loadingValue: !getState().loading
        });*/
      })
      .catch(error =>dispatch({type: "FETCH_ERROR", error}))
  };

}
export function removeTODO(todoID) {
  return function(dispatch, getState){

    dispatch({
      type: actionType.UPDATE_LOADING,
      loadingValue: !getState().loading
    });

    firebase.database().ref(`todos/${todoID}`)
      .remove()
      .then(() => {

      console.log("rm from dB");

/*
        NOTE: firebase helps us automatic: getTODO action is triggered

        dispatch({
          type: actionType.REMOVE_TODO,
          todoID
        });*/

      })
      .catch(error =>dispatch({type: "FETCH_ERROR", error}))
  };

}
export function updateTODO(todoID, newCompleted, newTodosMapped,text) {

  return function(dispatch, getState){

    firebase.database().ref(`todos/${todoID}`)
      .set({
        text,
        completed: newCompleted
      })
      .then(() => {

/*        dispatch({
          type: actionType.UPDATE_LOADING,
          loadingValue: !getState().loading
        });*/

      })
      .catch(error =>dispatch({type: "FETCH_ERROR", error}))
  };

}
/*export function getTODO(){
  return function(dispatch, getState){
    firebase.database().ref("todos")
      .on("value", (ss) => {

        let tmpArray = [];
        ss.forEach((child) => {
          tmpArray.push( Object.assign({}, child.val(), {id: child.key} ) );
        });
        dispatch({
          type: actionType.GET_TODOS,
          todos: tmpArray
        });

        dispatch({
          type: actionType.UPDATE_LOADING,
          loadingValue: false
        });
      })
  }
}*/


// FIREBASE PART 2 - listeners(child_added etc), sorting

export function addTodoListener(){
  return function(dispatch){

    dispatch({
      type: actionType.UPDATE_LOADING,
      loadingValue: false
    });

    firebase.database().ref("todos")

      //.orderByChild("text")

      .on("child_added", (ss) => {

        const todo = {...ss.val(), id: ss.key};
        dispatch({
          type: actionType.GET_TODOS,
          todos: todo
        });
        dispatch({
          type: actionType.UPDATE_LOADING,
          loadingValue: false
        });

      })
  }
}
export function removeTodoListener(){
  return function(dispatch){
    firebase.database().ref("todos")
      .on("child_removed", (ss) => {

        const todoID = ss.key;
        dispatch({
          type: actionType.REMOVE_TODO,
          todoID
        });
        dispatch({
          type: actionType.UPDATE_LOADING,
          loadingValue: false
        });

      })
  }
}
export function changeTodoListener(){
  return function(dispatch){
    firebase.database().ref("todos")
      .on("child_changed", (ss) => {

        const todo = {...ss.val(), id: ss.key};
        dispatch({
          type: actionType.UPDATE_TODO,
          todo
        });

        dispatch({
          type: actionType.UPDATE_LOADING,
          loadingValue: false
        });

      })
  }
}

// FIREBASE SORTING EXAMPLE

export function getEmployees(){
  return function(dispatch){
    firebase.database().ref("employees")

      // sort by oldest first
      // .orderByChild("born")

      // sort by age, and display the 10 youngest
      // .orderByChild("born")
      // .limitToLast(10)

      // show ppl 85-95
      // .orderByChild("born")
      // .startAt("1985-01-01")
      // .endAt("1995-01-01")

      // job descp: customer
      // .orderByChild("jobDescription")
      // .equalTo("Customer")

      // less then 300 in account
      // .orderByChild("amountOnBank")
      // .endAt(300)

    // hacky way to fix by lastname: start and end at b.
      .orderByChild('lastName')
      .startAt('b')
      .endAt("b\uf8ff")

      .on("value", (ss) => {

        let tmpArray = [];
        ss.forEach((child) => {
          tmpArray.push( Object.assign({}, child.val(), {id: child.key} ) );
        });

        console.log( tmpArray );

        dispatch({
          type: actionType.UPDATE_LOADING,
          loadingValue: false
        });
      })
  }
}
