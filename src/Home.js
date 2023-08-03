import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
       <div className='home_container'>
        <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

          
          <div className='home_row'><Product id="12345" title="The Lean Startup (How Constant Innovation Creates Radically Successful Businesses)" price={88.88} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={3}/>
          <Product id="23456" title="Apple AirPods Pro (2nd Generation) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio, MagSafe Charging Case, Bluetooth Headphones for iPhone" price={230} image="https://m.media-amazon.com/images/I/61f1YfTkTDL.__AC_SY445_SX342_QL70_FMwebp_.jpg" rating={4}/></div>
        <div className='home_row'>
        <Product id="34567" title="Amazon Basics 36-Pack AAA Alkaline High-Performance Batteries, 1.5 Volt, 10-Year Shelf Life" price={13} image="https://m.media-amazon.com/images/I/81F7OfBTCvL.__AC_SX300_SY300_QL70_FMwebp_.jpg" rating={3}/>
          <Product id="45678" title="Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID, All-Day Battery Life – Space Gray" price={256.68} image="https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL320_.jpg" rating={4}/>
          <Product id="56789" title="Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours of Listening Time, Built-in Microphone - Black (Latest Model)" price={118.68} image="https://m.media-amazon.com/images/I/51QxA-98Q+L._AC_UL320_.jpg" rating={3}/>
          

        </div>
        <div className='home_row'>
          <Product id="76876" title="ATYME 32-inch Class 60Hz 720p HD LED TV Flat Screen 1*USB 3* HDMI 1*VGA ARC Dual Channel 8W Speakers Monitor Television 320GM5HD" price={116} image="https://m.media-amazon.com/images/I/81Juoqh6lXL._AC_UY218_.jpg" rating={4}/>

        </div>
       </div>
    </div>
  )
}

export default Home