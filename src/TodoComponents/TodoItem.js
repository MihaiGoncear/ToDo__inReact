import React from 'react';

export function TodoItem(props) {

  return (
    <li className={props.item.status ? "todo-list-item complete" : "todo-list-item"}>
      <input type="checkbox" onChange={() => props.changeStatus(props.item)} />
      <span className="todo-result">{props.item.text}</span>
      <button className="remove" onClick={() => props.removeItem(props.item)}>x</button>
    </li>
  )
}

// export class TodoItem extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       status: false
//     }
//   }

//   changeStatus = () => {
//     this.setState({ status: !this.state.status })
//   }

//   render() {
//     return (
//       <li className={this.state.status ? 'todo-list-item complete' : 'todo-list-item'}>
//         <input type="checkbox" onClick={this.changeStatus} />
//         <span className="todo-result">{this.props.item.text}</span>
//         <button className="remove">x</button>
//       </li>
//     );
//   }
// }