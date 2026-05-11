import React from 'react'

const App = () => {

  const students = [
    {name : "srishti",
      rollNo : 1,
      Marks : 98
    },
    {name : "Krishti",
      rollNo : 2,
      Marks : 100
    },
    {name : "Tripti",
      rollNo : 3,
      Marks : 95
    },
    {name : " Mishti",
      rollNo : 4,
      Marks : 89
    },
    {name : "Drishti",
      rollNo : 5,
      Marks : 96
    },
  ]
  return (
    <>
      {students.map((student, index) => (
  <div key={index}>
    <h2>{student.name} got {student.Marks} Marks</h2>
  </div>
))}

    </>
  )
}

export default App