import './Navbar.css';
import {Link} from "react-router-dom";
import homeLogo from '../../assests/home.svg';
import calendarLogo from '../../assests/calendar.svg';
import infoLogo from '../../assests/bell.svg';
import user from '../../assests/bell.svg';

function Navbar() {
  return(
    <>
      <div className="navbar">
        <div className="container">
          <div className="navbar__menu">
            <ul>
              <li>
                <Link to="/">
                  <img src={homeLogo} alt="Home Logo" />
                </Link>
              </li>
              <li>
                <Link to="/calendar">
                  <img src={calendarLogo} alt="Calendar Logo" />
                </Link>
                </li>
              <li>
                <Link to="/info">
                  <img src={infoLogo} alt="Info Logo" />
                </Link>
              </li>
            </ul>
            <div className="navbar__user">
              <div className="navbar__user--image">

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ); 
}

export default Navbar;