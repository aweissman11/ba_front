import React, { useState, useEffect } from 'react';

// CSS
import './Header.css';
// components
import NavButtons from '../NavButtons';

const Header = () => {
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
    <div className={bigHeader ? 'header-container' : 'small-header'}>
      <h3 className={bigHeader ? 'c-a' : 'c-a hidden'}> Chelsey & Aaron's</h3>
      <h3 className={bigHeader ? 'b-a' : 'b-a hidden'}> Big Adventure</h3>
      <NavButtons />
      <h3 className={bigHeader ? 'holy-shit' : 'holy-shit hidden'}> Holy shit it's happening!!</h3>
      <h3 className={bigHeader ? 'header-date' : 'header-date hidden'}> July 4th, 2020</h3>
    </div >
  );
}

export default Header;