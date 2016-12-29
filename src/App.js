import React from 'react';
import { Provider } from 'react-redux'

import TodoInput from './TodoInput'
import TodoList from './TodoList'

import './App.css';

export default ({store}) =>
  <Provider store={store}>
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  </Provider>
