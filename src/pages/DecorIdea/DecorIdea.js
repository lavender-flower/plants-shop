import { faArrowDown, faArrowRightArrowLeft, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './DecorIdea.css'

const DecorIdea = () => {
    return (
        <div>
                <div className="container-overlay">
  <img src="images/homedecorbanner.webp" alt="Avatar" className="image-overlay"/>
  <div className="overlay caveat">
    <div className="text-overlay"><h1 className='display-4 caveat' style={{fontSize:'3vw'}}>Our Decor Ideas With plants</h1><br></br><p style={{fontSize:'2vw'}}>
    Can We Help You To Choose And Learn More About Them?
</p>

<Link to='/services'><button type="button" className="rounded-pill btn btn-success" style={{fontSize:'1.5vw'}}>Contact Us <FontAwesomeIcon className='ps-2 ' style={{fontSize:'1vw'}} icon={faArrowRightArrowLeft} /></button></Link>


</div>
  </div>
</div>
    <div>
      <div className='row p-5 po'>

      <div className="col-lg m-2 caveat">
        <div className="card">
        <div class="container-c">
      <img src='images/12.webp' alt="Avatar" class="image-c card-img-top" height='350vw'/>
      <div class="overlay-c px-2 ">
      <h3 className='caveat' style={{fontSize:'4vw'}}>Kitchen Decor</h3>
        
          
      </div>
    </div>
    </div>
  </div>

  <div className="col-lg m-2 caveat">
        <div className="card">
        <div class="container-c">
      <img src='images/13.webp' alt="Avatar" class="image-c card-img-top" height='350vw'/>
      <div class="overlay-c px-2 ">
      <h3 className='caveat' style={{fontSize:'4vw'}}>Baranda Decor</h3>
        
          
      </div>
    </div>
    </div>
  </div>
   

  <div className="col-lg m-2 caveat po">
        <div className="card">
        <div class="container-c">
      <img src='images/11.webp' alt="Avatar" class="image-c card-img-top" height='350vw'/>
      <div class="overlay-c px-2 ">
      <h3 className='caveat' style={{fontSize:'4vw'}}>BathRoom Decor</h3>
        
          
      </div>
    </div>
    </div>
  </div>
    
  <div className="col-lg m-2 caveat po">
        <div className="card">
        <div class="container-c">
      <img src='images/14.webp' alt="Avatar" class="image-c card-img-top" height='350vw'/>
      <div class="overlay-c px-2 ">
      <h3 className='caveat' style={{fontSize:'4vw'}}>Living Room Decor</h3>
        
          
      </div>
    </div>
    </div>
  </div>


        </div>    
        
    </div>     
<div className='p-5 po'>
    <p className='caveat text-success' style={{fontSize:'4vw'}}>Our Decors Album </p>
<div className="scroll-container">
<img src="images/13.webp" alt="Cinque Terre"  height="400"/>
<img src="images/11.webp" alt="Cinque Terre"  height="400"/>
<img src="images/12.webp" alt="Cinque Terre"  height="400"/>
  <img src="images/1.webp" alt="Forest" width="600" height="400"/>
  <img src="images/2.webp" alt="Cinque Terre" width="600" height="400"/>
  <img src="images/2.jfif" alt="Forest"  height="400"/>
  <img src="images/3.jfif" alt="Cinque Terre" height="400"/>
  <img src="images/4.jfif" alt="Forest"  height="400"/>
  <img src="images/5.jfif" alt="Cinque Terre"  height="400"/>
  <img src="images/6.jfif" alt="Forest" height="400"/>
  <img src="images/7.jfif" alt="Forest"  height="400"/>
  <img src="images/8.jfif" alt="Forest"  height="400"/>
  <img src="images/9.jfif" alt="Forest"  height="400"/>
  <img src="images/10.jfif" alt="Forest"  height="400"/>
  <img src="images/1.jfif" alt="Cinque Terre"  height="400"/>
</div>
</div>

<div className='caveat px-5'>
  <h1 className='caveat text-success' style={{fontSize:'4vw'}}>Plant Styling FAQs</h1>
<div className='text-start px-5 pb-5'>
<div class="dropdown d-flex justify-content-between">
  <span style={{fontSize:'2vw'}}>What is plant Styling? </span><span><FontAwesomeIcon style={{fontSize:'1.3vw',color:'gray'}}  icon={faCaretDown} /></span>


  <div class="dropdown-content">
  <p>Personalised plant styling is a complimentary service we provide for customers looking to order a min. of $1000 spend with us.

This is coupled with a site visit and where our team would propose plants and planters into your indoor or outdoor spaces to enhance aesthetics and create a harmonious environment.</p>
  </div>
 
</div>
<hr></hr>
<br></br>
<div class="dropdown d-flex justify-content-between">
  <span style={{fontSize:'2vw'}}>How does our plant styling services work?</span><span><FontAwesomeIcon style={{fontSize:'1.3vw',color:'gray'}}  icon={faCaretDown}/></span>


  <div class="dropdown-content">
  <p>We offer two types of plant styling service.<br></br>

1) Online Plant Styling & Recommendations<br></br>
Simply hit us on our chat services, and send us images of your space, and we would be happy to assist you with a recommendation! No min. spend required, simply add those products to cart and check it out. We will do the heavy lifting and have it delivered to your doorstep.<br></br>

2) Personalised Plant Styling<br></br>
We are excited to add greens to elevate your space. We would ask for a minimum spend of $1000 for us to kickstart the project. As a deposit, we take a $500 upfront to book a consultation. The $500SGD would serve as a form of credit that would be able to offset your purchases made with us in our store.

Our team of plants styling experts will discuss your preferences and assess the conditions (lights etc) in your space.

A proposal containing suggested plants, planters and other design pieces for display in your home.

Once you have agreed on the final selection of pieces, we will collect a payment of 100% of the total cost of the project, and have them available on your required delivery date

Given a lot of work goes into each project, there is a minimum overall spend of $1000 ($500 paid prior to the start of a kickoff) for a project to go ahead.

If you have already decided on a few plants, do give our home styling service a try! 

In addition, for our Personalised Plant Styling services, we provide repotting of existing plants, onsite services and more! 

Chat with us today if you are looking to add greens to your space today!</p>
  </div>
 
</div>
<hr></hr>
<br></br>
<div class="dropdown d-flex justify-content-between">
  <span style={{fontSize:'2vw'}}>How does cost?</span><span><FontAwesomeIcon style={{fontSize:'1.3vw',color:'gray'}} icon={faCaretDown}/></span>


  <div class="dropdown-content">
  <p> Personalised Plant Styling<br></br>
  Min. spend per project is 1000tk. We would take 500tk upfront prior to site visit, which is credited towards any purchases made with us in-store.</p>
  </div>
 
</div>
<hr></hr>


</div>

</div>

        </div>
    );
};

export default DecorIdea;