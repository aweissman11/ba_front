import React, { useEffect } from 'react';

// CSS
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className='name-outline'>
        <div className='inner-outline'>
          <div className='date'>July 4th, 2020</div>
          <div className='names'>
            <div className='name-block chels'>
              Chelsey<br />Anderson
          </div>
            <div className='ampersand'>&</div>
            <div className='name-block aaron'>
              Aaron<br />Weissman
          </div>
          </div>
          <div className='coordinates' >39°36'31.4"N, 106°02'43.7"W</div>
          <div className='windy'>Windy Point Campground CO</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;