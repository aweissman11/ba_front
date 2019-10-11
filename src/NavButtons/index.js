import React from 'react';

// CSS
import './NavButtons.css';

const NavButtons = (props) => {
  return (
    <ul className='nav-buttons'>
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