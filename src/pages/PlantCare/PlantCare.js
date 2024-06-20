import React, { useState } from 'react';
import plantcare from '../../plantCare.json';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { faArrowRight, faArrowRightArrowLeft, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PlantCare = () => {
  const[cart,setCart]=useState([]);


    return (
        <div>
           <div className="container-overlay">
  <img src="images/paltercare.jpg" alt="Avatar" className="image-overlay"/>
  <div className="overlay caveat">
    <div className="text-overlay"><h1 className='display-4 caveat' style={{fontSize:'3vw'}}>Fertilizer does no good in a heap, but a little spread around works miracles all over. </h1><br></br><p style={{fontSize:'2vw'}}>
    Can We Help You To Choose And Learn More About Them?
</p>

<Link to='/services'><button type="button" className="rounded-pill btn btn-success" style={{fontSize:'1.5vw'}}>Contact Us <FontAwesomeIcon className='ps-2 ' style={{fontSize:'1vw'}} icon={faArrowRightArrowLeft} /></button></Link>


</div>
  </div>
</div>
            <div className='row po'>
            <section className='col-lg-8 p-5'>
          <div><h1 className=' caveat text-start text-success' style={{fontSize:'3.5vw'}} >
            Plant Accessories </h1></div>
        <div className="row row-cols-1 row-cols-md-2 g-4 ">
  {
    plantcare.map(d=>{
      const handleAddtoordereditem=(d)=>{
        console.log(d)
        const newCart=[...cart,d];
        setCart(newCart)
      
      }
      return(
        <div className="col caveat">
        <div className="card">
        <div class="container-c">
      <img src={d.img} alt="Avatar" class="image-c card-img-top" height='350vw'/>
      <div class="overlay-c px-2 ">
    
            <p style={{fontSize:'1.8vw'}}>{d.name}</p>
            <p style={{fontSize:'2vw'}}>{d.price} tk  <small className='text-light'> only</small></p>
        
      </div>
    </div>
       
        
          
       
        </div>
        <div className='bg-light border '>     
        <button onClick={()=>handleAddtoordereditem(d)} 
                type="button" 
                class="btn btn-light">
                <FontAwesomeIcon icon={faCartShopping} /> add to ordered list
        </button>

            </div>
        
      </div>
      

    
        
        )
    })
  }
  
</div>

        </section> 
        <div className='col-lg-4 cart-container pt-5 pe-4 text-start'>
                <Cart cart={cart}></Cart>
                

            </div>
            </div>
        </div>
    );
};

export default PlantCare;