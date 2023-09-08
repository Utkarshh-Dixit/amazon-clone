
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51NbiYJSGAe30jpUNC3ZHDQehPnXuPFCJUmDKbSriFz0QVTt4Dy4Yy9KclHo3OBzsYfMHjwmkFpgBxFEtuV7DPJkC00zv8mH1S3');

function App() {
//eslint-disable-next-line
  const [{basket}, dispatch] = useStateValue();

  useEffect(() =>{
      
    auth.onAuthStateChanged(authUser=>{
      console.log("THE USER IS >>>>>", authUser);

      if(authUser){
         dispatch({
          type: 'SET_USER',
          user: authUser
         })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
         })
      }
    })
    //eslint-disable-next-line
  }, [])

  return (
    <Router>
    <div className="app">
    {/* <Header/> */}
      <Routes>
        <Route path='/loginPage' element={<LoginPage/>}></Route>
        <Route path='/' element={<> <Header/><Home/></>}></Route>
        <Route path='/payment' element={<> <Header/><Elements stripe={promise}><Payment/></Elements></>}></Route>
        <Route path='/checkout' element={<><Header/><Checkout/></>}></Route>
      {/* <Header/> */}
      {/* <Home/> */}
      </Routes>
    </div>
    </Router>
  );
}

export default App;
