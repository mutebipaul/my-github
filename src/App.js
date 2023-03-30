// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";

function App() {
  const[count ,setCount]= useState(0);

  const handleAdd= () =>{
    setCount(count + 1);
  }
  const handleSubtract= () =>{
    setCount(count - 1);
  }
  return (
    <div>
      <div>count:{count}</div>
      <div>
        <button class="button is-primary is-rounded" onClick = {handleAdd}>AddNumber</button>
      </div>
      <div>
        <button class="button is-primary is-rounded" onClick = {handleSubtract}>SubtractNumber</button>
      </div>
    </div>
  );
}

export default App;
