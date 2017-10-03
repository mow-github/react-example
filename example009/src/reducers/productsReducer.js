import initialState from './initialState';
import randomWords  from 'random-words';

export default function products(state = initialState.products, action){

  switch (action.type) {
    case 'ADD_RANDOM_PRODUCT':

      const id = state.length +1;
      const name = randomWords();
      const price = Math.floor(Math.random() * 100);

      const item = { id, name, price };

      return [...state,item];
    case 'UPDATE_PRODUCT_PRICE':
    state.map((item) => item.id === action.item.id ? item.price = action.item.price : null );
    return [...state];
    default:
      return state;
  }

};