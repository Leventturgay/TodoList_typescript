import React,{FC} from 'react'
import TodoListItem from './TodoListItem'





const TodoList:React.FC<ITodoList>= ({todos, toggleTodo}) => {

  return (
    <ul>
      {
        todos.map((item)=> <TodoListItem key={item.id} item={item} todoL />)
      }
    </ul>
  )
}

export default TodoList