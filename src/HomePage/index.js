import React, { useEffect, useState } from 'react';

// CSS
import './HomePage.css';

const HomePage = () => {
  let [aaronClass, setAaronClass] = useState('aaron-off');
  let [chelsClass, setChelsClass] = useState('chels-off');
  let [dateClass, setDateClass] = useState('date-off');
  let [coordsClass, setCoordsClass] = useState('coords-off');

  useEffect(() => {
    window.setTimeout(() => {
      setAaronClass('aaron-move');
      setChelsClass('chels-move');
    }, 1500);

    window.setTimeout(() => {
      setDateClass('date-move');
    }, 1800);

    window.setTimeout(() => {
      setCoordsClass('coords-move');
    }, 2000);

  }, [])

  return (
    <div className='home-page'>
      <div className='name-outline'>
        <div className='inner-outline'>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;