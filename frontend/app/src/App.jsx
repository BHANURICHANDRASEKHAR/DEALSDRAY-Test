import React, { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './components/Login/Login';
import { Context } from './components/Context/UserContext.jsx';
import getToken from './components/Context/token.js';
import { Toaster } from 'react-hot-toast'

import Router from './components/Navbar/Router.jsx';
function App() {
  const {show}=React.useContext(Context)
  const [user, setUser] = useState(null);
  useEffect(()=>{
    console.log('refresh user')
    const token = getToken();
    setUser(token);
  
  },[show]);
  return (
    <>
 
    {
      user === null ? <Login /> : <Router/>
    }
    <Toaster
        position="bottom-left"
        reverseOrder={true}
      />
    </>
  )
}

export default App
 