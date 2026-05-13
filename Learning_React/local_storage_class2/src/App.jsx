import React, { useState } from 'react'

const App = () => {

  const [userName, setuserName] = useState('')
  const [userRole, setuserRole] = useState('')
  const [imageURL, setimageURL] = useState('')
  const [userDesc, setuserDesc] = useState('')

  // Get data from localStorage properly
  const localData = JSON.parse(localStorage.getItem('all-users')) || []

  const [allUsers, setallUsers] = useState(localData)

  const submitHander = (e) => {
    e.preventDefault()

    const newUser = {
      userName,
      userRole,
      imageURL,
      userDesc
    }

    const updatedUsers = [...allUsers, newUser]

    setallUsers(updatedUsers)

    // Save updated data
    localStorage.setItem('all-users', JSON.stringify(updatedUsers))

    // Clear inputs
    setuserName('')
    setuserRole('')
    setimageURL('')
    setuserDesc('')
  }

  const deleteHandler = (idx) => {
    const copyUsers = [...allUsers]

    copyUsers.splice(idx, 1)

    setallUsers(copyUsers)

    // Update localStorage after delete
    localStorage.setItem('all-users', JSON.stringify(copyUsers))
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
          <div
            key={idx}
            className='lg:w-[23vw] md:w-[30vw] sm:w-[45vw] rounded-xl py-5 px-8 flex items-center flex-col text-center bg-white text-black'
          >

            <img
              className='h-24 w-24 rounded-full object-cover'
              src={elem.imageURL}
              alt=""
            />

            <h1 className='text-2xl mt-2 font-semibold'>
              {elem.userName}
            </h1>

            <h5 className='text-blue-500 font-semibold text-lg my-2'>
              {elem.userRole}
            </h5>

            <p className='text-sm font-medium leading-tight'>
              {elem.userDesc}
            </p>

            <button
              onClick={() => deleteHandler(idx)}
              className='px-4 py-2 rounded text-xs cursor-pointer active:scale-95 bg-red-600 text-white font-semibold mt-3'
            >
              Remove
            </button>

          </div>
        ))}

      </div>

    </div>
  )
}

export default App