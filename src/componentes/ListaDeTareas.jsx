import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './tarea';
import '../styles/ListaDeTareas.css'

function ListaDeTareas() {
  
  const [tareas, setTareas] = useState([]); // El estado inicial es un array vacio para poder almacenar las tareas en un futuro, cada tarea va a ser un objeto.

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) { // verificamos si la cadena esta vacio
      tarea.texto = tarea.texto.trim(); // le quitamos los espacios incesesarios a la cadena
      const tareasActualizadas = [tarea, ...tareas]; //Actualizamos el array de tareas, le agregamos la tarea nueva delante de las que ya estan creadas
      setTareas(tareasActualizadas); // setiamos el estado de las tareas con las tareas actualizadas
    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => { // buscamos la tarea en el array de tareas basandonos en el id
      if (tarea.id === id) {
        tarea.completada = !tarea.completada  // si el valor de la tarea.completada es false lo cambia a true y viseversa
      } 
      return tarea; 
    });
    setTareas(tareasActualizadas); // Actualizamos el array de tareas
  }
  
  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) => //con Map recorremos el array tareas, por cada objeto en el array, se va a renderizar un componente Tarea.
            <Tarea 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea} />
          )
        }
      </div>
    </>
  );    
}

export default ListaDeTareas;