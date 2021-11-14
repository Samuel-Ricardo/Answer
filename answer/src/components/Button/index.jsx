import React from 'react';
import './button.css';

export default (props) => {

  return (
    <div className="Button" onClick={props.onClick}>

      <p className="title"> {props.text} </p>

    </div>
  )
}
