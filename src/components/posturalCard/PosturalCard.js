import './PosturalCard.css';
import clock from '../../assests/clock.svg';
import arrowBlue from '../../assests/arrow-blue.svg';

function PosturalCard() {
  return(
    <>  
      <div href="#" className="home-header__card">
        <div className="home-header__card--image">
          <img className="img-cover" src="/images/postural-training.jpg" alt="postural training" />
        </div>
        <div className="home-header__card--info">
          <div className="home-header__card--info-wrap">
            <h3 className="title-blue">Postural Training <img src={arrowBlue} alt="arrow card" /></h3>
            <span className="title-blue home-header__card--info-day">Oggi</span>
            <div className="home-header__card--clock">
              <ul>
                <li>18.00</li>
                <li>18.30</li>
              </ul>
              <span>
                <img src={clock} alt="Clock Logo" />
                30 min
              </span>
            </div>
            <div className="home-header__card--place-room">
              <p>
              <span>Club</span>
              Ravizza
              </p> 
              <p>
              <span>Sala</span>
              Conscious
              </p> 
            </div>
          </div>
        </div>
      </div>
    </>
  ); 
}

export default PosturalCard;