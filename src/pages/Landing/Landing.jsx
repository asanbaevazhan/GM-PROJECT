import React from 'react'
import Home from '../Home/Home.jsx'
import AboutUs from '../AboutUs/AboutUs.jsx'
import CTA from '../../components/CTA/CTA.jsx'
import News from '../News/News.jsx'
import FinalCTA from '../../components/FinalCTA/FinalCTA.jsx'
import Footer from '../Footer/Footer.jsx'

function Main() {
  return (
    <div>
        <Home/>
        <AboutUs/>
        <CTA/>
        <News/>
        <FinalCTA/>
        <Footer/>
    </div>
  )
}

export default Main