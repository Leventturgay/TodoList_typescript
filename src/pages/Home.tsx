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
  useEffect(()=>{
    getTodos()
  }, [])

  return (
    <div className='main'>
      <InputForm  />
      <TodoList todos={todos} />
    </div>
  )
}

export default Home