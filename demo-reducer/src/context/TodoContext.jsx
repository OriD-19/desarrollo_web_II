import React, { createContext, useReducer } from 'react'
import { todoReducer, initialState } from '../reducers/todoReducer'

export const TodoStateContext = createContext()
export const TodoDispatchContext = createContext()

const TodoContext = ({ children }) => {

    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export default TodoContext