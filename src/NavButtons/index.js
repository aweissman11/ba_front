import React, { useState, useEffect } from 'react';

// CSS
import './NavButtons.css';

const NavButtons = (props) => {
  const [bigHeader, setBigHeader] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])

  const handleScroll = (e) => {
    // console.log('e:', window.scrollY);
    if (window.scrollY > 136) {
      setBigHeader(false);
    } else {
      setBigHeader(true);
    }
  }
  return (<>
    <div className='header-image'>
    </div>
    <div className='nav-box'>
      <header className='header high'>
        <a href="/">
          <div className='logo-icon'></div>
        </a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          <li><a href="/schedule">Schedule</a></li>
          <li><a href="/story">Our Story</a></li>
          <li><a href="/logistics">Logistics</a></li>
          <li><a href="/stuff">What to bring</a></li>
          <li><a href="/todo">Things to do</a></li>
          <li><a href='https://www.rei.com/' target='_blank'>Registry</a></li>
          <li><a href="#rsvp"><b>RSVP</b></a></li>
        </ul>
      </header>
    </div>
  </>);
}

export default NavButtons;