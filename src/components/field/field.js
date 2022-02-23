import React, { useEffect, useState } from "react";
import DoneCard from "../doneCard/doneCard";
import TodoCard from "./../todoCard/todoCard";
import './field.css'
const Field = () => {

    const [todos, setTodos] = useState([])
    const [dones, setDones] = useState([])

    useEffect(() => {
        
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        };

        fetch('http://localhost:8000/todo', requestOptions)
        .then((response) => response.json())
        .then((json) => setTodos(json))
    
        const requestOptions1 = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        };

        fetch('http://localhost:8000/done', requestOptions1)
        .then((response) => response.json())
        .then((json) => setDones(json))
    })

    return(
        <div className="field">
            <div className="todos">
                <div className="titleBox">
                <h3>To Do</h3>
                </div>
                <div className="todosBox">
                    {todos.map((t) => (
                        <TodoCard
                            title = {t.title}
                            tags = {t.tags}
                            description = {t.description}
                        />
                    ))}
                </div>
            </div>
            <div className="dones">
                <div className="titleBox">
                    <h3>Done</h3>
                </div>
                <div className="donesBox">
                {dones.map((d) => (
                        <DoneCard
                            title = {d.title}
                            tags = {d.tags}
                            description = {d.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Field