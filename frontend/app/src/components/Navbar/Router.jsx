import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../Home/HomePage.jsx';
import Nav from './Nav.jsx';
import Add from '../EmpList/AddEmployee/App.jsx';
import EmpolyeeList from '../EmpList/EmpolyeeList.jsx';
import Edit from '../EmpList/EditEmployee/App.jsx';
export default function Router() {
  return (
    <React.Fragment>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-employee" element={<Add />} />
        <Route path="/edit-employee/:id" element={<Edit />} />
        <Route path="/employee-list" element={<EmpolyeeList />} />
      </Routes>
    </React.Fragment>
  );
}
