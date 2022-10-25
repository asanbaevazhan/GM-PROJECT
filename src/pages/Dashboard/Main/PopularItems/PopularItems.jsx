import React, {useState} from "react";
import './PopularItems.scss'
import Data from "../../Data/popular.json";
import Modal from '../../../../components/Modal/Modal.js'

function PopularItems() {
    const [modalActive, setModalActive] = useState(false)
  return (
    <div className="wish">
      <div className="wishlist" onClick={() => setModalActive(true)}>
        {Data.map((item) => (
          <div className="wishlist-card">
            <img className="wishlist-product" src={item.image} alt="" />
            <h3>{item.description}</h3>
            <p>{item.price}</p>
            <a className='btn' 
            
            >Подробнее
            </a>
          </div>
        ))}
        
      </div>
        <Modal active={modalActive} setActive={setModalActive}>
            <h2 className='card-about'>About Us</h2>
            <p className='card-modal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur rerum blanditiis vitae odio magni, architecto earum voluptatem facilis, dolores sequi quaerat aut similique est inventore iste necessitatibus cum ad assumenda.</p> 
            <button className='btn2'>SHOP NOW</button>
        </Modal>
    </div>
  );
}

export default PopularItems;