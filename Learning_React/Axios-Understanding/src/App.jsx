import React, {useEffect, useState} from 'react'
import axios from 'axios'
import User from './components/User'
const App = () => {

  const [allData, setallData] = useState([])
  const getData= async ()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    setallData(response.data)
    
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div >
      
      <div className='all-cards'>
        {allData.map(function(elem,idx){
        return <div key={idx}>
          <User elem = {elem}/>
        </div>
      })}
      </div>
    </div>
  )
}

export default App