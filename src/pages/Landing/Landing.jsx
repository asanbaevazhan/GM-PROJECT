import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home.jsx'
import AboutUs from './AboutUs/AboutUs.jsx'
import CTA from '../../components/CTA/CTA.jsx'
import News from './News/News.jsx'
import FinalCTA from '../../components/FinalCTA/FinalCTA.jsx'
import Footer from './Footer/Footer.jsx'
import TopHeader from '../../components/TopHeader/TopHeader.jsx'
import Header from '../../components/Header/Header.jsx'

function Landing() {
  return (
    <div>
        <TopHeader/>
        <Header/>
        <Home/>
        <AboutUs/>
        <CTA/>
        <News/>
        <FinalCTA/>
        <Footer/>
    </div>
  )
}

export default Landing