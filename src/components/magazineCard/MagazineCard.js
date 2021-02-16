import './MagazineCard.css';
import arrowBlue from '../../assests/arrow-blue.svg';

function MagazineCard() {
  return(
    <>  
      <div href="#" className="magazine__card">
        <div className="magazine__card--image">
          <img className="img-cover" src="/images/magazine.jpg" alt="postural training" />
        </div>
        <div className="magazine__card--info">
          <div className="magazine__card--info-wrap">
            <h3 className="title-orange">Gli eventi di dicembre e gennaio</h3>
            <div className="magazine__card--info-arrow">
              <img src={arrowBlue} alt="arrow card" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <span>16/12/2019</span>
          </div>
        </div>
      </div>
    </>
  ); 
}

export default MagazineCard;