import React, { useEffect, useState } from 'react';

// CSS
import './HomePage.css';
import { OuterOutline, InnerOutline } from '../Shared/Styles/Shared.styled';
import CaawLogo from '../Shared/Elements/CaawLogo.react';
import SpacerDots from '../Shared/Elements/SpacerDots.react';

const HomePage = () => {
  let [aaronClass, setAaronClass] = useState('aaron-off');
  let [chelsClass, setChelsClass] = useState('chels-off');
  let [dateClass, setDateClass] = useState('date-off');
  let [coordsClass, setCoordsClass] = useState('coords-off');

  useEffect(() => {
    window.setTimeout(() => {
      setAaronClass('aaron-move');
      setChelsClass('chels-move');
    }, 500);

    window.setTimeout(() => {
      setDateClass('date-move');
    }, 800);

    window.setTimeout(() => {
      setCoordsClass('coords-move');
    }, 1000);

  }, [])

  return (
    <div className='home-page'>
      <OuterOutline>
        <InnerOutline>
          <div className={'date ' + dateClass}>
            <p>07</p>
            <p>04</p>
            <p>20</p>
          </div>
          <div className='names'>
            <div className={'name-block chels ' + chelsClass}>
              CHELSEY<br />ANDERSON
          </div>
            <div className='ampersand'>&</div>
            <div className={'name-block aaron ' + aaronClass}>
              AARON<br />WEISSMAN
          </div>
          </div>
          <div className={'location-info ' + coordsClass}>
            <div className='coordinates' >39°36'31.4"N, &nbsp; &nbsp; 106°02'43.7"W</div>
            <div className='windy'>DILLON, CO</div>
            <div className='windy'>We're getting married and you're invited!</div>
          </div>
        </InnerOutline>
      </OuterOutline>
      <SpacerDots />
      <CaawLogo />
    </div>
  );
}

export default HomePage;