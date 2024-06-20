import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css'
import { faLocationDot,faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
    return (
        <div>
          <div className='d-flex justify-content-between p-1 pt-1  caveat text-success' style={{ backgroundColor: 'rgba(0, 0, 0, 0.07)' }}>
       <small className='px-3'>Free Delivery above 800 tk + 10-Day Guarantee</small>
     <div><small className='px-2'><FontAwesomeIcon style={{fontSize:'1vw'}} icon={faPhone} /> 01878180587  </small>  <small><FontAwesomeIcon style={{fontSize:'1vw'}} icon={faLocationDot} /> Dhaka,Bangladesh  </small>
     <small className='px-3'><FontAwesomeIcon style={{fontSize:'1vw'}}  icon={faEnvelope} /> plantous@gmail.com</small></div>
        
      </div>
      <div style={{position:'-webkit-sticky',position:'sticky',top:'0'}}>
      <Navbar  sticky='top' expand="lg" className="bg-light" >
      <Container >
        <Navbar.Brand className='text-success lobster-regular ' style={{fontSize:'2.5vw'}} ><img src='images/logo.png' width='40vw'></img>Plantous</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">
            

        
          </Nav>

          <div class="d-flex">
            
          <Nav.Link ><Link  className='text-decoration-none text-success caveat px-3' to='/home'>Home</Link></Nav.Link>
          <Nav.Link ><Link  className='text-decoration-none text-success caveat px-3' to='/shopplants'>Plants</Link></Nav.Link>
          <Nav.Link ><Link  className='text-decoration-none text-success caveat px-3' to='/planters'>Planters</Link></Nav.Link>
          <Nav.Link ><Link  className='text-decoration-none text-success caveat px-3' to='/plantcare'>Plant Care</Link></Nav.Link>
          
          
          <Nav.Link ><Link  className='text-decoration-none text-success caveat px-3' to='/Decoridea'>Decor Ideas</Link></Nav.Link>
          <Nav.Link ><Link  className='text-decoration-none text-success caveat px-3' to='/services'>Services</Link></Nav.Link>
          
          
      </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
        </div>
    );
};

export default Header;