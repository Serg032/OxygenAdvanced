import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './todoCard.css'

const TodoCard = (props) => {

    const [todos, setTodos] = useState("")
    const params = useParams()
    useEffect(() => {
        
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        };

        fetch('http://localhost:8000/todo', requestOptions)
        .then((response) => response.json())
        .then((json) => setTodos(json))
    })

    const apiService = () => {

        const requestOptions1 = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "title": todos[0].title,
                "tags": todos[0].tags,
                "description": todos[0].description
            })
        }
    
        fetch('http://localhost:8000/done/', requestOptions1)
        .then((response) => response.json())
        .then((json) => console.log(json))

        
        const requestOptions2 = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        }
    
        fetch('http://localhost:8000/todo/'+params.todos[0]._id, requestOptions2)
        .then((response) => response.json())
        .then((json) => console.log(json))
    }

    return(
        <div className="todoCard">
            <h3>{props.title}</h3>
            <div className="body">
                <label>{props.tags}</label>
                <br/>
                <label>{props.description}</label>
            </div>
            <button 
                className="buttonDone"
                onClick={apiService}
                >
                    DONE
                </button>
        </div>
    )
}

export default TodoCard