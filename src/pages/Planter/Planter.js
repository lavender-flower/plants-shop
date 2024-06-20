import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import planter from '../../planter.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link} from 'react-router-dom';
const Planter = () => {
  const[cart,setCart]=useState([]);
    return (
        <div>
          <div className="container-overlay">
  <img src="images/planter.webp" alt="Avatar" className="image-overlay"/>
  <div className="overlay caveat">
    <div className="text-overlay"><h1 className='display-4 caveat' style={{fontSize:'3vw'}}>Here You Will Find Different Kind of Planter </h1><br></br><p style={{fontSize:'2vw'}}>
    Can We Help You To Choose And Learn More About Them?
</p>

<Link to='/services'><button type="button" className="rounded-pill btn btn-success" style={{fontSize:'1.5vw'}}>Contact Us <FontAwesomeIcon className='ps-2 ' style={{fontSize:'1vw'}} icon={faArrowRightArrowLeft} /></button></Link>


</div>
  </div>
</div>
        
             <section className='px-5  row po '>
<div className='col-lg-8 pt-5'>
<div><h1 className='caveat text-start text-success' style={{fontSize:'3vw'}} >
             Do You Need to Decor Your plant?</h1></div>
          
        <div className=" row row-cols-1 row-cols-md-2 g-4 ">
  {
    planter.map(d=>{
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
      <div class="overlay-c d-flex justify-content-between p-2">
        <div className='text-start'>
            <p style={{fontSize:'1.8vw'}}>{d.name}</p>
            <p>{d.ppl} ordered</p>
         
        </div>
        <div className='text-end'>
           
           
            <p>{d.category}</p>
            <p style={{fontSize:'2vw'}}>{d.price} tk  <small className='text-light'> each</small></p>
        </div>
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

</div>
<div className='col-lg-4 pt-5 text-start' >
                <Cart cart={cart}></Cart>
                

            </div>

        </section> 
       
        </div>
    );
};

export default Planter;