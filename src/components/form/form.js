import React, { useState } from "react";
import './form.css'
import axios from 'axios'

const Form = () => {
    const [title, setTitle] = useState("")
    const [tags, setTags] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit')

        const requestOptions = {
            method: "POST",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify({
                "title": title,
                "tags": tags,
                "description": description
            })
        }
        fetch('http://localhost:8000/todo', requestOptions)
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => {
            console.log('ERROR', error)
        })
        setTitle("")
       setTags("")
       setDescription("")

    }
    return(
        <div className="formContainer">
            <form 
                className="form"
                onSubmit={handleSubmit}>
                <div className="title">
                    <h2>Create a To Do</h2>
                </div>
                <div className="fields">
                    <div className="field1">
                        <div className="f1">
                            <label for="titleToDo">Title:</label>
                            <br/>
                            <input 
                                onChange={(event) => setTitle(event.target.value)}
                                className='titleToDo' 
                                type='text'/>
                        </div>
                        <div className="f2">
                            <label for="tagsToDo">Tags:</label>
                            <br/>
                            <input 
                                onChange={(event) => setTags(event.target.value)}
                                className='tagsToDo' 
                                type='text'/>
                        </div>
                    </div>
                    <div className="field2">
                        <div>
                            <label for='descriptionToDo'>Description:</label>
                            <br/>
                            <input
                                onChange={(event) => setDescription(event.target.value)}
                                type='text'
                                className= 'descriptionToDo'/>
                        </div>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;