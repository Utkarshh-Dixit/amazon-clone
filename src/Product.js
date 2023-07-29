import React from 'react'
import './Product.css'

function Product({title, price, image, rating}) {
  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                {price}
            </p>
            <div className='product_rating'>
                {Array(rating).fill().map((_,i)=>{
                    return <p>🌟</p>
                })}
            </div>
        </div>
        <img src={image} alt=''/>
        <button>Add to basket</button>
    </div>
  )
}

export default Product