import './Home.css';
import calendarLogoYellow from '../../assests/calendar-yellow.svg';
import PosturalCard from '../posturalCard/PosturalCard';
import PosturalSlider from '../PosturalSlider';
import WaitingListCard from '../waitingListCard/WaitingListCard'
import PosturalCardsDesktop from '../PosturalCardsDesktop';

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
    </>
  ); 
}

export default Home;