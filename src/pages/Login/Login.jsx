import React from 'react'
import './Login.scss';
import Line from '../../assets/img/Line.svg';
import Apple from '../../assets/img/apple.svg';
import Facebook from '../../assets/img/Facebook.svg';
import Vk from '../../assets/img/VK.svg';
import Google from '../../assets/img/Google.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login'>
      <div className='section-login'>
        <div className='form-login'>
          <div className='padding-form'>
            <div className='login-title'><h2>Логин</h2></div>
            <div className='input-login'>
              <div className='input'>
                <label htmlFor="email">Почта</label>
                <input type="email" />
              </div>
              <div className='input'>
                <label htmlFor="password">Пароль</label>
                <input type="password" />
              </div>
            </div>
            <div className='sign-login'>
                <button className='btn-login'>Войти</button>
            </div>
            <div className='about-login'>
              <div><p className='forgot-password'>забыли пароль</p></div>
              <div className='or'>
                <img className='line' src={Line} alt="" />
                или
                <img className='line' src={Line} alt="" />
              </div>
              <div>
                <Link to='/registration' className='registration-help'>Зарегистрироваться</Link>
              </div>
            </div>
            <div className='link-app'>
              <div><img src={Vk} alt="" /></div>
              <div><img src={Google} alt="" /></div>
              <div><img src={Facebook} alt="" /></div>
              <div><img src={Apple} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='login-footer'>
        <p className='logo-title left'>2022</p>
        <span className='logo-title'>|</span>
        <p className='logo-title'>gift me</p>
      </div> */}
    </div>
  )
}

export default Login