import React from 'react'

const TodoInputs = ({value, AgregarTareas, onChange}) => {

    const handleSubmit = (e)=>{
        e.preventDefault()
        AgregarTareas()
    }

    return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e)=>{onChange(e.target.value)}} value={value} placeholder='Ingresa la tarea por hacer'/>
      <button type='submit'> Agregar</button>
    </form>
  )
}

export default TodoInputs
