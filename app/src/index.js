import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSageMiddleware from 'redux-saga';
import 'semantic-ui-css/semantic.css';
import './index.css';
import App from './App';
import reducers from './reducers';
import handlePatients from './sagas';
import setupSocket from './sockets';

const sagaMiddleware = createSageMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

const socket = setupSocket(store.dispatch);

sagaMiddleware.run(handlePatients, { socket });

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
