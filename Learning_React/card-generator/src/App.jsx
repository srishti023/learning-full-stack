import React, { useState } from 'react'

const App = () => {

  const [userName, setuserName] = useState('')
  const [userAge, setuserAge] = useState('')
  const [users, setUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const newUser = {
      name: userName,
      age: userAge
    }

    setUsers([...users, newUser])

    // clear inputs after submit
    setuserName('')
    setuserAge('')
  }

  return (
    <div>
      <form onSubmit={submitHandler}>

        <input
          type="text"
          value={userName}
          placeholder='Enter your name...'
          onChange={(e) => setuserName(e.target.value)}
        />

        <input
          type="number"
          value={userAge}
          placeholder='Enter your age'
          onChange={(e) => setuserAge(e.target.value)}
        />

        <button type="submit">Submit</button>

      </form>
      {users.map((user, index) => (
        <div
          key={index}
          style={{
            border : 'none',
            borderRadius : '10px',
            padding: '10px',
            margin: '10px',
            width: '200px',
            color : 'white',
            backgroundColor : "#333"
          }}
        >
          <h3 style={{
            color : 'white',
            backgroundColor : "#333"
          }}>Name: {user.name}</h3>
          <p style={{
            color : 'white',
            backgroundColor : "#333"
          }}>Age: {user.age}</p>
        </div>
      ))}
    </div>
  )
}

export default App