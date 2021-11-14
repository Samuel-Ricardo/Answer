import React from 'react';
import './question.css';

export default (props) => {
  return (
    <div className="Question">

      <p className="title"> {props.title} </p>
      <p className="description"> {props.description} </p>

      {props.children}
    </div>
  )
}
