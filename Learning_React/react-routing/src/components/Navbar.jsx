import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex justify-between px-8 py-4 text-2xl bg-pink-800 text-teal-400 font-semibold cursor-pointer mb-10'>
        <h1>Navbar</h1>
        <input type="text" />
        <div className='flex gap-8'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/courses'>Courses</Link>
        </div>
      </div>
  )
}

export default Navbar