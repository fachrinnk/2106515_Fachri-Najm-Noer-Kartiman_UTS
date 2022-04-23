import React from 'react'
import CardItem from './CardItem'
// import './Cards.scss';

function Cards() {
  return (
    <div className="cards">
      <h1>
        Cek Penyanyi Terbaik Kami
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src="/images/image-7.jpg"
              text="Explore Your Curious"
              label="Horor"
              path="./services"
            />
            <CardItem 
              src="/images/image-7.jpg"
              text="Explore Your Curious"
              label="Horor"
              path="./services"
            />
            <CardItem 
              src="/images/image-7.jpg"
              text="Explore Your Curious"
              label="Horor"
              path="./services"
            />
            <CardItem 
              src="/images/image-7.jpg"
              text="Explore Your Curious"
              label="Horor"
              path="./services"
            />
            <CardItem 
              src="/images/image-7.jpg"
              text="Explore Your Curious"
              label="Horor"
              path="./services"
            />
            <CardItem 
              src="/images/image-7.jpg"
              text="Explore Your Curious"
              label="Horor"
              path="./services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards