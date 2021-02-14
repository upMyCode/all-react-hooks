
import React,{useState} from 'react';
import './App.css';

function complexComp(num) {
  let i = 0;
  while (i < 10000) {
    return num * 3
  }
}


function App() {
  const [state, setState] = useState(0)

  const computed = complexComp(state);

  return (
    <div className="container">
      <h1>{state}</h1>
      <button  onClick={() => setState((prev) => prev - 1)}>Убрать</button>
      <button  onClick={() => setState((prev) => prev + 1)}>Добавить</button>
      
    </div>
 )   
}

export default App;
