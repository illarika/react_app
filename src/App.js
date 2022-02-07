import MyButton from "./components/MyButton/MyButton";
import { useState } from "react";
import ToggleButton from "./components/MyButton/ToggleButton";

const App= () =>{
  const [buttonText, setButtonText] = useState('Click me please!');
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <MyButton changeText={setButtonText}>{buttonText}</MyButton>
    <ToggleButton toggle={toggle} setToggle={setToggle}>{toggle ? 'One' : 'Two'}</ToggleButton>


     {/* <MyButton description = "some button">Text button for visible and enjoy</MyButton> */}
    </div>
  );
}

export default App;
