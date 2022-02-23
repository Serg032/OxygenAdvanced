import React from "react";
import './doneCard.css'

const DoneCard = (props) => {
    return(
        <div className="doneCard">
            <h3>{props.title}</h3>
            <div className="body">
                <label>{props.tags}</label>
                <br/>
                <label>{props.description}</label>
            </div>
            <button className="todoButton">To Do</button>
        </div>
    )
}

export default DoneCard