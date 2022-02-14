import UserAdd from "./components/UserAdd";
import UserList from "./components/UserList";
import { users } from "./users";
const App= () =>{
  // const [buttonText, setButtonText] = useState('Click me please!');
  // const changeText = (text) =>{
  //   setButtonText("New Text")
  // }
  // const [toggle, setToggle] = useState(false);
  
  console.log(users)
  
  return (
    <div className="App">
      <UserList users= {users}/>
      <UserAdd/>



      {/* <MyButton changeText={setButtonText}>{buttonText}</MyButton>


    <ToggleButton toggle={toggle} setToggle={setToggle}>{toggle ? 'One' : 'Two'}</ToggleButton>

    <Counter></Counter>
     <MyClassButton></MyClassButton> */}

     

      

     {/* <MyButton description = "some button">Text button for visible and enjoy</MyButton> */}
    </div>
  );
}

export default App;
