import React, {useState} from 'react';
import button from './MyButton.css'
import Counter from '../Counter';


const MyButton = ({children, changeText})=> {


  return <button  className= {"button"} onClick={() => changeText('Thanks you!')}>{children}</button>



  //   console.log(props);
  //   const [state, setState] = useState('Text');
    
  // return <button onClick={() => setState('New text')}>{state}</button>;
};

export default MyButton;
