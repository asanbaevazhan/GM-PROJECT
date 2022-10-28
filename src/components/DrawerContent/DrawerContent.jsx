import React from 'react'
import { Link } from 'react-router-dom'
import './DrawerContent.scss'

import myprofile from './../../assets/side-bar-icons/my-account.svg'
import myfriends from './../../assets/side-bar-icons/my-friends.svg'
import mygifts from './../../assets/side-bar-icons/gift.svg'
import myholidays from './../../assets/side-bar-icons/holidays.svg'
import help from './../../assets/side-bar-icons/help.svg'
import aboutus from './../../assets/side-bar-icons/aboutus.svg'

function DrawerContent() {
  return (
    <div className='drawer-content'>

        <Link to="/store-my-profile" className='my-profile'>
            <img src={myprofile} alt="" />
            Моя страница
        </Link>

        <Link to="/store-my-friends" className='my-profile'>
            <img src={myfriends} alt="" />
            Мои друзья
        </Link>

        <Link to="/store-my-gifts" className='my-profile'>
            <img src={mygifts} alt="" />
            Мои подарки
        </Link>

        <Link to="/store-my-holidays" className='my-profile'>
            <img src={myholidays} alt="" />
            Мои праздники
        </Link>

        <Link to="/store-help" className='my-profile'>
            <img src={help} alt="" />
            Помощь
        </Link>

        <Link to="/store-about-us" className='my-profile'>
            <img src={aboutus} alt="" />
            О нас
        </Link>

    </div>
  )
}

export default DrawerContent