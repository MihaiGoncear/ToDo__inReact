import React, { Component } from 'react';
import './App.css';
import { Button } from './UIElements/Button'
import { CharacterCounter } from './TodoComponents/AppCounter'
import { RenderTodoItem } from './TodoComponents/RenderTodoItem'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      todos: []
    }
  }

  handleChangeImput = (e) => {
    const value = e.target.value
    this.setState({ input: value })
  }

  handleAddItem = () => {
    if (this.state.input === '') {
      return
    }
    const newItem = {
      id: new Date(),
      text: this.state.input,
      status: false
    }
    this.setState({
      input: '',
      todos: this.state.todos.concat(newItem)
    })
  }

  changeStatus = (item) => {

    let todosItems = this.state.todos;

    for (let index in todosItems) {

      if (todosItems[index].id === item.id) {
        todosItems[index].status = !todosItems[index].status

        this.setState({
          todos: todosItems
        })
      }
    }
  };

  removeItem = (item) => {
    
    let todosItems = this.state.todos;

    for (let index in todosItems) {

      if (todosItems[index].id === item.id) {
        todosItems.splice(index, 1)

        this.setState({
          todos: todosItems
        })
      }
    }
  }

render() {
  return (
    <div className="App">
      <h1>ToDo List Online</h1>
      <div className="full-container">
        <div id="todo-container" className="todo-container">
          <div id="add-new-input" className="add-new-input">
            <input id="input-text" type="text" placeholder="Add todo" onChange={this.handleChangeImput} value={this.state.input} />
            <Button onClick={this.handleAddItem} id="add-button">Add</Button>
          </div>
          <CharacterCounter input={this.state.input} />
          <RenderTodoItem removeItem={this.removeItem} changeStatus={this.changeStatus} todos={this.state.todos} />
        </div>
      </div>
    </div>
  );
}
}



export default App;
