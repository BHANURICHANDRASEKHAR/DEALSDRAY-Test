import React, { useState } from 'react'
import InputList from './InputList'

export default function App() {
  const defaultdata={
    name:'',
    email:'',
    number:'',
    Designation:'',
    skills:[],
    img:'',
   
  }
  const [data, setdata] = useState(defaultdata)
  return (
    <div className='container mt-4'>
    <h1 className='login-name'>Create Employee</h1>
    <InputList data={data} setdata={setdata
    }/>
    </div>
  )
}
