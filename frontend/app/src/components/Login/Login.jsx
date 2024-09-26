import React, { useState, useEffect, useContext } from 'react';
import Input from './Input.jsx';
import Cookie from 'js-cookie';
import { Context } from '../Context/UserContext.jsx';
import { errorfunction } from '../../toast.js';
import login,{Signup} from './login.js'
export default function Login() {
    const { show, setShow } = useContext(Context);
    const [isSignup, setIsSignup] = useState(false); 
    const [loading, setloading] = useState(false);
    const de={
      username: '',
      password: '',
      email: '',
      confirmPassword: ''
  }
    const [data, setData] = useState(de);

    const onHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    function Submit() {
        if (!isSignup) {
            // Login functionality
            login(setloading,data,setShow);
           
        } else {
            
            Signup(setloading,data,setIsSignup,setData,de);
        }
    }

    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-sm-6">
                    <div className="svg-container h-lg-100">
                        <img src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" alt="Login/Signup" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <Container
                        data={data}
                        onHandler={onHandler}
                        Submit={Submit}
                        loading={loading}
                        isSignup={isSignup}
                        setIsSignup={setIsSignup}
                    />
                </div>
            </div>
        </div>
    );
}

const Container = ({ data, onHandler, Submit, isSignup, setIsSignup,loading }) => {
    return (
        <div className="mt-5 p-5">
            <h1 className="login-name">{isSignup ? 'Signup' : 'Login'}</h1>
            <div className="Auth-form-container">
                <div className="Auth-form-content">
                    {isSignup ? (
                        <React.Fragment>
                        <Input
                                label="Username"
                                placeholder="Enter your Username"
                                type="text"
                                handler={onHandler}
                                value={data.username} 
                                name="username"
                            />
                            <Input
                                label="Email"
                                placeholder="Enter your email"
                                type="email"
                                handler={onHandler}
                                value={data.email}
                                name="email"
                            />
                            <Input
                                label="Password"
                                placeholder="Enter your password"
                                type="password"
                                handler={onHandler}
                                value={data.password}
                                name="password"
                            />
                            <Input
                                label="Confirm Password"
                                placeholder="Re-enter your password"
                                type="password"
                                handler={onHandler}
                                value={data.confirmPassword}
                                name="confirmPassword"
                            />
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Input
                                label="Email"
                                placeholder="Enter your Email"
                                type="email"
                                handler={onHandler}
                                value={data.email}
                                name="email"
                            />
                            <Input
                                label="Password"
                                placeholder="Enter your password"
                                type="password"
                                handler={onHandler}
                                value={data.password}
                                name="password"
                            />
                        </React.Fragment>
                    )}
                    <button className="btn btn-success mt-4 w-100"  onClick={Submit} disabled={loading}>
                        <b>{loading ? 'Loading ... ' : (isSignup ? 'Signup' : 'Login')}</b>
                    </button>
                </div>
                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-primary mt-4 w-20"
                        onClick={() => setIsSignup(!isSignup)}
                    >
                        {isSignup ? 'Already a User? Login' : 'Not a User? Signup'}
                    </button>
                </div>
            </div>
        </div>
    );
};
