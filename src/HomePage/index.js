import React from 'react';

// CSS
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className='name-outline'>
        <div className='inner-outline'>
          <div className='date'>
            <p>07</p>
            <p>04</p>
            <p>20</p>
          </div>
          <div className='names'>
            <div className='name-block chels'>
              CHELSEY<br />ANDERSON
          </div>
            <div className='ampersand'>&</div>
            <div className='name-block aaron'>
              AARON<br />WEISSMAN
          </div>
          </div>
          <div className='coordinates' >39°36'31.4"N, &nbsp; &nbsp; 106°02'43.7"W</div>
          <div className='windy'>DILLON, CO</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;