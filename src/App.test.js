import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './reducer'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore({ todos: [] })
  ReactDOM.render(<App store={store} />, div);
});
