import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './comps/App/App';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {RootReducer} from './redux/reducers'

const store = createStore(
  RootReducer
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
