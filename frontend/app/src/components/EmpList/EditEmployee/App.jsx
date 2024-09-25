import React from 'react'
import { Context } from '../../Context/UserContext'
import InputList from '../AddEmployee/InputList'
export default function App() {
    const {show, setShow,data,setdata} = React.useContext(Context)
    console.log(data)
  return (
    <div className='container mt-4'>
    <h1 className='login-name'>Edit Employee</h1>
    <InputList data={data} setdata={setdata
    }/>
    </div>
  )
}