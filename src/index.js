import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import createStore from './reducer'

import './index.css';

const store = createStore({
  todos: [
    { checked: false, description: 'Make tea' },
    { checked: false, description: 'Do the dishes' },
  ]
})

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
