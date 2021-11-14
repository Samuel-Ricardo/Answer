import React, { useState } from 'react';
import './style.css';

export default ({ canSelect, setCanSelect, choice, text, image }) => {

  const [active, setActive] = useState(false);

  const handleClick = () => {

    if (active) {
      setCanSelect(true);
      setActive(false);
    } else {
      if (canSelect) {
        setCanSelect(false);
        setActive(true);

        choice(text)
      }
    }

    console.log("can select:" + canSelect);
    console.log("active:" + active);
  }


  return (
    <div
      className={`Choice ${active ? 'selected' : 'unselected'}`}
      onClick={() => handleClick()}
    >
      <p>
        {text}
      </p>

      {image != undefined ? <img src={image}/> : <p/>}
    </div>
  )
}
