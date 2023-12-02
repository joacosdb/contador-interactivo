import React from 'react'
import '../estilos/contador.css'

export const Contador = ({ numClics }) => {
  return (
    <div className='contador'>
      {numClics}
    </div>
  )
}
