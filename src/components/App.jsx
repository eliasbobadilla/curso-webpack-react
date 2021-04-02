import React from 'react'


//Esto es un comentario
const App = () => {

    const test = (value) => {
        // Devuelve un status de prueba
        return `status2: ${value} ${process.env.API}`
    }


    return (<>
        <h1>Hello React!!!</h1>
        <span>{test('Elías')}</span>
    </>)
}

export default App