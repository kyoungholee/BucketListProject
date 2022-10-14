import React from 'react'
import '../App.css'
import { useState, useEffect, useRef} from 'react'
//import styled from "styled-components";

export default function TodoBoard({addTodo}) {

    const [input, setInput] = useState("");
    const inputRef = useRef();

    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();
    }, []);

    const handleSubmt = (e) => {
        e.preventDefault();
        addTodo(input);
        setInput("");
        inputRef.current.focus();
    }

    return (
    //css 다 넣어야함 !! 
    <form  className='todo-form' onSubmit={handleSubmt}>
        <input   ref={inputRef}
        value={input}
     
        onChange={(e) => setInput(e.target.value)} 
        className='todo-input' 
        placeholder='Add a todo' 
        />
        <button className='todo-addButton' type='submit' >추가하기</button>
    </form>
    );
}
