import React from 'react'

const App = () => {
  const formHandling =(e)=>{
    e.preventDefault();
    console.log("Submitted");
  }
  return (
    <div>
      <form onSubmit={formHandling}>
        <input type="text" placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App