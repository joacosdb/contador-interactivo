import React from 'react'
import '../estilos/boton.css';

export const Boton = ({texto, esBotonDeClic, manejarClic}) => {
  return (
    <button
    className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' } 
    onClick={manejarClic}>
        {texto}
    </button>
  )
}
