import React from 'react';

export function TodoItem(props) {

  return (
    <li className={props.item.status ? "todo-list-item complete" : "todo-list-item"}>
      <input type="checkbox" checked={props.item.status} onChange={() => props.changeStatus(props.item)} />
      <span className="todo-result">{props.item.text}</span>
      <button className="remove" onClick={() => props.removeItem(props.item)}>x</button>
    </li>
  )
}