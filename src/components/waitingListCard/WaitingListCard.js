import './WaitingListCard.css';
import clock from '../../assests/clock.svg';
import arrowBlue from '../../assests/arrow-blue.svg'

function WaitingListCard() {
  return(
    <>  
      <div href="#" className="home-header__card waiting-list-card">
        <div className="home-header__card--image">
          <img className="img-cover" src="/images/postural-training.jpg" alt="postural training" />
        </div>
        <div className="home-header__card--info">
          <div className="home-header__card--info-wrap">
            <h3 className="title-blue">Pacafit <img src={arrowBlue} alt="arrow card" /></h3>
            <span className="title-blue home-header__card--info-day">Oggi</span>
            <div className="home-header__card--clock">
              <ul>
                <li>11.10</li>
                <li>11.55</li>
              </ul>
              <span>
                <img src={clock} alt="Clock Logo" />
                45 min
              </span>
            </div>
            <div className="home-header__card--place-room">
              <span className="title-orange">2 persone prime di te</span>
              <button className="btn btn-cancel">Annulla</button>
            </div>
          </div>
        </div>
      </div>
    </>
  ); 
}

export default WaitingListCard;