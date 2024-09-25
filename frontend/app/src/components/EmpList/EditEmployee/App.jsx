import React, { useEffect } from 'react';
import { Context } from '../../Context/UserContext';
import InputList from '../AddEmployee/InputList';
import { useParams } from 'react-router-dom';

export default function App() {
    const { show, setShow, data, setdata, userdata, edit,setEdit} = React.useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        if (id && userdata[id]) {
            setdata(userdata[id]);
        }
    }, [id, userdata, setdata]); 
    useEffect(()=>{
     setEdit(true);
     return ()=>{
       setEdit(false);
     }
    },[]) 
    return (
        <div className='container mt-4'>
            <h1 className='login-name'>Edit Employee</h1>
            <InputList data={data} setdata={setdata} />
        </div>
    );
}
