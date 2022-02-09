import React from 'react'

export default class Todo extends React.Component {
  render() {
    let {task, onClick} = this.props;
    return (
      <div className={task.completed === true ? 'completed' : ''} onClick={onClick}>
        {task.name}
      </div>
    )
  }
}
