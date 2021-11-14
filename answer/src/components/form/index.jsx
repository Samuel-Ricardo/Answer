import React from 'react';
import './form.css';

export default (props) => {
  return (
      <div className="Form">

<p className="title"> {props.title} </p>

        {props.children}
      </div>
    )
}
