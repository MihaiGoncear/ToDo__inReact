import React from 'react';



export class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: false
    }
  }

  changeStatus = () => {
    return (!this.state.status);
  }

  render() {
    return (
      <li className={this.state.status ? 'todo-list-item complete' : 'todo-list-item'} data-todoid={props.item.id}>
        <input type="checkbox" data-action="checked" onClick={this.changeStatus} />
        <span className="todo-result">{props.item.text}</span>
        <button className="remove" data-action="remove">x</button>
      </li>
    );
  }
}