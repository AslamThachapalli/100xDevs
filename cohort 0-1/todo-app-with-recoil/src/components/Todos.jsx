import { useRecoilValue } from "recoil"
import { filteredTodosAtom, todosAtom } from "../store/atom/todo"

export default function Todos(){
    const todos = useRecoilValue(filteredTodosAtom);

    return (
        <>
            {todos.map((todo) => {
                return (
                    <div>
                        <h1>{todo.title}</h1> 
                        <h2>{todo.description}</h2>
                    </div>
                )
            })}
        </>
    )
}