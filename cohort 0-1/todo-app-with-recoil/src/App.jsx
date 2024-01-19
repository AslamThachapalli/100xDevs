import TodoForm from './components/TodoForm'
import Todos from './components/Todos'
import './App.css'
import { useRecoilValue, useSetRecoilState ,useRecoilState} from 'recoil'
import { filterAtom, todoDescAtom, todoTitleAtom, todosAtom } from './store/atom/todo'

function App() {
  const title = useRecoilValue(todoTitleAtom);
  const description = useRecoilValue(todoDescAtom);
  const setTodo = useSetRecoilState(todosAtom);
  const [filter, setFilter] = useRecoilState(filterAtom);

  return (
    <>
      <TodoForm />
      <button onClick={() => setTodo((todo) => [...todo, {title, description}])}>Create Todo</button> <br />

      <input type="text" placeholder='filter todos' value={filter} onChange={(e) => setFilter(e.target.value)}/> 
      <Todos></Todos>
    </>
  )
}

export default App
