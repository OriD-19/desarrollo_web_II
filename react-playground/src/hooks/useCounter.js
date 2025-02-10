import { useState } from "react"

export const useCounter = (initial) => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(prev => prev + 1);
        console.log(counter);
        setCounter(prev => prev + 1);
    }

    const increment = () => setCounter(prev => prev + 1);
    const decrement = () => setCounter(prev => prev - 1);
    const reset = () => setCounter(initial);

    return {counter, increment, decrement, reset};
}