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
    <ul className={bigHeader ? 'nav-buttons' : 'stickied-buttons'} >
      <li>Ceremony</li>
      <li>Reception</li>
      <li>After Party</li>
      <li>Camping Info</li>
      <li>
        <a href='https://www.rei.com/' target='_blank'>
          Registry
        </a>
      </li>
      <li>RSVP</li>
    </ul >
  );
}

export default NavButtons;