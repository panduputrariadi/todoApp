import { useState } from "react";
import { dummyData } from "./utils/todos"
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";

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

  return (
    <main className="py-10 space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Your Todo Apps</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <TodoForm 
          onSubmit={addTodo}
        />
        <TodoList 
          todos={todos} 
          onCompleteChange={setTodoComplete} 
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary 
        todos={todos}
        deleteAllCompleted={deleteAllTodo}
      />
    </main>
  )
}

export default App
