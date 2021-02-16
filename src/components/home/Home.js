import './Home.css';
import calendarLogoYellow from '../../assests/calendar-yellow.svg';
import magazineLogo from "../../assests/magazine-logo.svg";
import PosturalSlider from '../PosturalSlider';
import WaitingListCard from '../waitingListCard/WaitingListCard';
import PosturalCardsDesktop from '../PosturalCardsDesktop';
import SeparatorImage from '../separatorImage/SeparatorImage';
import Avvisi from '../avvisi/Avvisi';
import SeparatorApp from '../separatorImage/SeparatorApp';
import '../magazine/Magazine.css'
import MagazineSlider from '../MagazineSlider';
import MagazineCardDesktop from '../MagazineCardsDesktop';
import Footer from '../footer/Footer';

import React, { useLayoutEffect, useState } from 'react';

function Home() {

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  return(
    <>
      <div className="home-header">
        <div className="container">
          <div className="home-header__left">
            <h2 className="title title-yellow">
              <img src={calendarLogoYellow} alt="Calendar Logo" />
              le tue prossime attività
            </h2>
            {
              (useWindowSize()[0] >= 768) ? 
                <PosturalCardsDesktop /> : 
                <PosturalSlider />
            }
          </div>
          <div className="home-header__right">
            <h2 className="title title-blue">
              hai 1 attività in lista d'attesa
            </h2>
            <WaitingListCard />
          </div>  
        </div>
      </div>
      <SeparatorImage />
      <Avvisi />
      <SeparatorApp />
      <div className="magazine">
        <div className="container">
            <h2 className="title title-blue">
              <div className="title-magazine__left">
                <img src={magazineLogo} alt="Magaziner Logo" />
                Magazine
              </div>
              <span className="title-orange">Vedi tutte</span>
            </h2>
            {
              (useWindowSize()[0] >= 768) ? 
                <MagazineCardDesktop /> : 
                <MagazineSlider />
            }
        </div>
      </div>  
      <Footer />
    </>
  ); 
}

export default Home;