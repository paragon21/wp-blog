import React, {
  useEffect
} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './comps/App/App';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {RootReducer} from './redux/reducers'
import rootSaga from './redux/saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  RootReducer,
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
