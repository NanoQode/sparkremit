import React from "react"; 
import './header.scss' ;
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from '@mui/material/Button';
import { logo } from "../../../images";

const Header = () => {

 
  return (
    <> 
      <Navbar   expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Personal</Nav.Link>
            <Nav.Link href="#action2">Buisness</Nav.Link> 
            <Nav.Link href="#action2">Company</Nav.Link>  
          </Nav> 
        </Navbar.Collapse>
        <div className="header-btn">
          <Button variant="text">LogIn</Button>
          <Button variant="contained" color="primary">Sign Up</Button>
        </div>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
