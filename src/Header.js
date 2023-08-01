import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function Header() {
    const[{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        <Link to='/'>
         <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='kch nhi.'/>
         </Link>
         <div className='header_search'>
            <input className='header_searchInput' type='text'/>
            <SearchIcon className='header_searchIcon'/>
         </div>
         <div className='header_nav'>
            <Link to={!user && '/loginPage'}>
            <div className='header_option' onClick={handleAuthentication}>
                <span className='header_optionOne'>
                  Hello {user?user.email:' User '}
                </span>
                <span className='header_optionTwo'>
                    {user?'Sign Out':'Sign In'}
                </span>
            </div>
            </Link>
            <div className='header_option'>
                <span className='header_optionOne'>
                   Returns 
                </span>
                <span className='header_optionTwo'>
                    & Orders
                </span>

            </div>
            <div className='header_option'>
                <span className='header_optionOne'>
                   Your 
                </span>
                <span className='header_optionTwo'>
                    Prime
                </span>

            </div>
                <Link to='/checkout'>
            <div className='header_basket'>
                <ShoppingCartOutlinedIcon />
                <span className='header_basketCount'>{basket?.length}</span>
            </div>
                </Link>
         </div>
    </div>
  )
}

export default Header