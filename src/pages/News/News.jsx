import React from 'react'
import './News.scss'

import img1 from './../../assets/img/sneakers.jpg'
import img2 from './../../assets/img/bag.jpg'
import img3 from './../../assets/img/knit.jpg'
import img4 from './../../assets/img/iphone.png'

import line from '../../assets/icons/Arrow 1.svg'

function News() {
  return (
    <div className='news' >
      <div className="background">
        <h2>Наши новости</h2>

        <div className="news-card">
          <div className="news-card-one">
            <img src={img1} alt="" />
            <h3>Подарки Недели</h3>
          </div>

          <div className="news-card-two">
            <img src={img2} alt="" />
            <h3>Подборка подарков</h3>
          </div>

          <div className="news-card-three">
            <img src={img3} alt="" />
            <h3>Подарки ручной работы</h3>
          </div>

          <div className="news-card-four">
            <img src={img4} alt="" />
            <h3>Самые желаемые подарки</h3>
          </div>
        </div>

        <a href="/registration" className='btn-line'>
          Перейти к новостям
          <img src={line} alt="" />
        </a>
      </div>
    </div>
  )
}

export default News