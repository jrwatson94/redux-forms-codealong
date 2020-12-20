import React, { Component } from 'react'
import {connect} from 'react-redux'


class CreateTodo extends Component {
  state = {
    text: ""

  }
  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  submitHandler = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state)
    this.setState({
      text: ""
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <p>
            <label>add todo</label>
            <input onChange= {this.changeHandler} name="text" type="text" value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mdp = dispatch => {
  return {
    addTodo: formData => dispatch({type: 'ADD_TODO', payload: formData})
  }
}



export default connect(null,mdp)(CreateTodo);
