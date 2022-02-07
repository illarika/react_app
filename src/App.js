import MyButton from "./components/MyButton/MyButton";
import { useState } from "react";
import toggleButton from "./components/MyButton/toggleButton";

const App= () =>{
  const [buttonText, setButtonText] = useState('Click me please!');
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <MyButton changeText={setButtonText}>{buttonText}</MyButton>
    <toggleButton toggle={toggle} setToggle={setToggle}>{toggle ? 'One' : 'Two'}</toggleButton>


     {/* <MyButton description = "some button">Text button for visible and enjoy</MyButton> */}
    </div>
  );
}

export default App;
