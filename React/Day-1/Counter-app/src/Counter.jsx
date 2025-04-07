import React, {useState} from 'react'
import "./counter.css"

function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrement(){
        setCount(count+1)
    }

    function handleDecrement(){
        setCount(count-1)
    }

    function handleReset(){
        setCount(0)
    }

  return (
    <>
        <h2 className='heading'>  Counter App</h2>
        <div className='main-container color'>
            <div className='display-count color'>Count: {count}</div>
            <button className="button color" onClick={handleIncrement}>Increment</button>
            <button className="button color" onClick={handleDecrement}>Decrement</button>
            <button className="button color" onClick={handleReset}>Reset</button>
        </div>
    </>
  )
}

export default Counter