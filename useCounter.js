import {useState} from 'react';

export const useCounter = (initialState = 1) => {

    const [counter, setCounter] = useState(initialState)
    
    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = (valor = 1) => {
        setCounter(valor);
    }
    
    return {
        counter,
        increment,
        decrement,
        reset
    }
}
