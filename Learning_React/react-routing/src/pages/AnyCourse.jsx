import React from 'react'
import { useParams } from 'react-router-dom'

const AnyCourse = () => {
    const params = useParams()
  return (
    <div className='text-3xl font-bold underline absolute top-15 left-1/2 -translate-x-1/2 '>{params.Courseid} Page</div>
  )
}

export default AnyCourse