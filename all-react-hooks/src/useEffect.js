
import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  console.log('NewRender')
  const [data, setData] = useState([])
  const [type, setType] = useState('users')
  const [mouseCords, setMouseCords] = useState({
    x: 0,
    y: 0
  })
 

  const move = event => {
    setMouseCords(() => {
      return { 
        x: event.clientX,
        y: event.clientY
      }
    })
    
  }
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //     .then(response => response.json())
  //     .then(json => setData(json))
  // },[type])


  useEffect(() => {
      window.addEventListener('mousemove', move);
      return () => {
        window.addEventListener('mousemove', move);
      }
    },[])


  let dataValue = JSON.stringify(mouseCords, null, 2);
  
  return (
    <div className='container'>
      <button onClick={() => setType('users')}>Пользователи</button>
      <button onClick={() => setType('todos')}>ToDo</button>
      <button onClick={() => setType('posts')}>Посты</button>
      <pre>{dataValue}</pre>
    </div>
    
  );
}

export default App;
