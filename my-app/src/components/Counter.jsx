import React, { useState } from 'react'

const Counter = () => {
    const [count, setCounter] = useState(0)
    function increment() {
        setCounter(count + 1)
    }
    function dencrement() {
        setCounter(count - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={dencrement}>Deccrement</button>
        </div>
    )
}

export default Counter
