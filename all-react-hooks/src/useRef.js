
import React,{useState, useEffect, useRef} from 'react';
import './App.css';



function App() {
  
//  const [renderCount, setCount] = useState(1)

const [state, setState] = useState()
const inputValue = useRef(null)
const renderCount = useRef('')
  
useEffect(() => {
    renderCount.current = state
    console.log(inputValue.current.value)
    },[state])
  
    
 
  return (
    <div className='container'>
      <button >Пользователи</button>
      <button >ToDo</button>
      <button >Посты</button>
      <input  ref={inputValue} type="text" onChange={(e)=> setState(e.target.value)} value={state}></input>
      <pre>{renderCount.current}</pre>
    </div>
    
  );
}

export default App;
