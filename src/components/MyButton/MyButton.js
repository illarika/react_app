import React, {useState} from 'react';


const MyButton = ({children, changeText})=> {


  return <button onClick={() => changeText('Thanks you!')}>{children}</button>



  //   console.log(props);
  //   const [state, setState] = useState('Text');
    
  // return <button onClick={() => setState('New text')}>{state}</button>;
};

export default MyButton;
