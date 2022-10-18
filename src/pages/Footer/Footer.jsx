import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <div className='footer'>

      <div className='links'>

        <div className="link-one">
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
          <a href="#">Политика конфиденциальности</a>
        </div>

        <div className="link-two">
          <a href="#">Новости</a>
          <a href="#">FAQ</a>
          <a href="#">сообщить о проблеме</a>
        </div>

        <div className="email">
          <input type="email" name="" id="" placeholder='Email'/>
          <button type="submit">Подписаться</button>
        </div>
        
      </div>
        
    </div>
  )
}

export default Footer