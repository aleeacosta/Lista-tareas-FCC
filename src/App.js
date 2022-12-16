import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='App'>
      <div className='logo-fcc'>FreeCodeCamp(🔥)</div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />              
      </div>
    </div>
  );
}

export default App;
