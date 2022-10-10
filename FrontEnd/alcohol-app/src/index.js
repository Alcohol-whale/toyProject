import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Reducer from './Reducer';
import promiseMiddleware from 'redux-promise';
import './assets/index.css';
import 'bootstrap/dist/css/bootstrap.css';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)

ReactDOM.render(
  <Provider

    store={createStoreWithMiddleware(Reducer,

      window.__REDUX_DEVTOOLS_EXTENSION__ &&

      window.__REDUX_DEVTOOLS_EXTENSION__()

    )}

  >

    <App />

  </Provider>,
  document.getElementById('root')
);
