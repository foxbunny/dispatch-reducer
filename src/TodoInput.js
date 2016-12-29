import React, { Component } from 'react'
import { connect } from 'react-redux'

import './TodoInput.css'

const mapState = state => ({})

const mapDispatch = dispatch => ({
  addTodo: description =>
    dispatch('ADD_TODO', todos =>
      todos.concat([{ checked: false, description: description }]), 'todos'
    )
})


class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      desc: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({ desc: e.target.value })
  }

  render() {
    return (
      <div className="TodoInput">
        <input className="TodoInput-input" type="text" placeholder="Enter your task" value={this.state.desc} onChange={this.onChange} />
        <button className="TodoInput-button" onClick={() => this.props.addTodo(this.state.desc)}>Create</button>
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(TodoInput)
