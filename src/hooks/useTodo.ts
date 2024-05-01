import { useEffect, useState } from "react"
import { Todo } from "../types/todo"
import { dummyData } from "../utils/todos"

export default function useTodo(){
     //5. bisnis logic
  const [todos, setTodos] = useState(() => {
    const saveTodo: Todo[] = JSON.parse(localStorage.getItem("todos")|| "[]")
    return saveTodo.length > 0 ? saveTodo : dummyData
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  // 4. buatkan sebuah fungsi untuk set todo
  function setTodoComplete (id: number, complete: boolean){
    setTodos(
      (prevTodos) => prevTodos.map(todo => (
        todo.id === id ? {...todo, complete} : todo
      ))
    );
  }

  function addTodo(title:string){
    setTodos(
      (prevTodos => [
        {
          id: Date.now(),
          title,
          complete: false
        },
        ...prevTodos
      ])
    )
  }

  function deleteTodo(id:number){
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  function deleteAllTodo(){
    setTodos(prevTodo => prevTodo.filter(todo => !todo.complete))
  }

  return {
    todos,
    setTodoComplete,
    addTodo,
    deleteTodo,
    deleteAllTodo
  }

}