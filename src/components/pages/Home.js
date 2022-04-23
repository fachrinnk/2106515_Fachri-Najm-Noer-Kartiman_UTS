import React from 'react';
import '../../App.scss';
import Cards from '../Cards';
import '../Cards.scss';
import HeroSection from '../HeroSection';



function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}
export default Home;