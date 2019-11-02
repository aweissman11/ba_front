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

  let [nav1, setNav1] = useState('nav-out')
  let [nav2, setNav2] = useState('nav-out')
  let [nav3, setNav3] = useState('nav-out')
  let [nav4, setNav4] = useState('nav-out')
  let [nav5, setNav5] = useState('nav-out')
  let [nav6, setNav6] = useState('nav-out')
  let [nav7, setNav7] = useState('nav-out')
  let [nav8, setNav8] = useState('nav-out')

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])

  const handleScroll = (e) => {
    if (window.scrollY > 300) {
      setFixedHeader('fixed-header');
    } else {
      setFixedHeader('');
    }
  }

  const toggleScroll = () => {
    if (isChecked) {
      if (window.screen.width < 770) {
        toggleIsChecked(false)
        window.removeEventListener('scroll', noScroll);
        setNav1('nav-out')
        setNav2('nav-out')
        setNav3('nav-out')
        setNav4('nav-out')
        setNav5('nav-out')
        setNav6('nav-out')
        setNav7('nav-out')
        setNav8('nav-out')
      }
    } else {
      if (window.screen.width < 770) {
        toggleIsChecked(true)
        window.addEventListener('scroll', noScroll);
        setNav1('nav-item-in-place');
        window.setTimeout(() => setNav2('nav-item-in-place'), 50);
        window.setTimeout(() => setNav3('nav-item-in-place'), 100);
        window.setTimeout(() => setNav4('nav-item-in-place'), 150);
        window.setTimeout(() => setNav5('nav-item-in-place'), 200);
        window.setTimeout(() => setNav6('nav-item-in-place'), 250);
        window.setTimeout(() => setNav7('nav-item-in-place'), 300);
        window.setTimeout(() => setNav8('nav-item-in-place'), 350);
      }
    }

  }

  return (<div className={'whole-header'}>
    <div className={isChecked ? 'hidden-header' : 'header-image'}>
    </div>
    <div className={'nav-box ' + fixedHeader}>
      <header className={'header'}>
        <Link className='logo-link' to="/">
          <img
            alt='logo'
            className='logo-icon'
            src={require('../assets/camping-icon-tpbg.jpg')}
          />
        </Link>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          checked={isChecked}
          onChange={toggleScroll}
        />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
          <li
            className={'navver ' + nav1}
            onClick={toggleScroll}
          >
            <Link to={{ pathname: "/events" }}>EVENTS</Link>
          </li>
          <li
            className={'navver ' + nav2}
            onClick={toggleScroll}
          >
            <Link to={{ pathname: "/story" }}>OUR STORY</Link>
          </li>
          <li
            className={'navver ' + nav3}
            onClick={toggleScroll}
          >
            <Link to={{ pathname: "/logistics" }}>LOGISTICS</Link>
          </li>
          <li
            className={'navver ' + nav4}
            onClick={toggleScroll}
          >
            <Link to={{ pathname: "/stuff" }}>WHAT TO BRING</Link>
          </li>
          <li
            className={'navver ' + nav5}
            onClick={toggleScroll}
          >
            <Link to={{ pathname: "/todo" }}>THINGS TO DO</Link>
          </li>
          <li
            className={'navver ' + nav6}
            onClick={toggleScroll}
          >
            <Link to={{ pathname: "/clothes" }}>CLOTHES</Link>
          </li>
          <li
            className={'navver ' + nav7}
            onClick={toggleScroll}
          >
            <a href='https://www.rei.com/' target='_blank' rel="noopener noreferrer">REGISTRY</a>
          </li>
          <li
            className={'navver ' + nav8}
            onClick={toggleScroll}
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGHs8Szep3Kau7LPRj1DhhYNgDSUi0xtVSfcjOq8l3ibyy-A/viewform?usp=sf_link" target='_blank' rel="noopener noreferrer">
              <b>RSVP</b>
            </a>
          </li>
        </ul>
      </header>
    </div>
  </div>);
}

export default NavButtons;