import React, { useState } from 'react';
import './index.css';

function Todo(props) {
    const [check, setCheck] = useState(0);

    let newValue;
    if (check % 2 === 0){
      newValue = props.item.completed
    } else {
      newValue = !props.item.completed
    }
    return(
        <div className='mytodo'>
            <input type="checkbox" id={props.item.id} onChange={() => setCheck(check + 1)} checked={newValue}/>
            <p>{props.item.todo} </p>
            <button onClick={() => console.log(props.item.id)}>Change is the only constant</button>
        </div>
    )
}
export default Todo