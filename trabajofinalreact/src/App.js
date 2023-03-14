import { useState } from 'react';
import ListaToDo from './Componentes/ListaToDo';
import TodoInputs from './Componentes/TodoInputs';

function App() {
  
  const[tareas, setTareas] =useState([])

  const[value, setValue]= useState('')

  const AgregarTareas = ()=>{
    setTareas([...tareas, value])
  }

  return (
    <div>
      <h1>
        My To do List!
      </h1>

      <TodoInputs value={value} AgregarTareas={AgregarTareas} onChange={setValue}/>
      <ListaToDo tareas={tareas}/>
    </div>
  );
}

export default App;
