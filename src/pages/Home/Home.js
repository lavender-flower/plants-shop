import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import plant from '../../plants.json';
import planter from '../../planter.json';
import plantcare from '../../plantCare.json';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className='pon'>
        <section>
        <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          height='570vh'
          src="images/banner1.jpg"
          alt="First slide"
          style={{filter: "brightness(65%)"}}
        />
        <Carousel.Caption className='text-light caveat text-start po' style={{marginBottom:'10vw',marginRight:'30vw'}}>
          <h5 style={{fontSize:'56px'}} >The Benefits of Plants</h5>
          <p>A little green companion to brighten my day.
          Leaf me alone with my indoor plants.</p>
          <Link  className='text-decoration-none text-light caveat' to='/shopplants'>Shop Now  <FontAwesomeIcon className='ps-2 ' style={{fontSize:'1vw'}} icon={faArrowRight} /></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/banner15.jpg"
          height='570vh'
          alt="Second slide"
          style={{filter: "brightness(65%)"}}
        />
        <Carousel.Caption className='text-light  caveat text-start po' style={{marginBottom:'10vw',marginRight:'40vw'}}>
          <h5  style={{fontSize:'56px'}} >Quality Plant Care and Accessories</h5>
          <p>A little green companion to brighten my day.
          Leaf me alone with my indoor plants.</p>
          <Link  className='text-decoration-none text-light caveat' to='/plantcare'>Shop Now  <FontAwesomeIcon className='ps-2'style={{fontSize:'1vw'}} icon={faArrowRight} /></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/banner16.jpg"
          height='570vh'
          alt="Third slide"
          style={{filter: "brightness(65%)"}}
        />
        <Carousel.Caption className='text-light  caveat text-start po' style={{marginBottom:'10vw',marginRight:'40vw'}}>
          <h5  style={{fontSize:'56px'}}>For The True <br></br>Plants Lover</h5>
          <p>
          A little green companion to brighten my day.
Leaf me alone with my indoor plants.
          </p>
          <Link  className='text-decoration-none text-light caveat' to='/planters'>Shop Now  <FontAwesomeIcon className='ps-2' style={{fontSize:'1vw'}} icon={faArrowRight} /></Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </section>
        <section>
        <div className="p-5">
  <div className="row po text-center">
    <div className="col-lg-4">
      <div className='mb-4 img-hover-zoom ' style={{borderRadius:'1.3vw'}}><img src='images/banner2.jpg'  width='440vw'></img></div>
     
      <div className='mb-2 img-hover-zoom ' style={{borderRadius:'1.3vw'}}><img src='images/banner13.png'  width='400vw'></img></div>
    </div>
    <div className="col-lg-4">
   
    <div className=' img-hover-zoom' style={{borderRadius:'2vw'}}><img src='images/decor.webp' width='400vw' ></img></div>
    </div>
    <div className="col-lg-4">
    <div className='mb-4 img-hover-zoom' style={{borderRadius:'1.3vw'}}><img src='images/banner12.jpg' width='400vw' height='157vw'></img></div>
    <div className='mb-4 img-hover-zoom' style={{borderRadius:'1.3vw'}}><img src='images/paltercare1.jpg' width='400vw'></img></div>
    <div className='img-hover-zoom' style={{borderRadius:'1.3vw'}}><img src='images/banner14.jpg' width='400vw' ></img></div>
    
    </div>
  </div>
</div>
        </section>


        <section className='px-5 po'>
          <div><h1 className='caveat text-success po' style={{fontSize:'56px'}} >
            Do You Want to Decor Your plant?</h1></div>
        <div className="row row-cols-1 row-cols-md-3 g-4 pt-5 pb-3">
  {
    planter.slice(0,3).map(d=>{
      return(
        <div className="col caveat">
        <div className="card">
        <div className="container-c">
      <img src={d.img} alt="Avatar" className="image-c card-img-top" height='350vw'/>
      <div className="overlay-c d-flex justify-content-between p-2">
        <div className='text-start'>
            <p style={{fontSize:'24px'}}>{d.name}</p>
            <p style={{fontSize:'24px'}}>{d.ppl} ordered</p>
         
        </div>
        <div className='text-end'>
           
           
            <p style={{fontSize:'24px'}}>{d.category}</p>
            <p style={{fontSize:'24px'}}>{d.price} tk  <small className='text-light'> each</small></p>
        </div>
      </div>
    </div>
       
        
          
       
        </div>
      </div>
    
        
        )
    })
  }
  
</div>
<Link  className='text-decoration-none text-success caveat' style={{fontSize:'24px'}}  to='/planters'>View All  <FontAwesomeIcon className='ps-2 '  icon={faArrowRight} /></Link>
        </section>
        

        <section className=' px-5 pb-5 pt-5 po'>
       <div className=' row bg-light text-center '> 
          <div style={{marginTop:'6.5vw'}} className='col-lg p-5' ><h1 className='caveat ' style={{fontSize:'56px'}}>The Benefits<br></br> 
          of Indoor <br></br> Plants</h1></div>
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.07)',width:'30vw', height:'30vw'}} className='col border rounded-circle m-3' >
            <img style={{width:'25vw'}} className='img-hover-zoom'    src="images/thumb.png"></img>
          </div>
          <div className='col-lg   p-5' style={{marginTop:'6.5vw'}}><p className='caveat ' style={{fontSize:'24px'}}>“Phasellus tempus dignissim nisl, eu <br></br> interdum felis interdum consequat. Vestibulum varius dui vel tincidunt convallis.”</p>
          <Link  className='text-decoration-none text-success caveat' style={{fontSize:'24px'}} to='/shopplants'>shop now  <FontAwesomeIcon className='ps-2 ' style={{fontSize:'18px'}} icon={faArrowRight} /></Link>
          
          </div></div>
        </section>
         
        <section className='px-5 row po'>
          <div className='col-lg pt-3  img-hover-zoom' >
            <img className='' style={{borderRadius:'2vw',width:'42vw'}}   src="images/rubber.jpg"></img>
          </div>
          <div className='py-3 col-lg' >
          <div><h1 className='caveat text-start ps-3 text-success po' style={{fontSize:'56px'}} >
            Do You Want To Make Your House Green?</h1></div>
        <div className="row row-cols-1 row-cols-md-2 g-4 px-3 po">
  {
    plant.slice(0,4).map(doc=>{
      return(
        <div className="col pt-2 caveat">
        <div className="card">
        <div className="container-c">
      <img src={doc.img} alt="Avatar" className="image-c card-img-top" height='280vw'/>
      <div className="overlay-c d-flex justify-content-between p-2">
        <div className='text-start'>
            <p style={{fontSize:'24px'}}>{doc.name}</p>
            <p style={{fontSize:'24px'}}>{doc.category}</p>
        </div>
        <div className='text-end'>
            <p style={{fontSize:'24px'}}>{doc.price} tk</p>
            <p style={{fontSize:'24px'}}>{doc.size} pot</p>
        </div>
      </div>
    </div>
       
        
          
       
        </div>
      </div>
    
        
        )
    })
  }
   
</div>

          </div>
        </section>
        <Link  className='text-decoration-none text-center text-success caveat' style={{fontSize:'24px'}} to='/shopplants'>View All  <FontAwesomeIcon className='ps-2 ' style={{fontSize:'1vw'}} icon={faArrowRight} /></Link>
        <section className='p-5 po'>
        <div className='ps-5'>
  <div className="row caveat text-success text-start">
    <div className="col-lg">
    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.04)',width:'10vw',borderRadius:'95px 0px 100px 0px'}} ><img className='child bounce'   src="images/1.png"></img></div>
    <p style={{fontSize:'32px'}}>Smart Plant & Tree Care</p>
    <p style={{fontSize:'24px'}}>We want to help keep your plants ever-green.</p>
    </div>
    <div className="col-lg">
    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.04)',width:'10vw',borderRadius:'95px 0px 100px 0px'}} ><img className='child bounce'   src="images/2.png"></img></div>
    <p style={{fontSize:'32px'}}>Nursery Direct</p>
    <p style={{fontSize:'24px'}}>We want to help keep your plants ever-green.</p>
    </div>
    <div className="col-lg">
    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.04)',width:'10vw',borderRadius:'95px 0px 100px 0px'}} ><img className='child bounce'   src="images/3.png"></img></div>
    <p style={{fontSize:'32px'}}>Plant Sentry</p>
    <p style={{fontSize:'24px'}}>We want to help keep your plants ever-green.</p>
    </div>
    <div className="col-lg">
    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.04)',width:'10vw',borderRadius:'95px 0px 100px 0px'}} ><img className='child bounce'   src="images/4.png"></img></div>
        <p style={{fontSize:'32px'}}>Plant Renovation</p>
    <p style={{fontSize:'24px'}}>We want to help keep your plants ever-green.</p>
    </div>
   
  </div>
</div>
        </section>
        
        <section className='px-5 text-start row po'>
         <div className='col'> <div><h1 className='caveat text-success ps-3' style={{fontSize:'56px'}} >
            Do You Need to Decor Your plantcare?</h1></div>
        <div className="row row-cols-1 row-cols-md-2 g-4 px-3">
  {
    plantcare.slice(0,4).map(d=>{
  
      return(
        <div className="col caveat">
        <div className="card">
        <div className="container-c">
      <img src={d.img} alt="Avatar" className="image-c card-img-top" height='300vw' width='250vw'/>
      <div className="overlay-c px-2 ">
    
            <p style={{fontSize:'24px'}}>{d.name}</p>
            <p style={{fontSize:'28px'}}>{d.price} tk  <small className='text-light'> only</small></p>
        
      </div>
    </div>
       
        
          
       
        </div>
      
        
      </div>
      

    
        
        )
    })
  }
 
</div></div>

<div className='col-lg pt-3  img-hover-zoom'>
<img className='' style={{borderRadius:'2vw'}}  height='750vw'  src="images/b.webp"></img>
</div>

        </section>
        <Link  className='text-decoration-none text-center text-success caveat' style={{fontSize:'24px'}} to='/plantcare'>View All  <FontAwesomeIcon className='ps-2 ' style={{fontSize:'1vw'}} icon={faArrowRight} /></Link> 
        <section className='bg-light py-5 my-5 po' >
          <div className='row caveat px-5'>
            <div className='col text-start' >
              <h1 style={{fontSize:'22px'}}> Subscribe Us</h1>
              <h1 style={{fontSize:'48px'}}>Sign Up To Our<br></br> Newsletter</h1>

            </div>
            <div className='col-lg '>
            <div className="input-group input-group-lg pt-5">
  
  <input type="text" className="form-control" aria-label="Sizing example input" placeholder='enter your email' aria-describedby="inputGroup-sizing-lg"/>
  <button className="btn btn-success" style={{fontSize:'2.4vw'}} type="button" id="button-addon2">Subscribe Now <FontAwesomeIcon className='ps-2 ' style={{fontSize:'1vw'}} icon={faArrowRight} /></button>
</div>
            </div>

          </div>

        </section>
        </div>
    );
};

export default Home;