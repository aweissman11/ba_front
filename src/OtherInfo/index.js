import React from 'react';

// CSS
import './OtherInfo.css';
import Ceremony from '../Ceremony';

const OtherInfo = () => {
  return (
    <div className='other-info'>
      <Ceremony />
      <h1>Camping Resources</h1>
      <h3>Kit Rentals:</h3>
      <p><a href='www.rei.com' target='_blank' rel="noopener noreferrer">REI</a></p>
      <p><a href='www.mountainsidegearrental.com' target='_blank' rel="noopener noreferrer">Mountain Side Gear Rental</a></p>
      <p><a href='www.vitaloutdoors.com' target='_blank' rel="noopener noreferrer">Vital Outdoors</a></p>
    </div>
  );
}

export default OtherInfo;