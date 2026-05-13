import React from 'react'
import Card from './components/Card'
const App = () => {
  const cardData = {
    username : "Anubhav",
    role : "Engineer",
    email : "srishti@gmail.com",
    profile : "https://images.pexels.com/photos/31256342/pexels-photo-31256342.jpeg?cs=srgb&dl=pexels-optical-chemist-340351297-31256342.jpg&fm=jpg"
  }
  return (
    // fregments
    // <>
    //   <h1>Hello ji</h1>
    //   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure veniam debitis dolorum quas culpa laudantium necessitatibus illum impedit doloremque omnis?</p>
    // </>
    <>
    <Card cardData={cardData}/>
    </>
  )
}

export default App