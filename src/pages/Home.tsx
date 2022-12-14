import axios from 'axios';
import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import TodoList from '../components/TodoList';

const url="https://6351820cdfe45bbd55c21ad8.mockapi.io/api/todos"


const Home = () => {
 const [todos, setTodos]=useState<TodoType[]>([])

 const getTodos = async () => {
try {
  const {data}= await axios.get<TodoType[]>(url)
  setTodos(data)
} catch (error) {
  console.log(error);
}
 }
const addTodo:AddFn=async (text)=> {
const newTodo={
  task:text,
  isDone:false
}
try {
  await axios.post(url, newTodo)
  getTodos()
} catch (error) {
  console.log(error)
}
}
const toggleTodo:ToogleFn=async(item)=>{
  try {
    await axios.put(`${url}/${item.id}`, {...item, isDone:!item.isDone})
  getTodos();
  
  } catch () {
    console.log(error)
  }
}

  useEffect(()=>{
    getTodos()
  }, [])

  return (
    <div className='main'>
      <InputForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  )
}

export default Home