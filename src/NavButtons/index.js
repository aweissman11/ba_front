import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// CSS
import './NavButtons.css';
import { NavChevIcon } from './NavChevIcon';


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
  let [nav9, setNav9] = useState('nav-out')

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
    if (window.innerWidth < 1040) {
      if (isChecked) {
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
        setNav9('nav-out')
      } else {
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
        window.setTimeout(() => setNav9('nav-item-in-place'), 400);
      }
    }
  }

  let [dropperClass1, setDropperClass1] = useState('undrop-ul');
  let [dropPosition1, setDropPosition1] = useState('undropped');
  let [chevPos1, setChevPos1] = useState('chev-up');

  let [dropperClass2, setDropperClass2] = useState('undrop-ul');
  let [dropPosition2, setDropPosition2] = useState('undropped');
  let [chevPos2, setChevPos2] = useState('chev-up');

  let [dropperClass3, setDropperClass3] = useState('undrop-ul');
  let [dropPosition3, setDropPosition3] = useState('undropped');
  let [chevPos3, setChevPos3] = useState('chev-up');

  const dropperClick = (dropperNum) => {
    if (window.innerWidth < 1040) {
      let newDropper;
      let newDropPos;
      let newChevPos;

      switch (dropperNum) {
        case 1:
          newDropper = dropperClass1 === 'undrop-ul' ? 'drop-ul1' : 'undrop-ul';
          newDropPos = dropPosition1 === 'undropped' ? 'drop-it' : 'undropped';
          newChevPos = chevPos1 === 'chev-up' ? 'chev-down' : 'chev-up';
          setDropperClass1(newDropper);
          setDropPosition1(newDropPos);
          setChevPos1(newChevPos);
          setDropperClass2('undrop-ul');
          setDropPosition2('undropped');
          setChevPos2('chev-up');
          setDropperClass3('undrop-ul');
          setDropPosition3('undropped');
          setChevPos3('chev-up');
          break;
        case 2:
          newDropper = dropperClass2 === 'undrop-ul' ? 'drop-ul2' : 'undrop-ul';
          newDropPos = dropPosition2 === 'undropped' ? 'drop-it' : 'undropped';
          newChevPos = chevPos2 === 'chev-up' ? 'chev-down' : 'chev-up';
          setDropperClass2(newDropper);
          setDropPosition2(newDropPos);
          setChevPos2(newChevPos);
          setDropperClass1('undrop-ul');
          setDropPosition1('undropped');
          setChevPos1('chev-up');
          setDropperClass3('undrop-ul');
          setDropPosition3('undropped');
          setChevPos3('chev-up');
          break;
        case 3:
          newDropper = dropperClass3 === 'undrop-ul' ? 'drop-ul3' : 'undrop-ul';
          newDropPos = dropPosition3 === 'undropped' ? 'drop-it' : 'undropped';
          newChevPos = chevPos3 === 'chev-up' ? 'chev-down' : 'chev-up';
          setDropperClass3(newDropper);
          setDropPosition3(newDropPos);
          setChevPos3(newChevPos);
          setDropperClass1('undrop-ul');
          setDropPosition1('undropped');
          setChevPos1('chev-up');
          setDropperClass2('undrop-ul');
          setDropPosition2('undropped');
          setChevPos2('chev-up');
          break;
        default:
          break;

      }
    }
  }

  return (<div className={'whole-header'}>
    <div className={isChecked ? 'hidden-header' : 'header-image'}>
    </div>
    <div className={'nav-box ' + fixedHeader}>
      <header className={'header'}>
        <Link className='logo-link' to="/" onClick={isChecked ? toggleScroll : () => { }}>
          <img
            alt='logo'
            className='logo-icon'
            src={require('../assets/camping-icon-tpbg.jpg')}
          />
          <span className='home-span'>HOME</span>
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
            className={'navver ' + nav2}
          >
            <Link
              onClick={toggleScroll}
              to={{ pathname: "/story" }}
            >
              OUR STORY
            </Link>
          </li>
          <li
            className={`navver ${nav3} dropper ${dropperClass1}`}
            onClick={() => dropperClick(1)}
          >
            <a className='dropper-link'>LOGISTICS <NavChevIcon classProp={`chev ${chevPos1}`} /> </a>
            <ul className={`${dropPosition1} dropdown`}>
              <li className='dropped-link'>
                <Link
                  className='no-border'
                  onClick={toggleScroll}
                  to={{ pathname: "/transportation" }}
                >
                  GETTING THERE
                </Link>
              </li>

              <li className='dropped-link'>
                <Link
                  className='no-border'
                  onClick={toggleScroll}
                  to={{ pathname: "/lodging" }}
                >
                  LODGING
                </Link>
              </li>

              <li className='dropped-link'>
                <Link
                  className='no-border'
                  onClick={toggleScroll}
                  to={{ pathname: "/campground" }}
                >
                  CAMPGROUND
                </Link>
              </li>

            </ul>
          </li>
          <li
            className={`navver  ${nav4} dropper ${dropperClass2}`}
            onClick={() => dropperClick(2)}
          >
            <a className='dropper-link'>WHAT TO BRING <NavChevIcon classProp={`chev ${chevPos2}`} /> </a>
            <ul className={`${dropPosition2} dropdown`}>
              <li className='dropped-link'>
                <Link
                  className='no-border'
                  onClick={toggleScroll}
                  to={{ pathname: "/stuff" }}
                >
                  GEAR
                </Link>
              </li>
              <li className='dropped-link'>
                <Link
                  className='no-border'
                  onClick={toggleScroll}
                  to={{ pathname: "/clothes" }}
                >
                  CLOTHES
                </Link>
              </li>
              <li className='dropped-link'>
                <Link
                  className='no-border'
                  onClick={toggleScroll}
                  to={{ pathname: "/dogs" }}
                >
                  BRIDAL PARTY
                </Link>
              </li>
            </ul>
          </li>

          <li
            className={`navver  ${nav5} dropper ${dropperClass3}`}
            onClick={() => dropperClick(3)}
          >
            <a className='dropper-link'>HAPPENINGS <NavChevIcon classProp={`chev ${chevPos3}`} /> </a>
            <ul className={`${dropPosition3} dropdown`}>
              <li className='dropped-link'>
                <Link
                  className='no-border'
                  onClick={toggleScroll}
                  to={{ pathname: "/events" }}
                >
                  EVENT SCHEDULE
                </Link>
              </li>
              <li className='dropped-link'>
                <Link
                  className='no-border'
                  onClick={toggleScroll}
                  to={{ pathname: "/todo" }}
                >
                  THINGS TO DO
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={'navver ' + nav6}
          >
            <Link
              onClick={toggleScroll}
              to={{ pathname: "/registry" }}
            >
              REGISTRY
            </Link>
          </li>
          <li
            className={'navver ' + nav7}
          >
            <Link
              onClick={toggleScroll}
              to={{ pathname: "/contact" }}
            >
              CONTACT
            </Link>
          </li>
          <li
            className={'navver ' + nav8}
          >
            <Link
              onClick={toggleScroll}
              to={{ pathname: "/rsvp" }}
            >
              RSVP
            </Link>
          </li>
        </ul>
      </header>
    </div>
  </div>);
}

export default NavButtons;