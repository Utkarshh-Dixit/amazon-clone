import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

function Checkout() {
      const[{basket, user}, dispatch] = useStateValue();
      
      

  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad' src='https://images-na.ssl-images-amazon.
com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg' alt=''/>

            <div>
                <h2 className='checkout_title'>Hey {user? user.email : 'Guest'} Your shopping basket</h2>
                {basket.map(item =>{
                  return <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
                })}
            </div>
        </div>
        <div className='checkout_right'>
                <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout