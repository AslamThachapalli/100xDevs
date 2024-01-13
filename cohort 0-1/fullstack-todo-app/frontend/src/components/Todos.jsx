export function Todos({ todos }) {
    return (
        <>
            {todos.map((todo) => {
                return <div key={todo.title}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed ? "Completed" : "Mark as complete"}</button>
                </div>
            })}
        </>
    )
}