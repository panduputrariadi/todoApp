import { Todo } from "../types/todo";

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}


export default function TodoSummary({
    todos,
    deleteAllCompleted,
}: TodoSummaryProps) {

    const compeletedTodo = todos.filter((todo) => todo.complete);
    
    return(
        <div className="text-center space-y-2">
            <p>
                {compeletedTodo.length}/{todos.length} todo completed
            </p>
            {compeletedTodo.length > 0 && (
                <button
                    onClick={deleteAllCompleted}
                    className="text-black"
                >
                    delete all complete
                </button>
            )}
        </div>
    )
}