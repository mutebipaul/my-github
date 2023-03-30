// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";

function App() {
  const[count ,setCount]= useState(0);

  const handleClick = () =>{
    setCount(count + 1);
  }
  return (
    <div>
      <div>count:{count}</div>
      <div>
        <button onClick = {handleClick}>Count-Me</button>
      </div>
    </div>
  );
}

export default App;
