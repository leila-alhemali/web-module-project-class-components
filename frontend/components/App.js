import axios from 'axios';
import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

const initialState = {
  tasks: [{  id: 1528817077286, name: 'Organize Garage', completed: false}],
  taskInput: ''
}

export default class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = initialState
  
  componentDidMount() {
    axios.get('http://localhost:9000/api/todos')
      .then(res => {
        this.setState({ ...this.state, tasks: res.data.data})
      })
  }
  
  onChange = event => {
    const { value } = event.target
    this.setState({ ...this.state, taskInput: value })
  }
  

  onSubmit = event => {
    event.preventDefault()
    const payloadToSend = { name: this.state.taskInput }
    axios.post('http://localhost:9000/api/todos', payloadToSend)
      .then(res =>
        this.setState({ ...this.state, tasks: [...this.state.tasks, res.data.data ]}))
      }

  onClick = (id) => {
    axios.patch(`http://localhost:9000/api/todos/${id}`)
    .then(res => {
      let newArr = this.state.tasks.filter(tasks => tasks.id !== id);
      this.setState({ ...this.state, tasks: [ ...newArr, res.data.data]})
    })
  }

  onDelete = () => {
    console.log(this.state.tasks)
    this.setState({ ...this.state, 
      tasks: this.state.tasks.filter(tasks => {
        return tasks.completed === false
      })})
  }
  
  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Todo-dolee-do App</h2>
        <TodoList 
            tasks={this.state.tasks}
            onClick={this.onClick}
        />
        <Form
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            taskInput={this.state.taskInput} 
            onDelete={this.onDelete}
        />
      </div>
    );
  }
}

