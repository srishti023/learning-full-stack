import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Section1 = () => {

  const data = useContext(ThemeDataContext)
  return (
    <div>
      <h2>Section 1</h2>
      <p>{data}</p>
    </div>
  )
}

export default Section1