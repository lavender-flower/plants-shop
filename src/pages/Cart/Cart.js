import React from 'react';

const Cart = (props) => {
    const{cart}=props;
    let total=0;
    let name;
    let img;
    for(const p of cart){
        total=total+p.price;
         name=p.name;
         img=p.img;
    }
    const shipping=total>0?70:0;
    const tax=(total+shipping)*0.05;
    const grandTotal=total+tax+shipping;
    return (
        <div className='cart caveat bg-light p-3  mb-5' style={{position:'-webkit-sticky',position:'sticky',top:'0'}}>
                   <div className='bg-success text-light text-center' style={{borderRadius:'24px'}}> 
                    <p style={{fontSize:'24px'}}>Your Cart</p>
                </div>
            <h3 className='d-flex justify-content-between' ><span>Ordererd Plants:</span> <span style={{fontSize:'24px'}} className='text-success'>{cart.length}</span></h3>

            <p className='d-flex justify-content-between' style={{fontSize:'24px'}}><span>Total:</span><span className='text-success'>{total} tk</span></p>
            <p className='d-flex justify-content-between' style={{fontSize:'24px'}}><span>shipping cost:</span><span className='text-success'>{shipping} tk</span></p>
            <p className='d-flex justify-content-between' style={{fontSize:'24px'}}><span>tax:</span><span className='text-success'>{tax} tk</span></p>
            <h4 className='d-flex justify-content-between' style={{fontSize:'24px'}}><span>GrandTotal:</span><span className='text-success'>{grandTotal} tk</span></h4>
            

           
           <div className='cart-p '>
           <p style={{fontSize:'24px'}}>Now you add {name}</p>
           
            <img src={img} height='50vw' alt=''></img>
            
           </div>
           <p style={{fontSize:'24px'}}>Give Your location and phone no</p>
           <input type='text' className='my-2' style={{paddingRight:'7vw',fontSize:'24px'}} placeholder='Your Location'></input><br></br>
           <input type='text' className='my-2'  style={{paddingRight:'7vw',fontSize:'24px'}}  placeholder='Your phone no'></input><br></br>
          <div className='text-end pt-2'> <button  className=' btn btn-success ' style={{fontSize:'18px'}}>confirm</button></div>

            
            
        </div>
    );
};

export default Cart;