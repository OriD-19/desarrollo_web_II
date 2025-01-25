import React from 'react'

const name = "Fernando"
const departamento = ["San Salvador", "Morazán", "La Libertad",]
const personalData = {
    firstName: "Fernando",
    lastName: "Fuentes"
}
const HelloWorldApp = () => {
    return (
        <>
            <h1>Hola, {name}!</h1>
            <h2>Departamentos</h2>
            <ul>
                {departamento.map(m => (
                    <li>{m}</li>
                ))}
            </ul>

            <h2>Información personal</h2>
            <p>{personalData.firstName}</p>
        </>

    )
}

export default HelloWorldApp