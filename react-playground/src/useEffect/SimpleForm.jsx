import React, { useState } from 'react'
import Message from './Message';
import Counter from '../components/Counter';

const SimpleForm = () => {

  const [formData, setFormData] = useState({
    username: "John Doe",
    email: "john@doe.com"
  });

  const { username, email } = formData;

  const onChangeValue = ({target}) => {
    const { name, value } = target;
    setFormData((prev) => ({...prev, [name]: value}));

  };

  return (
    <>
      <div className="container">
        <Counter />
        <h1>Simple Form</h1>
        <input type="text" name="username" placeholder="Nombre de usuario" className="form-control" value={username} onChange={onChangeValue}/>
        <input type="email" name="email" placeholder="Correo electrónico" className="form-control" value={email} onChange={onChangeValue}/>
        {(username == "John Doe" && <Message />)}
      </div>
    </>
  )
}

export default SimpleForm