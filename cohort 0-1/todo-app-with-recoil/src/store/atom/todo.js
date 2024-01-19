import { atom, selector } from "recoil";

export const todoTitleAtom = atom({
    key: 'todoTitleAtom',
    default: ''
})

export const todoDescAtom = atom({
    key: 'todoDescAtom',
    default: ''
})

export const todosAtom = atom({
    key: 'todosAtom',
    default: [],
})

export const filterAtom = atom({
    key: 'filterAtom',
    default: ''
})

export const filteredTodosAtom = selector({
    key: 'filteredTodosAtom',
    get: ({get}) => {
        const filterText = get(filterAtom);
        const todos = get(todosAtom);

        if(filterAtom !== ''){
            return todos.filter((todo) => todo.title.includes(filterText));
        }else{
            return todos;
        }
    }
})