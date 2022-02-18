import React from 'react';
import {useState} from "react";

<<<<<<< HEAD
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

=======
const UserAdd = () => {
    const [user, setUser] = useState({});
    const onChange = (e) => {
        const field = e.target.id;
        setUser( {...user,[field]: e.target.value})
    };
    console.log(user);
   
    const values = {
        name: 'text',
        age: 'number',
        country: 'text',
    };

    return (
        <>
            {Object.keys(values).map((value, index) =>
                <input
                    id={value}
                    key={index}
                    type={values[value]}
                    placeholder={`Input user ${value}`}
                    onChange={onChange}
                />
                )}
            <button>Add new User</button>
            
      
        </>
    );
};
>>>>>>> 80f3774f37c5cacff4a579fa93f48c07da815af5

export default UserAdd;
