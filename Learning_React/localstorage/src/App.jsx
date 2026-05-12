import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [userName, setuserName] = useState('')
  const [userRole, setuserRole] = useState('')
  const [imageURL, setimageURL] = useState('')
  const [userDesc, setuserDesc] = useState('')
  const [allUsers, setallUsers] = useState([])

  const submitHander = (e) => {
    e.preventDefault()

    const newUser = {
      userName,
      userRole,
      imageURL,
      userDesc
    }

    setallUsers([...allUsers, newUser])

    setuserName('')
    setuserRole('')
    setimageURL('')
    setuserDesc('')
  }

  const deleteHandler = (idx) => {
    const copyUsers = [...allUsers]
    copyUsers.splice(idx, 1)
    setallUsers(copyUsers)
  }

  return (
    <div className='h-screen bg-black text-white'>

      <form onSubmit={submitHander} className='p-2 py-10 flex flex-wrap'>

        <input
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]'
          type="text"
          placeholder='Enter name...'
        />

        <input
          value={imageURL}
          onChange={(e) => setimageURL(e.target.value)}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]'
          type="text"
          placeholder='Image URL...'
        />

        <input
          value={userRole}
          onChange={(e) => setuserRole(e.target.value)}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]'
          type="text"
          placeholder='Enter Role...'
        />

        <input
          value={userDesc}
          onChange={(e) => setuserDesc(e.target.value)}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]'
          type="text"
          placeholder='Enter Description...'
        />

        <button className='px-5 py-2 text-xl active:scale-95 cursor-pointer font-semibold rounded m-2 w-[97%] bg-emerald-500'>
          Create User
        </button>

      </form>

      <div className='px-4 gap-4 py-10 flex flex-wrap'>

        {allUsers.map((elem, idx) => (
          <Card
            key={idx}
            elem={elem}
            idx={idx}
            deleteHandler={deleteHandler}
          />
        ))}

      </div>

    </div>
  )
}

export default App