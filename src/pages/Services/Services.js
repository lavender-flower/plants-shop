import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
                          <div className="container-overlay">
  <img src="images/ser.jpg" alt="Avatar" className="image-overlay"/>
  <div className="overlay caveat">
    <div className="text-overlay"><p style={{fontSize:'4vw'}}>
    Can We Help You To Choose And Learn More About Our Plants?
</p>

<Link to='/services'><button type="button" className="rounded-pill btn btn-success" style={{fontSize:'1.5vw'}}>Contact Us <FontAwesomeIcon className='ps-2 ' style={{fontSize:'1vw'}} icon={faArrowRightArrowLeft} /></button></Link>


</div>
  </div>
</div>

<div>
  <div className='row po'>
    <div className='col-lg-8 ps-5 py-5 text-start caveat'>
      <p style={{fontSize:'38px'}}>Get In Touch for Services</p>
      <div className='row'>
      <div className=" col-lg">
    <label  className="form-label" style={{fontSize:'24px'}}>Your Name</label>
    <input type="text" className="form-control"  aria-describedby="emailHelp"/>
    
  </div>
  <div className="col-lg">
    <label for="exampleInputEmail1" style={{fontSize:'24px'}} className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="col-lg">
    <label for="exampleInputPassword1" style={{fontSize:'24px'}} className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

      </div>

      <div className=" pt-3 pb-3">
  <label for="exampleFormControlTextarea1" style={{fontSize:'24px'}} className="form-label">Write Your Messages</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<div>
  <button style={{fontSize:'28px'}} className='btn btn-success px-5'>send messages</button>
</div>

    </div>
    <div className='col-lg-4 text-start p-5 caveat'>
      <p style={{fontSize:'28px'}} className='pt-3'>Address</p>
      
      <p style={{fontSize:'18px'}}>Dhaka, Bangladesh.</p>
      <hr>
    </hr>
    <p style={{fontSize:'28px'}} >Phone</p>
    <p style={{fontSize:'18px'}}>088347836129</p>
    <p style={{fontSize:'18px'}}>085834782637</p>
    <hr></hr>
    <p style={{fontSize:'28px'}} >Email</p>
    <p style={{fontSize:'18px'}}>plantous@gmail.com</p>
    <hr></hr>

    <p style={{fontSize:'28px'}} >Follow on Us</p>
    <p style={{fontSize:'18px'}}><FontAwesomeIcon  icon={faFacebook} /> <FontAwesomeIcon className='px-2' icon={faTwitter} /><FontAwesomeIcon className='px-2' icon={faInstagram} /> <FontAwesomeIcon icon={faYoutube} /></p>



    </div>

  </div>
</div>
        </div>
    );
};

export default Services;