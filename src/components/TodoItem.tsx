import { Trash } from "lucide-react";
import { Todo } from "../types/todo"

interface TodoItemProps {
    todo: Todo;
    // 1. cara merubah meta data pada utils
    onCompleteChange: (
        id: number,
        complete: boolean,
    ) => void;
    onDelete : (id:number) => void;
}

// 2. tambahkan pada props sebelah todo. tambahkan onCompleteChange nya
export default function TodoItem({ todo, onCompleteChange, onDelete }: TodoItemProps) {
    return (
        <div className="flex items-center gap-1">
            <div className="flex items-center gap-2 border rounded-md p-2 border-gray-400 grow">
                <label>
                    {/* 3. tambahkan checked dan onchange serta panggil onChange di main app*/}
                    <input
                        type="checkbox"
                        className="scale-125 mr-4"
                        checked={todo.complete}
                        onChange={(e) => onCompleteChange(todo.id, e.target.checked)}
                    />
                    <span className={todo.complete ? "line-through text-gray-400" : ""}>
                        {todo.title}
                    </span>
                </label>
                
            </div>
            <button className="p-2" onClick={() => onDelete(todo.id)}>
                <Trash />
            </button>
        </div>

    )
}