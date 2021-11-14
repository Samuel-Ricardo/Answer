import React from 'react';
import './form.css';

import pera from '../../images/pera.jpeg'

export default (props) => {
  return (
      <div className="Form">

<p className="title"> {props.title} </p>
      <p className="description"> {props.description} </p>
      <img src={pera}/>

        {props.children}
      </div>
    )
}
