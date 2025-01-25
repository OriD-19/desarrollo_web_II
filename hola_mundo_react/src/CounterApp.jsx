import React, { useState } from 'react'

const CounterApp = ({ startValue }) => {

    const [count, setCount] = useState(startValue);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <br />
            <button onClick={() => setCount(count - 1)}>Disminuir</button>
            <br />
            <button onClick={() => setCount(startValue)}>Reset</button>
        </>
    )
}

export default CounterApp