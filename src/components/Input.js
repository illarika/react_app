import React from 'react';
import {useState} from "react";


const Input = () =>{
    const [user, setUser] = useState('')


    const [title, setTitle] =useState('')

    const addNewUser=() =>{

    }



    return(
        <>
        <input  value = {title} type="text" placeholder="input name"></input>
        <input type='number' placeholder="input age"></input>
        <input type="text" placeholder="input country"></input>
        <button onClick={addNewUser}> UserAdd</button>
        </>
    );


}
export default Input;