import React, { useEffect, useState } from 'react'
import getToken  from './token';
export const Context=React.createContext();
import getData from '../EmpList/get';
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
  const [edit,setEdit]=useState(false);
  const [userdata,setuserdata] = useState([]);
  const [loading,setloading]=useState(true);
  useEffect(()=>{
    getData(setloading,setuserdata);
  },[]);
  
    const [show,setShow]=useState(false)
  return (
   <Context.Provider value={{show,setShow,data, setdata,userdata,setuserdata,edit,setEdit}}>
   {children}
   </Context.Provider>
  )
}
