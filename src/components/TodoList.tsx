import React from 'react'
import TodoListItem from './TodoListItem'

interface ITodaList{
  todos: TodoType[];
}

const TodoList: React.FC<ITodaList>= ({todos}) => {
  return (
    <ul>
      <TodoListItem />
    </ul>
  )
}

export default TodoList