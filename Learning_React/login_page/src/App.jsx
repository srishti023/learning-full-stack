import React from 'react'
import LoginPage from './LoginPage'
import AdminPanel from './AdminPanel';

const App = () => {
  let Loggedin = false;
  if(Loggedin){
    return (
    <>
      <AdminPanel />
    </>
  )
  }else{
    return (
    <>
      <LoginPage/>
    </>
  )
  }
  
}

export default App