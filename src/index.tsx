import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'
import {Provider} from 'react-redux'
import {createStore, compose} from 'redux'
import rootReducer from './modules/index'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);