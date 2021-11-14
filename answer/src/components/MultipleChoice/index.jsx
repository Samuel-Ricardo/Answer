import React from 'react';
import { useState } from 'react';
import './style.css';

export default (props) => {

  const [canSelect, setCanSelect] = useState(true)
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (canSelect) {
      setActive(!active);

      if(active) setCanSelect(false); else setCanSelect(true);
    }
  }

  let children = new Array();

  for (let index = 0; index < props.children.length; index++){

    children.push(
      React.cloneElement(props.children[index], {
        canSelect: canSelect,
        setCanSelect: setCanSelect,
        choice: props.choice
      }))
  }

  return (
    <div className="MultipleChoice">
      {children}
    </div>
  )
}
