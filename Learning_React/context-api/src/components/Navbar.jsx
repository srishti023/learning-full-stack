import React,{useState} from 'react'

const Navbar = (props) => {

  const [newTheme, setnewTheme] = useState('')
  return (
    <div>
      <h1>Theme is {props.theme}</h1>
      <form onSubmit={(e)=>{
        e.preventDefault()

        props.changeTheme(newTheme)
        setnewTheme('')
      }}>
        <input value={newTheme}
        onChange={(e)=>
          setnewTheme(e.target.value)
        }type="text" />
        <button> submit </button>
      </form>
    </div>
  )
}

export default Navbar