
import React from 'react'
import Productsjson from './Productsjson.json'
import { useDispatch } from 'react-redux'
import { incrementcart } from './Cartreducer'
import { decrementcart } from './Cartreducer'
const Products = () => {
  const dispatch=useDispatch();
  return (
    <div>
      <div className='row'>
        {
           Productsjson.products.map(item=><div className='col'><div class="card" style={{width:400}}>
            <img class="card-img-top" src={item.src} alt="Card image"/>
            <div class="card-body">
              <h4 class="card-title">{item.name}</h4>
              <h4 class="card-title">{item.price}</h4>
           <div style={{display:'flex',justifyContent:'space-evenly'}}>  <button className='btn btn-primary' onClick={()=>dispatch(incrementcart(
             {productName:item.name,
            productprice:item.price}
             ))} >add</button>
              <button className='btn btn-primary' onClick={()=>dispatch(decrementcart({productName:item.name,
            productprice:item.price}))}>remove</button></div>
            </div>
          </div></div>)
        }</div>
    </div>
  )
}

export default Products