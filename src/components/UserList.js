import React from 'react'


const UserList = ({users}) =>{
    
<<<<<<< HEAD
  return (
        <table className='table'>
          <thead>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
          </thead>
          {users.map((user, index) =>
          <tbody>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.country}</td>
        </tbody>
          )}
        </table>
=======
  return users.map((user, index) =>
        <div key = {index}>
        <div>Name: {user.name}</div>
        <div>Age: {user.age}</div>
        <div>Country: {user.country}</div>
        </div>
     

>>>>>>> 80f3774f37c5cacff4a579fa93f48c07da815af5
  );
  };

export default UserList;