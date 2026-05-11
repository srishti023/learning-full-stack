import React,{useState} from 'react'

const App = () => {
  const submitHandler = (e)=>{
    e.preventDefault();
    const newAllUsers = [...allUsers]
    newAllUsers.push(username)
    console.log(newAllUsers);
    
    setallUsers(newAllUsers)
    setUsername('')
  }

  const [username, setUsername] = useState('')
  const [allUsers, setallUsers] = useState([])
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text"
        placeholder='enter your name' 
        value={username}
        required
        onChange={(e)=>{
          setUsername(e.target.value)
        }}/>
        <button>submit</button> 
      </form>
      {
        allUsers.map(function(elem){
          return <h4>{elem}</h4>
        })
      }
    </div>
  )
}

export default App