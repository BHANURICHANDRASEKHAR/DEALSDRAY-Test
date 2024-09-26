import React,{useState,useEffect,useContext} from 'react'

import Input from './Input.jsx';
import { Button } from 'bootstrap';
import Cookie from 'js-cookie';
import { Context } from '../Context/UserContext.jsx';
import { errorfunction } from '../../toast.js';
export default function Login() {
    const {show,setShow}=useContext(Context);
    const [data, setData] = useState({
        username:'',
        password:''
    })
    const onHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    function Submit(){
      console.log('Submit')
        if(data.username=='chandu' && data.password=='123'){
                const date = new Date();
                date.setDate(date.getDate() + 365); 
                Cookie.set('x-token', JSON.stringify(data), { 
                    secure: true, 
                    sameSite: 'strict', 
                    expires: date 
                });
                setShow(!show);
                
        }
        else{
           
    
            errorfunction('Invalid Credentials')
        }
    }
  return (
    <div className='container mt-2'>
    <div className='row'>
    <div className='col-sm-6 '>
    <div className='svg-container  h-lg-100'><img src='https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg'/></div>

    </div>
    <div className='col-sm-6'>
    <Container data={data} onHandler={onHandler} Submit={Submit}/>
    </div>
    </div>
    </div>
  )
}
const Container=({data,onHandler,Submit})=>{
    return(
    <div className='mt-5 p-5'>
    <h1 className='login-name'>Login</h1>
    <div className="Auth-form-container">
    <div className="Auth-form-content">
    <Input
    label="User name"
    placeholder="Enter your username"
    type="text"
    handler={onHandler}
    value={data.username}
    name="username"
  />
  <Input
    label="Password"
    placeholder="Enter your password"
    type="password"
    handler={onHandler}
    value={data.password}
    name="password"
  />
  <button className="btn btn-success mt-4 w-100 " onClick={Submit}><b>Submit</b></button>
    </div>
    </div>
    </div>
    )
}
