import React from 'react'
import './Main.scss'
import { Link, animateScroll as scroll } from "react-scroll";
import { ArrowRightOutlined } from '@ant-design/icons';
import New from './New/New';
import Clothing from './Clothing/Clothing';
import Accessories from './Accessories/Accessories';
import HomeDecor from './HomeDecor/HomeDecor';
import Gadgets from './Gadgets/Gadgets';
import StoreHeader from '../../../components/StoreHeader/StoreHeader';
import { HomePage } from '../../home-page/home-page';
import { BackTop } from 'antd';

function Main() {
  return (
    <div className='main'>
      <StoreHeader/>
      
        <div className='main-bg'>
          <div className='main-text'>
            <h1>GiftMe</h1>
            <p>Вызываем улыбку на лице</p>
            <div>
              <button>Найти подарок</button>
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
          <HomePage/>
        </div>

        <div className="new" id='new'>
          <h2>Новинки</h2>
          <New/>
          <button className='view-btn'>Посмотреть все<ArrowRightOutlined /> </button>
        </div>

        <div className="clothing" id='clothing'>
          <h2>Одежда</h2>
          <Clothing/>
          <button className='view-btn'>Посмотреть все<ArrowRightOutlined /> </button>
        </div>
        
        <div className="accessories" id='accessories'>
          <h2>Аксессуары</h2>
          <Accessories/>
          <button className='view-btn'>Посмотреть все<ArrowRightOutlined /> </button>
        </div>

        <div className="home-decor" id='home-decor'>
          <h2>Для дома</h2>
          <HomeDecor/>
          <button className='view-btn'>Посмотреть все<ArrowRightOutlined /> </button>
        </div>

        <div className="gadgets" id='gadgets'>
          <h2>Гаджеты</h2>
          <Gadgets/>
          <button className='view-btn'>Посмотреть все<ArrowRightOutlined /> </button>
        </div>

        <BackTop>
          <div className='up'>Вверх</div>
        </BackTop>

        <div className="footer-store">
          <h1>GiftMe</h1>
        </div>
    </div>
  )
}

export default Main