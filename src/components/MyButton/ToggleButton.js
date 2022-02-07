import React from 'react';

const ToggleButton = ({toggle, setToggle, children}) => {
  return <button onClick={() => setTogle(!toggle)}>{children}</button>;
}

export default toggleButton;
