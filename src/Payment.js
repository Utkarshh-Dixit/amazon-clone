import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
    //eslint-disable-next-line
    const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1> Checkout (<Link to='/checkout'>{basket?.length} items</Link>)</h1>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                      <p>{user?.email}</p>
                      <p>119/438 Darshanpurwa</p>
                      <p>Kanpur</p>
                </div>
            
            </div>
            <div className='payment_section'>
                <div className='title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment_items'>
                    {basket.map(item =>{
                       return <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}/>
                    })}

                </div>

            </div>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment method  </h3>
                </div>
                <div className='payment_details'>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Payment