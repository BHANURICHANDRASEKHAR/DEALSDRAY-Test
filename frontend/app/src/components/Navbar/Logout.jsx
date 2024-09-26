import React from 'react';
import { Button, Popconfirm } from 'antd';
import Cookie from 'js-cookie';
import {Context} from '../Context/UserContext.jsx'  
const App = () => {
  const {setShow,show}=React.useContext(Context)
  const handleConfirm = () => {
    Cookie.remove('x-token');
    setShow(!show);
    console.log('You clicked Logout!',show);
  };

  

  return (
    <div className='button mb-2'>
      <Popconfirm
        title="Are you sure to Logout?"
        onConfirm={handleConfirm}
        okText="Yes"
        cancelText="No"
        className="custom-popconfirm"
      >
        <Button className='bg-warning text-dark'>Logout</Button>
      </Popconfirm>
    </div>
  );
};

export default App;
