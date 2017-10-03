import * as actionType from '../actions/actionTypes';

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


function handleErrors(response) {
  if (!response.ok) {
    console.log( response );
    throw Error(response.statusText);
  }
  return response;
}
export function getTODO() {

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

}
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

export function updateLoading(loadingValue) {
  return {
    type: actionType.UPDATE_LOADING,
    loadingValue
  };
}