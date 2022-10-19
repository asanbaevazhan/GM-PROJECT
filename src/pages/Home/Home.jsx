import React from 'react'
import './Home.scss'

import gift1 from '../../assets/gift/Ellipse 1.png'
import gift2 from '../../assets/gift/Ellipse 2.png'
import gift3 from '../../assets/gift/Ellipse 3.png'

function Home() {
  return (
    <div className='home' id='home'>
      <div className="home2">
        <div className='headline'>
          <p>Создайте свой cписок желаний прямо сейчас</p>
          <h1>GiftMe</h1>
          <a href="/login">Узнать больше</a>
        </div>
      </div>

      <div className='img'>
        <img src={gift1} alt="" className='img-1'/>
        <img src={gift2} alt="" className='img-2'/>
        <img src={gift3} alt="" className='img-3'/>
      </div>
        
    </div>
  )
}

export default Home