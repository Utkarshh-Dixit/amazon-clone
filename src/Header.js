import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
         <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='kch nhi.'/>
         <div className='header_search'>
            <input className='header_searchInput' type='text'/>
         </div>
         <div className='header_nav'>
            <div className='header_option'>
                <span className='header_option1'>
                   Hello User 
                </span>
                <span className='header_option1'>
                    Sign in
                </span>
            </div>
            <div className='header_option'>
                <span className='header_option1'>
                   Returns 
                </span>
                <span className='header_option1'>
                    & Orders
                </span>

            </div>
            <div className='header_option'>
                <span className='header_option1'>
                   Your 
                </span>
                <span className='header_option1'>
                    Prime
                </span>

            </div>
         </div>
    </div>
  )
}

export default Header