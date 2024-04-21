import { useState } from "react";
import TodoItem from "./components/TodoItem"
import { dummyData } from "./utils/todos"
import TodoForm from "./components/TodoForm";

function App() {

  //5. bisnis logic
  const [todos, setTodos] = useState(dummyData)

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
          id: prevTodos.length+1,
          title,
          complete: false
        },
        ...prevTodos
      ])
    )
  }

  return (
    <main className="py-10 space-y-5">
      <h1 className="font-bold text-3xl text-center">Your Todo Apps</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <TodoForm 
          onSubmit={addTodo}
        />
        <div className="space-y-2">
          {/* memanggil dummy data yang telah di buat */}
          {todos.map(todo => (
            <TodoItem 
              key={todo.id}
              todo={todo}
              onCompleteChange={setTodoComplete}
              />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
