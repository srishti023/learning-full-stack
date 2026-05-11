import { useState } from "react"
import React from 'react'


const App = () => {
  const [count, setcount] = useState(0)
  const Countinc = ()=>{
  setcount(count+1)
  console.log(count);
}

const Countdec = ()=>{
  setcount(count-1)
  console.log(count);
}
  return (
    <>
    <h1>{count}</h1>
    <button onClick={Countinc}>increase</button>
    <button onClick={Countdec}>decrease</button>
    </>
  )
}

export default App