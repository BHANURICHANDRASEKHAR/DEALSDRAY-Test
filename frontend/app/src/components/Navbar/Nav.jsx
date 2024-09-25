import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import Logout from './Logout.jsx';
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ display: 'flex' }}>
      <Container>
        <img 
          src='https://play-lh.googleusercontent.com/Im3CE-kmZJmZMC8pkhpCj7tGznPI6LC1EjhaTJ3E6Cdh_mgW5VxF_joZK31XWwZPmkT5=w240-h480-rw' 
          className='medha' 
          alt="Medha Logo" 
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='me-5 mx-5'>Home</NavLink>
            <NavLink to="/employee-list" className='me-5 mx-5'>Employee List</NavLink>
            <NavLink to="/add-employee"> Create Employee </NavLink>

            {/*add-employee */}
          </Nav>
          {/* Align this Nav to the end */}
          <Nav className="ms-auto">
            <NavLink className='me-5 mx-5'><b>Name</b></NavLink>
            <Logout></Logout>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
