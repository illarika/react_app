import React from 'react';
import {useState} from "react";

const UserAdd = ({users, setUsers}) => {

    const onChange = (e) => {
        const field = e.target.id;
        setValues( {...values,[field]: e.target.value});
       
        
    };
    const [values, setValues ] = useState({
        name: '',
        age: '',
        country: '',
    });
  
    console.log(users);
    
    const addUser =() =>{
        setUsers([...users, values])
        setValues({
        name: '',
        age: '',
        country: '',

        })
    }

   

    return (
        <>
            {Object.keys(values).map((value, index) =>{
            if(value === "age"){
                return <input
                id={value}
                key={index}
                value={values[value]}
                type="number"
                placeholder={`Input user ${value}`}
                onChange={onChange}
                
            />
            }
               return <input
                    id={value}
                    key={index}
                    value={values[value]}
                    // type={values[value]}
                    placeholder={`Input user ${value}`}
                    onChange={onChange}
                />
                })
        }

            <button onClick={addUser}>Add new User</button>
                
        </>
    )
}


export default UserAdd;
