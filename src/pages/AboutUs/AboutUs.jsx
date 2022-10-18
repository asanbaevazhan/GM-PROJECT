import React from 'react'
import './AboutUs.scss'

import img1 from './../../assets/img/about-us-1.svg'
import img2 from './../../assets/img/about-us-2.svg'
import img3 from './../../assets/img/about-us-3.svg'

function AboutDraft() {
  return (
    <div className='about'>

      <div className="statistics">
          <div>
            <h3>20+</h3>
            <p>ежемесячных акций</p>
          </div>

          <div>
            <h3>200+</h3>
            <p>счастливых клиентов</p>
          </div>

          <div>
            <h3>1000+</h3>
            <p>найденных подарков</p>
          </div>
      </div>

      <div className="about-us">
            <h2>О нас</h2>
            <p>
                Наша команда создала современный онлайн сервис по подбору подарков, для пользователей ищущих уникальные товары. 
                Пользователи могут как размещать свои желаемые подарки так и делать подарки другим.
                Также делиться вещами, которые не используются, но могут пригодиться вашим друзьям.
            </p>
        </div>

        <div className="mission">
            <div className="mission-1">
                <img src={img1} alt="" />
                <p>Решение проблемы выбора подарка для близких</p>
            </div>

            <div className="mission-2">
            
                <h2>Наша Миссия</h2>

                <div className='mission-2-img'>
                    <p>Дать знать вашим друзьям ваш желаемый подарок</p>
                    <img src={img2} alt="" />
                </div>
                
            </div>

            <div className="mission-3">
                <img src={img3} alt="" />
                <p>Помочь разместить товары,которыми вы не пользуетесь,но могут пригодится другим</p>
            </div>

        </div>

        
      
    </div>
  )
}

export default AboutDraft