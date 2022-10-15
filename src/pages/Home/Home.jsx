import React from 'react'
import './Home.scss'
import arrow from './../../assets/icons/Arrow 1.svg'
import AboutUs from '../AboutUs/AboutUs.jsx'
import Novelties from '../Novelties/Novelties.jsx'
import Footer from '../Footer/Footer.jsx'

function Home() {
  return (
    <div className='home' id='home'>
      <div className="home2">
        <h1>GIFTME</h1>
        <p>Что-то особенное для кого-то особенного</p>

        <div className='btn'>
          <button>Сделать подарок</button>
          <img src={arrow} alt="" />
        </div>
      </div>

      <AboutUs/>

      <Footer/>
        
    </div>
  )
}

export default Home