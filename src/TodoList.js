import React from 'react'
import { connect } from 'react-redux'

import './TodoList.css'

const toggleTodo = id => todos =>
  todos.map((todo, index) =>
    index === id ?
      { ...todo, checked: !todo.checked }
      : todo
  )

const mapState = state => ({
  todos: state.todos
})

const mapDispatch = dispatch => ({
  toggleTodo: id =>
    dispatch('TOGGLE_TODO', toggleTodo(id), 'todos')
})

export default connect(mapState, mapDispatch)(({todos, toggleTodo}) =>
  <ul className="TodoList">
    {todos.map((todo, index) =>
      <li className={todo.checked ? 'TodoList-checked' : 'TodoList-item'}>
        <input
          className={todo.checked ? 'TodoList-checkbox-checked' : 'TodoList-checkbox'}
          key={todo.description}
          id={'todo' + index} type="checkbox"
          checked={todo.checked}
          onClick={() => toggleTodo(index)} />
        <label className={todo.checked ? 'TodoList-desc-completed' : 'TodoList-desc'} htmlFor={'todo' + index}>{todo.description}</label>
      </li>
    )}
  </ul>
)
