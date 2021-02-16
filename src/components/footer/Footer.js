import './Footer.css';
import facebook from '../../assests/facebook.svg';
import instagram from '../../assests/instagram.svg';
import youtube from '../../assests/youtube.svg';
import arrowBlue from '../../assests/arrow-blue.svg';
import flagIta from '../../assests/italy.svg';

function Footer() {
  return(
    <>  
      <footer>
        <div className="container">
          <ul>
            <li>
              <a href="/">
                <img src={facebook} alt="facebook logo" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={instagram} alt="instagram logo" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={youtube} alt="youtube logo" />
              </a>
            </li>
          </ul>
          <div className="lang">
            <img src={flagIta} alt="flag italy" />
            <span>Italiano</span>
            <img className="lang-arrow" src={arrowBlue} alt="arrow italy" />
          </div>
          <p>Made by <strong>PED</strong></p>
        </div>
      </footer>
    </>
  ); 
}

export default Footer;