import initialState from './initialState';
import * as actionType from '../actions/actionTypes';

export default function movies(state = initialState.todos, action) {
  switch (action.type) {
    case actionType.GET_TODOS:
      return action.todos;
    case actionType.POST_TODO:
      return [...state,action.todos];
    case actionType.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.todoID);
    case actionType.UPDATE_TODO:
      return action.newTodosMapped;
    default:
      return state;
  }
};