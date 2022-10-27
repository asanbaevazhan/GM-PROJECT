import React from 'react'
import './CTA.scss'
import ctaImg from '../../assets/img/cta-img.jpg'
import ctaGiftOne from '../../assets/icons/icons8-create-48.png'
import ctaGiftTwo from '../../assets/icons/icons8-share-30.png'
import ctaGiftThree from '../../assets/icons/icons8-gift-24.png'

function CTA() {
  return (
    <div className='cta'>
        <h2 className='cta-headline'> 
          <span>GiftMe</span> сделает ваш список желаний реальностью!
        </h2>
        <div className='cta-section'>
            <img src={ctaImg} alt="" />
            <div className='cta-text'>
                <h2>Готовы попробовать <span>GiftMe</span> ?</h2>
                <p> <span>GiftMe</span> – это веб-сервис, где пользователи могут размещать свои желаемые подарки и делать подарки другим. А также делиться вещами, которые не используются, но могут пригодиться друзьям.</p>
                <a href="/registration">Присоединяйтесь сейчас</a>
            </div>
        </div>

        <div className='cta-block'>
          <div className="cta-block-one">
            <img src={ctaGiftOne} alt="" /> 
            Создайте список желаний
            </div>

          <div className="cta-block-two">
            <img src={ctaGiftTwo} alt="" /> 
            Поделитесь списком 
            </div>
          <div className="cta-block-three">
            <img src={ctaGiftThree} alt="" /> 
            Получайте подарки
            </div>
        </div>
        
    </div>
  )
}

export default CTA