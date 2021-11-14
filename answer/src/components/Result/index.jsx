import React from 'react';
import './result.css';

import pera from '../../images/pera.jpeg'

const title = "VÔCE ESTA NIVEL PÊRA DE MACHISMO"
const desc = "ESSE È O NIVEL MAIS PERIGOSO VOCÊ PRECISA SE DESCONTRUIR IMEDIATAMENTE"

export default (props) => {
  return (
    <div className="Result">

      <p className="title"> {title} </p>
      <p className="description"> {desc} </p>
      <img src={pera} />

      {props.children}
    </div>
  )
}
