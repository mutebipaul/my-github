// import logo from './logo.svg';
// import './App.css';
import 'bulma/css/bulma.min.css';
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
      <div class="container">
        <h1 class="title has-text-centered">Counting App</h1>
        <p class="subtitle has-text-centered"> count:{count}</p>
      </div>

      
      <div class="buttons is-centered">
        <button class="button is-primary is-rounded" ></button>
      </div>
      
      <div class="buttons is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        < button class="button is-primary" onClick = {handleAdd}>AddNumber</button>
        <button  class="button is-success" onClick = {handleSubtract} >Subtract Number</button>
      </div>
      
    </div>
  );
}

export default App;
