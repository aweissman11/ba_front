import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// CSS
import './NavButtons.css';


const noScroll = () => {
  window.scrollTo(0, 0);
}

const NavButtons = (props) => {
  let [fixedHeader, setFixedHeader] = useState('');
  let [isChecked, toggleIsChecked] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])
  const handleScroll = (e) => {
    // console.log('e:', window.scrollY);
    if (window.scrollY > 300) {
      setFixedHeader('fixed-header');
    } else {
      setFixedHeader('');
    }
  }

  const toggleScroll = () => {
    if (isChecked) {
      console.log('allowed to scroll');
      window.removeEventListener('scroll', noScroll);
      toggleIsChecked(false)
    } else {
      console.log('NO scroll');
      window.addEventListener('scroll', noScroll);
      toggleIsChecked(true)
    }

  }

  return (<div className={'whole-header'}>
    <div className={isChecked ? 'hidden-header' : 'header-image'}>
    </div>
    <div className={'nav-box ' + fixedHeader}>
      <header className={'header'}>
        <a className='logo-link' href="/">
          <img
            alt='logo'
            className='logo-icon'
            src={require('../assets/camping-icon-tpbg.jpg')}
          />
        </a>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          checked={isChecked}
          onChange={toggleScroll}
        />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
          <li onClick={toggleScroll}><Link to={{ pathname: "/schedule" }}>Schedule</Link></li>
          <li onClick={toggleScroll}><Link to={{ pathname: "/story" }}>Our Story</Link></li>
          <li onClick={toggleScroll}><Link to={{ pathname: "/logistics" }}>Logistics</Link></li>
          <li onClick={toggleScroll}><Link to={{ pathname: "/stuff" }}>What to bring</Link></li>
          <li onClick={toggleScroll}><Link to={{ pathname: "/todo" }}>Things to do</Link></li>
          <li onClick={toggleScroll}><a href='https://www.rei.com/' target='_blank' rel="noopener noreferrer">Registry</a></li>
          <li onClick={toggleScroll}><a href="https://docs.google.com/forms/d/e/1FAIpQLSdGHs8Szep3Kau7LPRj1DhhYNgDSUi0xtVSfcjOq8l3ibyy-A/viewform?usp=sf_link" target='_blank' rel="noopener noreferrer"><b>RSVP</b></a></li>
        </ul>
      </header>
    </div>
  </div>);
}

export default NavButtons;