import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import{ actions} from './store'

function App() {
  // const [count, setCount] = useState(0)
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
 
  const increment = () =>{
    dispatch(actions.increment())
  }
 
  const decrement = () =>{
    dispatch(actions.decrement())
  }
  const addValue = () =>{
    dispatch(actions.addValue(10))
  }
  const redValue = () =>{
    dispatch(actions.redValue(10))
  }

  return (
    <div className='counter'>
     <h2>COUNTER APP</h2>
      <h3>{counter}</h3>
      <button className='btn' onClick={redValue}>Reduce 10</button>
      <button className='btn' onClick={increment}>Increment</button>
      <button className='btn' onClick={decrement}>Decrement</button>
      <button className='btn' onClick={addValue}>Add 10</button>
    </div>
  )
}

export default App
