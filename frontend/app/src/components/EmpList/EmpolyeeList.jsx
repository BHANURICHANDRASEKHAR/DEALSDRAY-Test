import React, { useState, useMemo } from 'react';
import Table from 'react-bootstrap/Table';
import { FaSortAlphaDown, FaSortAlphaUpAlt } from "react-icons/fa";
import { Button } from 'react-bootstrap';

function StripedRowExample() {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const userdata=[{
    name:'Chandu11',
    email:'bhanuri@gmail.com',
    number:'9885465280',
    Designation:'Hr',
    skills:['MCA'],
    img:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    gender:'Male'
   
  },{  name:'Chandu',
    email:'bhanuri@gmail.com',
    number:'9885465280',
    Designation:'Hr',
    skills:['MCA'],
    img:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    gender:'Male'
   
  },{
    name:'Chandu',
    email:'bhanuri@gmail.com',
    number:'9885465280',
    Designation:'Hr',
    skills:['MCA'],
    img:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    gender:'Male'
   
  },{
    name:'Chandu',
    email:'bhanuri@gmail.com',
    number:'9885465280',
    Designation:'Hr',
    skills:['MCA'],
    img:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    gender:'Male'
   
  }]
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

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(sortedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    const colWidths = [{ wch: 5 }, { wch: 20 }, { wch: 30 }, { wch: 15 }];
    worksheet['!cols'] = colWidths;

    XLSX.writeFile(workbook, "StudentsData.xlsx");
  };

  return (
    <div>
      <div className='container d-flex'>
        <h1 className='login-name mt-3 mb-3'>Employee List</h1>
        <div className='ms-auto'>
          <Button 
            variant="success" 
            onClick={downloadExcel} 
            className="mb-3 mt-4"
          >
            Download Excel
          </Button>
        </div>
      </div>

      <div className="w-100 alert alert-success col d-flex justify-content-center place-items-center">
        <h6 className='mt-2 text-bold fs-4'><b> Data Count: {sortedData.length}</b></h6>
      </div>

      <Table striped='columns' className='m-1 text-lg-center overflow-scroll'>
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
          const hello = `/edit-employee/${user.id}`;
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
                <a href={hello}>
                  <Button variant="primary" className='me-4'>Edit</Button>
                </a>
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