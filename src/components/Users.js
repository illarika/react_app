import React from "react"
import UserAdd from "./UserAdd"
import UserList from "./UserList"
import {useState} from "react";

const Users = () =>{
    const [users, setUsers] = useState([
        {
            name: 'Bob',
            age: 32,
            country: "USA",
        },
        {
            name: 'Luka',
            age: 30,
            country: "Italy",
        },
        {
            name: 'Jon',
            age: 31,
            country: "Span",
        },
    ]);
    return(
        <div div className="container">
        <UserList users={users}/>
        <UserAdd users={users} setUsers={setUsers}/>
        </div>
)
}
export default Users;