
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import React from 'react'



const App= () =>{
  // const [buttonText, setButtonText] = useState('Click me please!');
  // const changeText = (text) =>{
  //   setButtonText("New Text")
  // }
  // const [toggle, setToggle] = useState(false);
  
  
  return (
     <div className="App">
       <BrowserRouter>
         <NavBar/>
       <AppRouter/>
       </BrowserRouter>
     
    
      {/* <UserList users= {users}/>
      <UserAdd /> */}
    



      {/* <MyButton changeText={setButtonText}>{buttonText}</MyButton>


    <ToggleButton toggle={toggle} setToggle={setToggle}>{toggle ? 'One' : 'Two'}</ToggleButton>

    <Counter></Counter>
     <MyClassButton></MyClassButton> */}

     

      

     {/* <MyButton description = "some button">Text button for visible and enjoy</MyButton> */}
    </div>
  );
}

export default App;
