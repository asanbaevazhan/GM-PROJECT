import React from 'react'
import './Main.scss'
import { Link, animateScroll as scroll } from "react-scroll";
import PopularItems from './PopularItems/PopularItems';
import New from './New/New';
import Clothing from './Clothing/Clothing';

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
            to="new"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Новинки
          </Link>

          <Link
            className='nav-link nav-link-ltr'
            activeClass="active"
            to="clothing"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Одежда
          </Link>
          <Link
            className='nav-link nav-link-ltr'
            activeClass="active"
            to="accessories"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Аксессуары
          </Link>
          <Link
            className='nav-link nav-link-ltr'
            activeClass="active"
            to="home-decor"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Для дома
          </Link>
          <Link
            className='nav-link nav-link-ltr'
            activeClass="active"
            to="gadgets"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Гаджеты
          </Link>
        </div>

        <div className="popular">
          <h2>Хиты продаж</h2>
          <PopularItems/>
        </div>

        <div className="new" id='new'>
          <h2>Новинки</h2>
          <New/>
        </div>

        <div className="clothing" id='clothing'>
          <h2>Одежда</h2>
          <Clothing/>
        </div>
    </div>
  )
}

export default Main