import React, { useEffect, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

const Counter = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
      console.log(counter);
    }, [counter])

    const handleIncrement = () => {
        setCounter(prev => prev + 1);
        setCounter(prev => prev + 1);
    }

  return (
    <>
      <div>{counter}</div>
      <button onClick={handleIncrement}>+</button>
    </>
  )
}

export default Counter