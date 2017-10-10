import initialState from './initialState';
import * as actionType from '../actions/actionTypes';

export default function movies(state = initialState.todos, action) {
  switch (action.type) {
    case actionType.GET_TODOS:
      // return action.todos; // used if fetching everything at once
      return [...state, action.todos];
    case actionType.POST_TODO:
      return [...state,action.todos];
    case actionType.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.todoID);
    case actionType.UPDATE_TODO:
      let stateCopy = [{...state}];
      stateCopy.map(todo => {

        if (todo.id === action.todo.id) {
          todo.completed = !todo.completed
        }
        return todo;
      });
    // return action.newTodosMapped;
     return state;
    default:
      return state;
  }
};