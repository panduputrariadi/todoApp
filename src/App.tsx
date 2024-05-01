
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodo from "./hooks/useTodo";


function App() {
  const {
    todos,
    addTodo,
    setTodoComplete,
    deleteTodo,
    deleteAllTodo,
  } = useTodo();
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
