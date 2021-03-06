import { combineReducers } from 'redux';
import cart from './cartReducer';
import products from './productsReducer';
import movies from './movies';
import errors from './errors';
import todos from './todosReducer';
import loading from './loadingReducer';
import users from './usersReducer';

const rootReducer = combineReducers({
    cart,
    products,
    movies,
    errors,
    todos,
    loading,
    users,
});

export default rootReducer;