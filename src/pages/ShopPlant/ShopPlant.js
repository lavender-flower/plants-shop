import React, { useEffect, useState } from 'react';

import Plant from '../Plant/Plant';
import Cart from '../Cart/Cart';
import '../all.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const ShopPlant = () => {
    const[plants,setPlants]=useState([]);
    const[cart,setCart]=useState([]);
    const[displayplants,setDisplayplants]=useState([]);

    useEffect(()=>{

        fetch('./plants.JSON').then(res=>res.json())
        .then(data=>{setPlants(data);
        setDisplayplants(data)});

    },[])

    const handleAddtoordereditem=(plant)=>{
        console.log(plant)
        const newCart=[...cart,plant];
        setCart(newCart)

    }
    const handleSearch=event=>{
const searchText=event.target.value;
const matchedPlants=plants.filter(plant=>plant.name.toLowerCase().includes(searchText.toLowerCase()));
setDisplayplants(matchedPlants);
    }
    return (<>
 <div className="container-overlay caveat">
  <img src="images/banner13.png" alt="Avatar" className="image-overlay"/>
  <div className="overlay">
    <div className="text-overlay"><h1 className='display-4 caveat' style={{fontSize:'4vw'}}>Are You Plant Lover? Plants For You  </h1><br></br><p style={{fontSize:'2vw'}}>
    Can We Help You To Choose And Learn More About Them?
</p>

<Link to='/services'><button type="button" className="rounded-pill btn btn-success" style={{fontSize:'1.5vw'}}>Contact Us <FontAwesomeIcon className='ps-2 ' style={{fontSize:'1vw'}} icon={faArrowRight} /></button></Link>

</div>
  </div>
</div>

        <div className='container-fluid po row'>
            
  <div className='col-lg-8 pt-5 '>
  <div className='container caveat px-5' >

<h3 className='text-start text-success'>We Have {plants.length} types of Different Plants For You!! <br></br>  
<input className="form-control p-2 mt-3  me-2  search-bar" type="text" onChange={handleSearch}
  style={{fontSize:'1.5vw'}} placeholder='search-your-favourite-plant' aria-label="Search"/>
</h3>
    
</div>
        <div className="row row-cols-1 row-cols-md-2 g-4 pt-3 px-5">
            
                
                {
                    displayplants.map(plant=>
                        <div className='all-plants' >
                           <div> <Plant 
                           
                           plant={plant}
                           handleAddtoordereditem={handleAddtoordereditem}
                           ></Plant></div>
                        </div>
                    )
                }

            </div>
  </div>
            <div className='col-lg-4 cart-container pt-5 text-start'>
         
                <Cart cart={cart}></Cart>
                

            </div>
            
        </div></>
    );
};

export default ShopPlant;