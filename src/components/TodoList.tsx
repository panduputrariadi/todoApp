import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onCompleteChange: (id: number, complete: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({
  todos,
  onCompleteChange,
  onDelete,
}: TodoListProps) {
  const todoSorted = todos.sort((a, b) => {
    if (a.complete === b.complete) {
      return b.id - a.id;
    }
    return a.complete ? 1 : -1;
  });
  return (
    <>
      <div className="space-y-2">
        {/* memanggil dummy data yang telah di buat */}
        {todoSorted.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompleteChange={onCompleteChange}
            onDelete={onDelete}
          />
        ))}
      </div>
      {todos.length === 0 && <p className="text-center text-gray-400">Tidak ada catatan</p>}
    </>
  );
}
