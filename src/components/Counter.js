import React, {useState} from 'react';
import MyButton from './MyButton/MyButton';

const Counter= ()=> {
   const [count, setCount] = useState(0);
   const inc = ()=>{
      setCount(count + 1);
   }
   const dec = ()=>{
      setCount(count - 1);
   }

   return(
   <>
   <h1 className="text">Counter: {count}</h1>
      <hr className="hr"></hr>
      <button onClick= {inc}>+</button>
      <button onClick = {dec}>-</button> 
   </>
   )
}
  
 export default Counter;