
import React,{useState} from 'react';
import './App.css';

function App() {
  
  const [state, setState] = useState( () => ({
    money: 1000,
    title: 'Awesome'
  }))

  const addValue = () => {
      setState((prev) => {
        return {
        ...prev,
        money: prev.money + 1
        }
      })
  }

  const removeValue = () => {
    setState({money: state.money - 1})
  }

  const addAsincValue = () => {
    setTimeout(() => {
      setState({money: state.money + 1})
    }, 2000)
  }

  console.log(state)

  return (
    <div className='container'>
      <label>All buttons</label>
      <span className='counter'> {state.money}</span>
      <div className='all__buttons'>
        <button onClick={addValue}  className='btn btn-primary'> Add </button>
        <button onClick={removeValue} className='btn btn-success'> Remove </button>
        <button onClick={addAsincValue} className='btn btn-danger'> Asinc </button>
      </div>
    </div>
    
  );
}

export default App;
