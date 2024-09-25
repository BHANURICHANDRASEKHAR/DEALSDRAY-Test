import React, { useState } from 'react'
import getToken  from './token';
export const Context=React.createContext();
export default function UserContext({children}) {
   
  const defaultdata={
    name:'Chandu',
    email:'bhanuri@gmail.com',
    number:'9885465280',
    Designation:'Hr',
    skills:['MCA'],
    img:'',
    gender:'Male'
   
  }
  const [data, setdata] = useState(defaultdata)
    const [show,setShow]=useState(false)
  return (
   <Context.Provider value={{show,setShow,data, setdata}}>
   {children}
   </Context.Provider>
  )
}
