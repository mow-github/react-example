import initialState from './initialState';

export default function movies(state = initialState.movies, action) {
  switch (action.type) {
    case 'ADD_MOVIES':

      return action.movies;
    default:
      return state;
  }
};