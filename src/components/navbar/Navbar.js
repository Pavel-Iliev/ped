import './Navbar.css';
import {NavLink} from "react-router-dom";
import homeLogo from '../../assests/home.svg';
import calendarLogo from '../../assests/calendar.svg';
import infoLogo from '../../assests/bell.svg';
import user from '../../assests/user.jpg';

function Navbar() {
  return(
    <>
      <div className="navbar">
        <div className="container">
          <div className="navbar__menu">
            <ul>
              <li>
                <NavLink to="/" exact={true} activeClassName="selected">
                  <img src={homeLogo} alt="Home Logo" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/calendar" activeClassName="selected">
                  <img src={calendarLogo} alt="Calendar Logo" />
                </NavLink>
                </li>
              <li>
                <NavLink to="/info" activeClassName="selected">
                  <img src={infoLogo} alt="Info Logo" />
                </NavLink>
              </li>
            </ul>
            <div className="navbar__user">
              <div className="navbar__user--image">
                <img src={user} alt="User img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ); 
}

export default Navbar;