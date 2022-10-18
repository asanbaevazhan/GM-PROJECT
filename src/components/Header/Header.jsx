import React from 'react'
import './Header.scss'
import login from '../../assets/icons/login.svg'

import { useNavigate } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate('/');
  }
  return (
    <div className='header-two'>
       <div className='logo' onClick={handleLogo}>
        <p>GiftMe</p>
       </div>

       <div className="nav-bar">
          <Link
            className='nav-link nav-link-ltr'
            onClick={handleLogo}
            activeClass="active"
            to="/home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Главная
          </Link>

          <Link
            className='nav-link nav-link-ltr'
            onClick={handleLogo}
            activeClass="active"
            to="about-us"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            О нас
          </Link>

          <Link
            className='nav-link nav-link-ltr'
            onClick={handleLogo}
            activeClass="active"
            to="news"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Новости
          </Link>
       </div>

        <div className='login'>
            <a href="/login" >
                <img src={login} alt="" />
            </a>
        </div>

    </div>
  )
}

export default Header