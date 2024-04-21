export default function TodoForm(){
    return(
        <form action="" className="flex mb-2">
            <input 
                type="text" 
                placeholder="apa yang seharusnya dilakukan?"
                className="rounded-s-md  grow border border-gray-200 p-2"
            />
            <button type="submit" className="w-16 rounded-e-md bg-slate-900 text-white">
                simpan
            </button>
        </form>
    )
}