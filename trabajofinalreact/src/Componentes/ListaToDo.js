import React from 'react'
import ToDoItem from './ToDoItem'

const ListaToDo = ({tareas}) => {


  return (
    <div>
        <h2> Mi lista de cosas por Hacer: </h2>
        <ol>
            {tareas.map((tarea, index)=><ToDoItem key={index +1} tarea={tarea}/> )}
        </ol>
    </div>
  )
}

export default ListaToDo
