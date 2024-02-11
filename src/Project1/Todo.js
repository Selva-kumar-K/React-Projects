import { useState } from "react";

const Todo = () => {

    const [todos, setTodos] = useState([])
    const [input , setInput] = useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault()

        setTodos((todos) => (
            todos.concat({
                id: Math.floor(Math.random() * 100),
                text: input

            })
        ))
        setInput("")
    }

    return(
        <>
        <div className="todoContainer">
            <h1>Todo list Application</h1>
            <div>
                <input type="text" placeholder="Enter the task" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button onClick={handleSubmit}>Add task</button>
            </div>

            {todos.map((t) => (
                <li key={t.id}>
                    <span>{t.text}</span>
                    <button onClick={() => setTodos((todos) => todos.filter((todo) => todo.id !== t.id))}>X</button>
                </li>
            ))}
          
        </div>
        </>
    )
}

export default Todo