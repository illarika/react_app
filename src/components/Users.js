import React from 'react';
import UserList from './UserList';
import UserAdd from './UserAdd';
import { useState } from 'react';
import MyModal from './MyModal/MyModal';

const Users = () => {
   const [showModal, setShowModal] = useState(false);
   const [users, setUsers] = useState([
      {
         name: 'Мяу',
         age: 24,
         country: 'Italy',
      },
      {
         name: 'Мяу',
         age: 24,
         country: 'Italy',
      },
      {
         name: 'Мяу',
         age: 22,
         country: 'Spain',
      },
   ]); //чтобы можно было менять значения, изменения state 
   //приводят к изменению виртуального дома и изм html страницы
   console.log(showModal)
   return (
      <div className="container">
         <UserList users={users} />
         <button
            className="btn btn-success"
            onClick={() => setShowModal(true)}
         >
            Add User
         </button>
         
         <MyModal 
            visible={showModal} 
            onCancel={()=> setShowModal(false)}
            closeButtonShow={true}
            >
                <UserAdd users={users} setUsers={setUsers} closeModal = {() => setShowModal(false)}/>
            </MyModal>
        
        
      </div>
   )

}


export default Users;