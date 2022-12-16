import React, { useState } from 'react';
import '../styles/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid'

function TareaFormulario(props) {
 
  const [input, setInput] = useState('');

  const manejarCambio = e => { // funcion para detectar si hay algun cambio en el input del formulario
    setInput(e.target.value); // Detecta y setea en el estado del input los caracteres que se esta ingresando en el mismo
  }

  const manejarEnvio = e => {
    e.preventDefault(); // Previene que se cargue toda la aplicacion cada vez que enviamos el formulario (agregamos una tarea)
    const tareaNueva = {
      id: uuidv4(), // UUID nos permite generar automaticamente un ID unico
      texto: input,
      completada: false
    } 

    props.onSubmit(tareaNueva); // cuando se enviar el formulario, enviamos la tarea nueva como argumento de la funcion agregar tarea (definida en lista de tareas)
  } 
 
  return (
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}>  
      <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto' 
        onChange={manejarCambio} />
      <button className='tarea-boton'>        
        Agregar Tarea
      </button>
    </form>
  );     
}

export default TareaFormulario;