import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import '../all.css'



const Plant = (props) => {
    const{name,img,category,price,ratings,size}=props.plant;

    return (

<>


  <div className="col caveat">
    <div className="card">
    <div className="container-c">
  <img src={img} alt="Avatar" className="image-c card-img-top" height='320vw'/>
  <div className="overlay-c d-flex justify-content-between p-2">
    <div className='text-start'>
        <p style={{fontSize:'24px'}}>{name}</p>
        <p style={{fontSize:'24px'}}>{category}</p>
    </div>
    <div className='text-end' style={{fontSize:'24px'}}>
        <p>{price} tk</p>
        <p>{size}</p>
    </div>
  </div>
</div>
   
    
      
    <div className='bg-light rounded-bottom'>
    <button 
                         onClick={()=>props.handleAddtoordereditem(props.plant)} 
                          type="button" className="btn btn-light" style={{fontSize:'24px'}}><FontAwesomeIcon  style={{fontSize:'18px'}} icon={faCartShopping} /> add to ordered list</button>

     
      </div>
    </div>
  </div>


    
        
                    <div className='plants'>
                      <div className='plant'>
                  
                        
                    

                     
                      </div>
                      
                    
        </div>
        </>
    );
};

export default Plant;