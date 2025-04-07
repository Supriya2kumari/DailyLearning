import React, { useEffect, useRef } from 'react'
import { useState } from 'react';

function InputFocus() {

    const [input, setInput] = useState("");

    let userInput = useRef(null);
    useEffect(() => {
        userInput.current.focus();
    }, [])

    const handleSubmit = (e)=>{
        e.preventDefault();
        setInput("")
        userInput.current.focus();
    }

  return (
    <>
        <form>
            <input type='text' value={input} onChange={(e) => {setInput(e.target.value)}} ref={userInput} />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </>
  )
}

export default InputFocus