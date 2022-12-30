import React from "react";
import './index.css';

function Todo(props) {

    return(
        <div className='mytodo'>
            <input type="checkbox" name={props.item.todo} id={props.item.id} checked={props.item.completed}/>
            <p>{props.item.todo}</p>
        </div>
    )
}
export default Todo