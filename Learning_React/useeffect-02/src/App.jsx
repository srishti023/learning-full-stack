import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

  const [num, setnum] = useState(0)
  const [username, setusername] = useState('')
  const getData = async ()=>{
    const response = await axios.get('https://randomuser.me/api/')
    setusername((response.data.results[0].name.first) +""+(response.data.results[0].name.last))
  }

  useEffect(()=>{
    getData()
  },[num])
  return (
    <div>
      {username}

      <h1>{num}</h1>
      <button onClick={()=>{
        setnum(num+1)
      }}>Click here</button>
    </div>
  )
}

export default App