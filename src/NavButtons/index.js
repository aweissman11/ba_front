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
  return (
    <div className={bigHeader ? 'low-nav-box' : 'high-nav-box'} >
      <header className={bigHeader ? 'header low' : 'header high'} >
        <a href="" class="logo">Our Adventure</a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          <li><a href="#events">Events</a></li>
          <li><a href="#campaing">Camping</a></li>
          <li><a href='https://www.rei.com/' target='_blank'>Registry</a></li>
          <li><a href="#rsvp">RSVP</a></li>
        </ul>
      </header>
    </div>
  );
}

export default NavButtons;