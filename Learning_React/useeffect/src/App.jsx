import React,{useEffect,useState} from 'react'

const App = () => {
  
  const [counter, setcounter] = useState(0)
  const [userName, setuserName] = useState('')
  const username = (e)=>{
    setuserName(e.target.value)
  }
  const increaseCounter = ()=>{
    setcounter(counter+1)
  }
  useEffect(() => {
   console.log("Hello ji");
  },[counter])
  

  return (
    <div>
      <input type="text" onChange={username}/>
      <p>{userName}</p>
      <h1>{counter}</h1>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  )
}

export default App