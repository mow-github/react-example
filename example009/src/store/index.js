import { createStore } from 'redux';
import rootReducer from  '../reducers';

export default function store() {
    return createStore(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

//The last argument is just so you can use the Redux DevTools for Chrome/Firefox, download
//the extension to your browser and see what happens. 
//Chrome:
//https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
//FireFox:
//https://addons.mozilla.org/en-US/firefox/addon/remotedev/