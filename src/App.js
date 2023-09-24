import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './images/fcc_secondary_small.png'
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0)
  };
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='freecodecamp logo' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto="Clic me!"
          esBotonDeClic={true}
          manejarClic = {manejarClic}
        />
        <Boton 
          texto="Reset me!"
          esBotonDeClic={false}
          manejarClic = {reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
