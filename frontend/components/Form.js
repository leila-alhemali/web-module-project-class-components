import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input onChange={this.props.onChange} value={this.props.taskInput} type="text" id="taskInput" placeholder="add Task"/>
          <input type="submit" />
          <button type="button" onClick={this.props.onDelete}>Delete</button>
        </form>
      </div>
    )
  }
}
