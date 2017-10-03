import initialState from './initialState';
import * as actionType from '../actions/actionTypes';


export default function error(state = initialState.errors, action) {
  switch (action.type) {
    case actionType.FETCH_ERROR:

      console.log(actionType.FETCH_ERROR);
      console.log(action);

      return [...state, "Unable to handle one of your Async request at the moment"];
    default:
      return state;
  }
};