import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom';
import login from './../../assets/icons/login.svg'

import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate('/');
  }
  return (
    <div className='header'>
       
       <div className='logo' onClick={handleLogo}>
        <p>GIFTME</p>
       </div>

       <div className="nav-bar">
          <Link to="/" className='nav-link nav-link-ltr'> Главная </Link>
          <Link to="/about-us" className='nav-link nav-link-ltr'> О нас </Link>
          <Link to="/novelties" className='nav-link nav-link-ltr'> Hовинки </Link>
       </div>

       <div className="login">
          <Link to="/login" className='nav-link nav-link-ltr'> 
            <img src={login} alt="" />
          </Link>
       </div>


    </div>
  )
}

export default Header