import React, { useState } from 'react';
import './style.css';

export default (props, {canSelect, setCanSelect}) => {

  const [active, setActive] = useState(false);

  const handleClick = () => {

    if (active) setActive(false);

    if (canSelect) {
      setActive(!active);

      if(active) setCanSelect(false); else setCanSelect(true);
    }
  }

  return (
    <div
      className={`Choice ${active ? 'selected' : 'unselected'}`}
      onClick={() => handleClick()}
    >
      <p>
        {this.props.children}
      </p>
    </div>
  )
}
