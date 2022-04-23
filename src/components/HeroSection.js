import React from 'react';
import './HeroSection.scss';
import { Button } from './Button';
import '../App.scss'

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
      <h1>PENYANYI HANDAL</h1>
      <p>Bernyanyilah bersama kami</p>
      <div className="hero-btns">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          >
          WATCH TRIAL <i className='fa-solid fa-circle-play'/>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;