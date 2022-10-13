import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri"
import { BsFillCheckCircleFill } from "react-icons/bs"

export default function Todoitem({todo, removeTodo, completeTodo}) {

    return (
        <div className='todo-row'>
            {todo.text}
            <div>
                <RiCloseCircleLine className='icon' style={{marginRight : 5}}  onClick={() => removeTodo(todo.id)} />
                <BsFillCheckCircleFill className='icon' onClick = {() => completeTodo(todo.id)} />
            </div>
        </div>
    )
}
