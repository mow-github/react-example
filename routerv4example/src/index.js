import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from  './reducers';
import thunk from  'redux-thunk';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App/App';
import Test from './components/Test/Test';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


function Store() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
}

const store = Store();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/test" exact component={Test} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
