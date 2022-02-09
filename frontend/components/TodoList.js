import React from 'react'
import Todo from './Todo';

export default class TodoList extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <div>
         <ul>
           {
             this.props.tasks.map(task => (
               <Todo key={task.id} task={task} onClick={() => this.props.onClick(task.id)}/>
              ))
           }
         </ul>
        </div>
      </div>
    )
  }
}
