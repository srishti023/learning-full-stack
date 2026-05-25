import React,{useState} from 'react'
import Navbar from './components/Navbar'
// import AllSections from './components/AllSections'
// import Footer from './components/Footer'
const App = () => {

  const [theme, setTheme] = useState('Light')
  const changeTheme=(newTheme)=>{
    setTheme(newTheme)
  }
  
  return (
    <div>
      <Navbar theme={theme} changeTheme={changeTheme}/>
    </div>
  )
}

export default App