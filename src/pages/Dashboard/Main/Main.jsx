import React from 'react'
import './Main.scss'
import { Link, animateScroll as scroll } from "react-scroll";

function Main() {
  return (
    <div className='main'>
        <div className='main-bg'>
          <div className='main-text'>
            <h1>GiftMe</h1>
            <p>Вызываем улыбку на лице</p>
            <div>
              <button>Искать подарок</button>
            </div>
          </div>
        </div>

        <div className="link-nav">
          <Link
            className='nav-link nav-link-ltr'
            activeClass="active"
            to="novelties"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Новинки
          </Link>
          
        </div>
    </div>
  )
}

export default Main