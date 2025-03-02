import React, { useContext } from 'react';
import { TodoDispatchContext, TodoStateContext } from './context/TodoContext';
import TodoAdd from './components/TodoAdd';

const TodoApp = () => {
    const state = useContext(TodoStateContext);
    const dispatch = useContext(TodoDispatchContext);

    const { todos } = state;
    return (
        <div className="container">
            <h1>Lista de tareas</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    {todos.map(todo => (<p key={todo.id}>{todo.id}: {todo.name}</p>))}
                </div>
                <div className="col-5">
                    <TodoAdd />
                </div>
            </div>
        </div>
    )
}

export default TodoApp