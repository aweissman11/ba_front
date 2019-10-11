import React from 'react';

// CSS
import './Header.css';
// components
import NavButtons from '../NavButtons';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-bg-image'></div>
      <h3 className='c-a'>Chelsey & Aaron's</h3>
      <h3 className='b-a'>Big Adventure</h3>
      <NavButtons />
      <h3 className='holy-shit'>Holy shit it's happening!!</h3>
      <h3 className='header-date'>July 4th, 2020</h3>
    </div>
  );
}

export default Header;