import React from 'react'
import { useState } from 'react'

export default function TodoBoard({addTodo}) {

    const [input, setInput] = useState("");
    
    const handleSubmt = (e) => {
        e.preventDefault();
        addTodo(input);
        setInput("");
    }

    return (
    //css 다 넣어야함 !! 
    <form onSubmit={handleSubmt}>
        <input 
        value={input}
        onChange={(e) => setInput(e.target.value)} 
        className='todo-input' 
        placeholder='Add a todo' 
        />
        <button type='submit' >추가하기</button>
    </form>
    );
}
