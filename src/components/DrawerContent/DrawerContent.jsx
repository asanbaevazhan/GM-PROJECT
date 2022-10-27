import React from 'react'
import { Link } from 'react-router-dom'
import './DrawerContent.scss'

import myprofile from './../../assets/side-bar-icons/my-account.svg'

function DrawerContent() {
  return (
    <div className='drawer-content'>

        <Link to="/my-profile" className='my-profile'>
            <img src={myprofile} alt="" />
            Моя страница
        </Link>

        <Link to="/my-friends">
            Мои друзья
        </Link>

        <Link to="/my-gifts">
            Мои подарки
        </Link>

        <Link to="/my-holidays">
            Мои праздники
        </Link>

        <Link to="/cart">
            Корзина
        </Link>

        <Link to="/help">
            Помощь
        </Link>

        <Link to="/about-us">
            О нас
        </Link>

    </div>
  )
}

export default DrawerContent