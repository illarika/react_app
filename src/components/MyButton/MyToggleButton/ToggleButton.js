import React from 'react';
import button from './ToggleButton.css'

const ToggleButton = ({toggle, setToggle, children}) => {

  return (
    
  <button className={toggle ? 'buttonGreen' : 'buttonRed'}
  onClick={() => setToggle(!toggle)}>{children}</button>

  )
}

export default ToggleButton;
