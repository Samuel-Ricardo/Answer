import React from 'react';
import './form.css';

import pedro from '../../images/pedro.jpeg'

export default (props) => {
  return (
      <div className="Form">

<p className="title"> {props.title} </p>
      <p className="description"> {props.description} </p>
      <img src={pedro}/>

        {props.children}
      </div>
    )
}
