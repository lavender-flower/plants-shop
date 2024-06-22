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
          <div className='row p-1 pt-1  caveat text-success' style={{ backgroundColor: 'rgba(0, 0, 0, 0.07)' }}>
       <small style={{fontSize:'18px'}} className='px-3 col-lg-4'>Free Delivery above 800 tk + 10-Day Guarantee</small>
       <div className='col-lg'></div>
     <div className='col-lg'>
      <small style={{fontSize:'18px'}} className='px-2'><FontAwesomeIcon style={{fontSize:'14px'}} icon={faPhone} /> 01878180587  </small> 
      
     <small style={{fontSize:'18px'}} className='px-2'><FontAwesomeIcon style={{fontSize:'14px'}}  icon={faEnvelope} /> plantous@gmail.com</small></div>
        
      </div>
      <div style={{position:'-webkit-sticky',position:'sticky',top:'0'}}>
      <Navbar  sticky='top' expand="lg" className="bg-light" >
      <Container >
        <Navbar.Brand className='text-success lobster-regular ' style={{fontSize:'32px'}} ><img src='images/logo.png' width='45vw'></img>Plantous</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            
          </Nav>
        
        

          <div className="row ">
            
         <div className='col-lg'> <Nav.Link ><Link  className='text-decoration-none text-success  caveat ' style={{fontSize:'22px'}} to='/home'>Home</Link></Nav.Link></div>
         <div className='col-lg'> <Nav.Link ><Link  className='text-decoration-none text-success  caveat ' style={{fontSize:'22px'}} to='/shopplants'>Plants</Link></Nav.Link></div>
         <div className='col-lg'> <Nav.Link ><Link  className='text-decoration-none text-success  caveat ' style={{fontSize:'22px'}} to='/planters'>Planters</Link></Nav.Link></div>
         <div className='col-lg'> <Nav.Link ><Link  className='text-decoration-none text-success  caveat ' style={{fontSize:'22px'}} to='/plantcare'>PlantCare</Link></Nav.Link></div>
         <div className='col-lg'> <Nav.Link ><Link  className='text-decoration-none text-success  caveat ' style={{fontSize:'22px'}} to='/Decoridea'>DecorIdeas</Link></Nav.Link></div>
         <div className='col-lg'> <Nav.Link ><Link  className='text-decoration-none text-success  caveat ' style={{fontSize:'22px'}} to='/services'>Services</Link></Nav.Link></div>
          
          
      </div>
    
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
        </div>
    );
};

export default Header;