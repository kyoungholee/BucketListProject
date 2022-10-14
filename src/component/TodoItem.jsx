import React from 'react'

import { RiCloseCircleLine } from "react-icons/ri"

export default function Todoitem({todo, removeTodo, completeTodo}) {

    return (
        <div className='todo-row'>
            {todo.text}
            <div>
                <RiCloseCircleLine className='icon' style={{marginRight : 5}}  onClick={() => removeTodo(todo.id)} />
                
            </div>
        </div>
    )
}
