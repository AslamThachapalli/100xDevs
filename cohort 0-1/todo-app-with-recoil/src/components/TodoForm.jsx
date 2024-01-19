import { useRecoilState } from "recoil"
import { todoDescAtom, todoTitleAtom } from "../store/atom/todo";

export default function TodoForm() {
    const [title, setTitle] = useRecoilState(todoTitleAtom);
    const [description, setDescription] = useRecoilState(todoDescAtom);

    return (
        <div>
            <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/> <br />
            <input type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
    )
}