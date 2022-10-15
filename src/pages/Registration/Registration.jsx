import React from 'react';
import './Registration.scss';
import Apple from '../../assets/img/apple.svg';
import Facebook from '../../assets/img/Facebook.svg';
import Vk from '../../assets/img/VK.svg';
import Google from '../../assets/img/Google.svg';
import line from '../../assets/img/lines.svg'
import { Link } from 'react-router-dom';

function Registration() {
  return (
    <div className='registration'>
      <div className='section-registration'>
        <div className='form-registration'>
          <div className='padding-form-registration'>
            <div className='registration-title'><h2>Регистрация</h2></div>
            <div className='input-registration'>
              <div className='input-reg'>
                <label htmlFor="email">Почта</label>
                <input type="email" />
              </div>
              <div className='input-reg'>
                <label htmlFor="password">Пароль</label>
                <input type="password" />
              </div>
              <div className='input-reg'>
                <label htmlFor="password">Повторите пароль</label>
                <input type="password" />
              </div>
            </div>
            <div className='sign-registration'>
                <button className='btn-registration'>Зарегистрироваться</button>
            </div>
            <div className='about-registration'>
              <div><p className='account-registration'>Уже есть аккаунт?</p></div>
              <div className='or-registration'>
                <img className='line-registration' src={line} alt="" />
              </div>
              <div className='login-sign'>
                <Link to='/login' className='login-help'>Зарегистрироваться с помощью</Link>
              </div>
            </div>
            <div className='link-app-registration'>
              <div><img src={Vk} alt="" /></div>
              <div><img src={Google} alt="" /></div>
              <div><img src={Facebook} alt="" /></div>
              <div><img src={Apple} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
      <div className='registration-footer'>
        <p className='logo-title-registration left-registration'>2022</p>
        <span className='logo-title-registration'>|</span>
        <p className='logo-title-registration'>gift me</p>
      </div>
    </div>
  )
}

export default Registration