
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import React, { useEffect } from 'react';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

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
  }, [])

  return (
    <Router>
    <div className="app">
    {/* <Header/> */}
      <Routes>
        <Route path='/loginPage' element={<LoginPage/>}></Route>
        <Route path='/' element={<> <Header/><Home/></>}></Route>
        <Route path='/checkout' element={<><Header/><Checkout/></>}></Route>
      {/* <Header/> */}
      {/* <Home/> */}
      </Routes>
    </div>
    </Router>
  );
}

export default App;
