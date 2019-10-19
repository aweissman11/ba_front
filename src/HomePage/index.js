import React, { useEffect } from 'react';

// CSS
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className='names'>
        <h1>Chelsey Anderson</h1>
        <h1>&</h1>
        <h1>Aaron Weissman</h1>
      </div>
      <h1>39°36'31.4"N, 106°02'43.7"W</h1>
      <h1>July 4th, 2020</h1>
      <h1>Tying the knot</h1>
    </div>
  );
}

export default HomePage;