import { useState } from 'react';
import './App.css';
import  {Boton}  from './componentes/boton';
import {Contador} from './componentes/Contador'
import jLogo from './imagenes/android-chrome-192x192.png';

function App() {



const [numClics, setnumClics] = useState(0)


const manejarClic = () => {
  setnumClics(numClics + 1);
}

const reiniciarContador =() => {
  setnumClics(0);
}


  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img className='j-logo' src={jLogo} alt="Logo de freecodecamp" />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>

         <Boton
         texto='Clic'
         esBotonDeClic={true}
         manejarClic={manejarClic}/>
         <Boton 
         texto='Reiniciar'
         esBotonDeClic={false}
         manejarClic={reiniciarContador} 
         />
      </div>
    </div>
  );
}

export default App;
