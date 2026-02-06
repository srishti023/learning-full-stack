import { useState } from 'react'
import Card from './component/Card'

function App() {
  const users = [
    {
      id: 1,
      elem: "Srishti",
      desc: "Product designer who focuses on simplicity and usability",
    },
    {
      id: 2,
      elem: "Aarav",
      desc: "Frontend developer obsessed with clean UI & animations",
    },
    {
      id: 3,
      elem: "Neha",
      desc: "UX researcher turning insights into delightful experiences",
    },
    {
      id: 4,
      elem: "Rahul",
      desc: "Full-stack engineer building scalable web apps",
    },
    {
      id: 5,
      elem: "Ananya",
      desc: "Creative strategist blending design and storytelling",
    },
  ]

  return (
    <div className="flex flex-wrap justify-center bg-gray-100 min-h-screen">
      {users.map((user) => (
        <Card
          key={user.id}
          elem={user.elem}
          desc={user.desc}
        />
      ))}
    </div>
  )
}

export default App
