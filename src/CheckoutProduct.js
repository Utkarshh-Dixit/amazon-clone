import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
  return (
    <>
    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' src={image} alt=''/>

        <div className='checkoutProduct_info'>
              <h5 className='checkoutProduct_title'>{title}</h5>
              <p className='checkoutProduct_price'>
                <small>$</small>
                <strong>{price}</strong>
              </p>
              <div className='checkoutProduct_rating' style={{display:"flex"}}>
              {Array(rating).fill().map((_,i)=>{
                    return <p>🌟</p>
                })}
              </div>
              <button onClick={removeFromBasket}>Remove item from cart</button>
        </div>
        
    </div>
    <hr/>
    </>
  )
}

export default CheckoutProduct