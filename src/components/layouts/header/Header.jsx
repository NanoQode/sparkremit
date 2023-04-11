import React from "react"; 
import './header.scss' ;
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from '@mui/material/Button';
import { logo } from "../../../images";
import { Link } from "react-router-dom";

const Header = () => {

 
  return (
    <> 
      <Navbar   expand="lg">
      <Container> 
        <Link to="/" className="navbar-brand"><img src={logo}/></Link> 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/about-us" className="nav-link">About</Link>
            <Link to="/blogs" className="nav-link">Blog</Link>
            <Link to="/contact" className="nav-link">Contact</Link> 
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
