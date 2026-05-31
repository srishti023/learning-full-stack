import React, { useEffect, useState } from 'react'

const formatDateTime = (d) => {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const w = weekdays[d.getDay()].slice(0, 3).toLowerCase()
  const m = months[d.getMonth()].slice(0, 3).toLowerCase()
  const day = d.getDate()
  let hours = d.getHours()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  if (hours === 0) hours = 12
  const minutes = String(d.getMinutes()).padStart(2, '0')
  return `${w} ${m} ${day} ${hours}:${minutes} ${ampm}`
}

const DateTime = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    // update every 60 seconds to keep minutes accurate
    const id = setInterval(() => setNow(new Date()), 60 * 1000)
    return () => clearInterval(id)
  }, [])

  return <div>{formatDateTime(now)}</div>
}

export default DateTime