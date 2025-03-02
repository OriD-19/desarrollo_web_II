import React, { useContext, useState } from 'react'
import { TodoDispatchContext } from '../context/TodoContext';

const TodoAdd = () => {

  const [name, setName] = useState("");
  const dispatch = useContext(TodoDispatchContext);

  const handleOnChange = e => {
    const currName = e.target.value;
    setName(currName);
  }

  const handleOnSubmit = e => {
    e.preventDefault();

    if (name.trim().length < 1) {
      return;
    }

    dispatch({
      type: 'add',
      payload: {
        name: name,
      }
    });

    setName("");
  }

  return (
    <>
      <h4>Nueva tarea</h4>
      <hr />
      <form className="form" onSubmit={handleOnSubmit}>
        <label htmlFor="Nombre">Nombre</label>
        <input type="text" className='form-control' id="nombre" onChange={handleOnChange} />

        <button className="btn btn-primary" type="submit">Crear Tarea</button>
      </form>
    </>
  )
}

export default TodoAdd