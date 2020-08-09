import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './comps/App/App';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {postReducer} from './redux/reducers'
import rootSaga from './redux/saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  postReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
