import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../Redux/features/counterSlice'
import { useState } from 'react'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)
  const [num, setnum] = useState(5)
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={()=>{
        dispatch(increment())
      }}>Increment</button>

      <button onClick={()=>{
        dispatch(decrement())
      }}>decrement</button>

      <input 
      type="number" 
      value={num} 
      onChange={(e)=>{
        console.log(e)
      }}/>
      <button onClick={()=>{
        dispatch(incrementByAmount(10))
      }}>Increment by Amount</button>
    </div>
  )
}

export default App