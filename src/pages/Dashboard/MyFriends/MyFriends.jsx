import React from 'react'
import './MyFriends.scss'
import Ellipse from '../../../assets/img/Ellipse 21.png'
import Ellipse1 from '../../../assets/img/Ellipse 22.png'
import Ellipse2 from '../../../assets/img/Ellipse 23.png'
import Ellipse3 from '../../../assets/img/Ellipse 24.png'
import Ellipse4 from '../../../assets/img/Ellipse 25.png'
import Rectangle1 from '../../../assets/img/Rectangle1.png'
import Rectangle2 from '../../../assets/img/Rectangle2.png'
import Rectangle3 from '../../../assets/img/Rectangle3.png'
import Rectangle4 from '../../../assets/img/Rectangle4.png'

function MyFriends() {
  return (
    <div className='profile-body'>
        <header className='profile-header'>
                <div className='image-profile'>
                  <img src={Ellipse} alt="an image" />
                </div>
                <div className='text-profile'>
                  <h1>Иван Иванов</h1>
                  <span>Друзья: 4</span>
                  <div className='profile-image-mini'>
                    <img className='img1' src={Ellipse1} alt="an image" />
                    <img className='img2' src={Ellipse2} alt="an image" />
                    <img className='img3' src={Ellipse3} alt="an image" />
                    <img className='img4' src={Ellipse4} alt="an image" />
                  </div>
                </div>
        </header>
        <main>
          <div>
            <nav className='nav-panel'>
                    <a href="#">Все друзья</a>
                    <a href="#">Рекомендованные</a>
                    <a href="#">Мои праздники</a>
                    <a href="#">Список желаний</a>
            </nav>
          </div>
          <div className='image-Rectangle'>
            <div className='under-rectangle'>
              <img src={Rectangle1} alt="an image" />
              <span>Златан,35 лет</span>
              <button>Подарить подарок</button>
              <button>Удалить из друзей</button>
            </div>
            <div className='under-rectangle'>
              <img src={Rectangle2} alt="an image" />
              <span>Роберт,38 лет</span>
              <button>Подарить подарок</button>
              <button>Удалить из друзей</button>
            </div>
            <div className='under-rectangle'>
              <img src={Rectangle3} alt="an image" />
              <span>Пауло,29 лет</span>
              <button>Подарить подарок</button>
              <button>Удалить из друзей</button>
            </div>
            <div className='under-rectangle'>
              <img src={Rectangle4} alt="an" />
              <span>Тони,32 года</span>
              <button>Подарить подарок</button>
              <button>Удалить из друзей</button>
            </div>
          </div>
        </main>

    </div>
  );
}

export default MyFriends