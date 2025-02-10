import React from 'react'
import { useParams } from 'react-router'

const EditUser = () => {

    const { userId } = useParams()

  return (
    <div>Formulario para editar el usuario {userId}</div>
  )
}

export default EditUser