import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from 'axios';

function Payment() {

    //eslint-disable-next-line
    const [{basket, user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();

    const history = useNavigate();

    const [error, seterror] = useState(null);
    const [succeeded, setsucceeded] = useState(false);
    const [processing, setprocessing] = useState("");
    const [disabled, setdisabled] = useState(true);
    const [clientSecret, setclientSecret] = useState(true);

    useEffect(() =>{
        const getclientSecret = async () =>{
             const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket)*100}`
             });
             setclientSecret(response.data.clientSecret)
        }

        getclientSecret();

    }, [basket])

    const handleSubmit = async (event) =>{
        event.preventDefault();
        setprocessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) =>{
            setsucceeded(true);
            seterror(null)
            setprocessing(false)
            history.replace('/orders')
        })

    }

    const handleChange = event =>{
        setdisabled(event.empty);
        seterror(event.error ? event.error.message : "");

    }

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
                     <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className='payment_priceContainer'>
                        <CurrencyFormat
                           renderText={(value)=>(
                           <h3>Order total : {value}</h3>
                           )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                        />
                        <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                        </button>


                        </div>
                        {error && <div>{error}</div>}
                     </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Payment