<<<<<<< HEAD

import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import React from 'react'



=======
import UserAdd from "./components/UserAdd";
import UserList from "./components/UserList";
import { users } from "./users";
>>>>>>> 80f3774f37c5cacff4a579fa93f48c07da815af5
const App= () =>{
  // const [buttonText, setButtonText] = useState('Click me please!');
  // const changeText = (text) =>{
  //   setButtonText("New Text")
  // }
  // const [toggle, setToggle] = useState(false);
  
<<<<<<< HEAD
  
  return (
     <div className="App">
       <BrowserRouter>
         <NavBar/>
       <AppRouter/>
       </BrowserRouter>
     
    
      {/* <UserList users= {users}/>
      <UserAdd /> */}
    
=======
  console.log(users)
  
  return (
    <div className="App">
      <UserList users= {users}/>
      <UserAdd/>
>>>>>>> 80f3774f37c5cacff4a579fa93f48c07da815af5



      {/* <MyButton changeText={setButtonText}>{buttonText}</MyButton>


    <ToggleButton toggle={toggle} setToggle={setToggle}>{toggle ? 'One' : 'Two'}</ToggleButton>

    <Counter></Counter>
     <MyClassButton></MyClassButton> */}

     

      

     {/* <MyButton description = "some button">Text button for visible and enjoy</MyButton> */}
    </div>
  );
}

export default App;
