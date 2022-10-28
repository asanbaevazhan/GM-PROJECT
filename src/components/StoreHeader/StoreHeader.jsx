import React from 'react'
import './StoreHeader.scss'
import { Link } from 'react-router-dom'

import cart from './../../assets/side-bar-icons/shopping-cart.svg'
import StoreDrawer from '../StoreDrawer/StoreDrawer'
import StoreSearch from '../StoreSearch/StoreSearch'
import SettingsDrawer from '../SettingsDrawer/SettingsDrawer'
import { CartBlock } from '../cart-block/cart-block'


function StoreHeader() {
  return (
    <div className='store-header'>
        <div className='store-logo'>
          <p>GiftMe</p>
          
          <div className='store-nav'>
               <Link to="/store-home" >Главная</Link>
               <Link to="/store-wishlist" >Список желаний</Link>
          </div>
       </div>

       <div className='store-sd'>
            <StoreSearch/>
            <CartBlock/>
            <SettingsDrawer/>
            <StoreDrawer/>
       </div>
      
    </div>
  )
}

export default StoreHeader