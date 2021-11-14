import React from 'react';
import { useState } from 'react';
import './style.css';

export default (props) => {

  const [canSelect, setCanSelect] = useState(initialState)
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (canSelect) {
      setActive(!active);

      if(active) setCanSelect(false); else setCanSelect(true);
    }
  }

  return (
    <div className="MultipleChoice">
      {React.cloneElement(this.props.children, {
        canSelect,
        setCanSelect
      })}
    </div>
  )
}
