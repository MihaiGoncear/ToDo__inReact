import React from 'react';
import { TodoItem } from './TodoItem'

export function RenderTodoItem(props) {
  return (
    <ul id="todo-list" className="todo-list">
      {props.todos.length ? (
        props.todos.map((item) => {
          return (
            <TodoItem item={item} key={item.id} changeStatus={props.changeStatus} removeItem={props.removeItem} />
          )
        })
      ) : null}
    </ul>
  )
}