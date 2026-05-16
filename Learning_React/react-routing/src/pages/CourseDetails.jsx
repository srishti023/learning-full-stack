import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
  const params = useParams()
  return (
    <div class="text-3xl font-bold underline absolute top-15 left-1/2 -translate-x-1/2 "> {params.Courseid} Course Detail Page</div>
  )
}

export default CourseDetails