import React, { useState, useEffect } from 'react'
import Message from './Message';
import Counter from '../components/Counter';
import useForm from '../hooks/useForm';
import { useCounter } from '../hooks/useCounter';

const SimpleFormWithCustomHook = () => {


    const { formData, username, email, password, onChangeValue, resetForm } = useForm({
        username: "John Doe",
        email: "john@doe.com",
        password: "12345"
    });

    const { counter, increment } = useCounter(0);

    useEffect(() => {
        console.log(username, email, password);
    }, [formData, counter])

  return (
    <>
      <div className="container">
        <h1>Simple Form</h1>
        <input type="text" name="username" placeholder="Nombre de usuario" className="form-control" value={username} onChange={onChangeValue}/>
        <input type="email" name="email" placeholder="Correo electrónico" className="form-control" value={email} onChange={onChangeValue}/>
        <input type="password" name="password" placeholder="Contraseña" className="form-control" value={password} onChange={onChangeValue}/>
        {/*(username == "John Doe" && <Message />) */}
        <button className="btn btn-primary" onClick={resetForm}>Reiniciar</button>

        <div>
            {counter}
        </div>
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

export default SimpleFormWithCustomHook