import React from 'react'
import './MyProfile.scss'
import icons1 from '../../../assets/icons/facebook.svg'
import icons2 from '../../../assets/icons/instagram.svg'
import icons3 from '../../../assets/icons/twitter.svg'
import Ellipse21 from '../../../assets/img/Ellipse 21.png'
import ICON9 from '../../../assets/icons/icons8-отмена.svg'
import StoreHeader from '../../../components/StoreHeader/StoreHeader'
function MyProfile() {
  return (
    <div>
    <StoreHeader/>
    <div className='body-mypage'>
      <div className='profile-wrapper'>
        <div className='profiile-main'>
          <div className='profile-image'>
          <img src={Ellipse21} alt="an image"/>
          </div>
          <h1>Иван Иванов</h1>
          <p>Продукт Дизайнер <a href="#">@Ivanovmojo</a></p>
          <p>Дата рождения: 16.04.1994</p>
          <button>Редактировать</button>
          <div className='profile-icons'>
            <a><img src={icons1} alt="an icon"/></a>
            <a><img src={icons2} alt="an icon"/></a>
            <a><img src={icons3} alt="an icon"/></a>
          </div>
        </div>
        <div className='profile-wrapper-right'>
          <div className='under-wrapper-right'>
            <div className='right-content'>
              <p>Official information</p>
              <span>Email</span>
              <p>ivanov.ivan@gmail.com</p>
            </div>

            <div className='right-content'>
              <span>Phone number</span>
              <p>020-312-7865</p>
            </div>
            
            <div className='right-content'>
              <span>Adress</span>
              <p>968 Melvina colves,CA,Mountain view</p>
            </div>
          </div>
          <div className=' right-content2'>
            <div className='el-wrapper'>
              <p>Personal information</p>
              <span>Facebook</span>
              <a>Facebook.com/reck/ivanov...</a>
            </div>
            <div className='el-wrapper'>
              <span>Phone number</span>
              <p>977-783-0978</p>
            </div>
          </div>
          <div className='right-content3'>
            <p>About me </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, veritatis! Rerum laudantium ea pariatur animi perferendis minima fugiat. Assumenda dolor ullam fuga voluptatum enim tempora incidunt saepe pariatur minus voluptates!</p>
          </div>
        </div>
       
      </div>
      <footer>
          <div className='ADS-wrapper'>
          </div>
          <img src={ICON9} alt="an icon" />
      </footer>
    </div>
    </div>
  )
}

export default MyProfile