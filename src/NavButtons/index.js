import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './NavButtons.css';

const NavButtons = (props) => {
  return (<>
    <div className='header-image'>
    </div>
    <div className='nav-box'>
      <header className='header high'>
        <a href="/">
          <div className='logo-icon'></div>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
          <li><Link to={{ pathname: "/schedule" }}>Schedule</Link></li>
          <li><Link to={{ pathname: "/story" }}>Our Story</Link></li>
          <li><Link to={{ pathname: "/logistics" }}>Logistics</Link></li>
          <li><Link to={{ pathname: "/stuff" }}>What to bring</Link></li>
          <li><Link to={{ pathname: "/todo" }}>Things to do</Link></li>
          <li><a href='https://www.rei.com/' target='_blank' rel="noopener noreferrer">Registry</a></li>
          <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdGHs8Szep3Kau7LPRj1DhhYNgDSUi0xtVSfcjOq8l3ibyy-A/viewform?usp=sf_link" target='_blank' rel="noopener noreferrer"><b>RSVP</b></a></li>
        </ul>
      </header>
    </div>
  </>);
}

export default NavButtons;