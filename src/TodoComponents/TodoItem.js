import React from 'react';

let status = false;

function ChangeStatus() {
  status = !status
  console.log(status)
  return (status);
}

function changeClass(){
  console.log(status)
  if(status === true){
    return('todo-list-item complete')
  } else {
    return('todo-list-item')
  }
}

export function TodoItem(props) {
  
  return (
    <li className={changeClass()} data-todoid={props.item.id}>
      <input type="checkbox" data-action="checked" onClick={ChangeStatus} />
      <span className="todo-result">{props.item.text}</span>
      <button className="remove" data-action="remove">x</button>
    </li>
  )
}

