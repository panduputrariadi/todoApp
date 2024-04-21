import { useState } from "react"

//membuat props on submit
interface AddTodoFormProps {
    onSubmit: (title:string) => void;
}

export default function TodoForm({onSubmit}: AddTodoFormProps){
    //controlled input
    const [input, setInput] = useState("");

    //function handle submit
    function handelSubmitbutton(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if (!input.trim()) return;

        onSubmit(input);
        setInput("");
    }
    return(
        <form action="" className="flex mb-2" onSubmit={handelSubmitbutton}>
            <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)} 
                placeholder="apa yang seharusnya dilakukan?"
                className="rounded-s-md  grow border border-gray-200 p-2"
            />
            <button type="submit" className="w-16 rounded-e-md bg-slate-900 text-white">
                simpan
            </button>
        </form>
    )
}