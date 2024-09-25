import React, { useState,useEffect, useMemo,useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { FaSortAlphaDown, FaSortAlphaUpAlt } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { Context } from '../Context/UserContext';
import getData from './get.js'
import { NavLink } from 'react-router-dom';
function StripedRowExample() {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const {userdata,setuserdata}=useContext(Context);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    getData(setLoading,setuserdata);
  },[]);
  
  const sortedData = useMemo(() => {
    let sortableData = [...userdata];

    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableData;
  }, [userdata, sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

 
  return (
    <div>
      <div className='container d-flex'>
        <h1 className='login-name mt-3 mb-3'>Employee List</h1>
       
      </div>

      <div className="w-100 alert alert-success col d-flex justify-content-center place-items-center">
        <h6 className='mt-2 text-bold fs-4'><b> Data Count: {sortedData.length}</b></h6>
      </div>

      <Table  className='m-1 text-lg-center overflow-scroll  table-striped' border={2}>
        <thead>
          <tr>
            <th onClick={() => requestSort('id')}>
              Unique Id {sortConfig.key === 'id' ? (sortConfig.direction === 'asc' ? <FaSortAlphaUpAlt /> : <FaSortAlphaDown />) : null}
            </th>
            <th onClick={() => requestSort('name')}>
              Name {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? <FaSortAlphaUpAlt /> : <FaSortAlphaDown />) : null}
            </th>
            <th>Image</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th onClick={() => requestSort('date')}>
              Create date {sortConfig.key === 'date' ? (sortConfig.direction === 'asc' ? <FaSortAlphaUpAlt /> : <FaSortAlphaDown />) : null}
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {sortedData.map((user, index) => {
          const hello = `/edit-employee/${index}`;
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td className='table-image'><img src={user.img} alt={user.name} /></td>
              <td>{user.email}</td>
              <td>{user.number}</td>
              <td>{user.Designation}</td>
              <td>{user.gender}</td>
              <td>{user.skills.join(', ')}</td>
              <td>{new Date().toLocaleDateString()}</td>
              <td>
                <NavLink to={hello}>
                  <Button variant="primary" className='me-4'>Edit</Button>
                </NavLink>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          );
        })}
        
        </tbody>
      </Table>
    </div>
  );
}

export default React.memo(StripedRowExample);

{
  //* */
}