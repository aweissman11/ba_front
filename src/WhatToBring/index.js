import React, { useEffect } from 'react';

// CSS
import './WhatToBring.css';

const lists = [
  {
    who: 'For Everyone',
    what: [
      'Headlamp/flashlight',
      'Bug Spray',
      'Sunscreen',
      'Warm clothes'
    ]
  },
  {
    who: 'For Tenters',
    what: [
      'Tent',
      'Sleeping bag',
      'Sleeping pad',
      'Extra flashlight/lantern',
      'Extra batteries'
    ]
  },
  {
    who: "For RV'rs",
    what: [
      'RV',
      'Generator/power source (if needed)',
      'Extra flashlight/lantern',
      'Extra batteries'
    ]
  },
];

const WhatToBring = () => {
  return (
    <div className='events-page'>
      <h1 className='invited'>Please come prepared with the following</h1>
      <div className='name-outline'>
        <div className='inner-outline'>
          {lists.map(list => (
            <div className='event-box'>
              <h3 className='event-event'>{list.who}</h3>
              <p className='info-type'>Don't forget the following:</p>
              {list.what.map(item => (<>
                <p>{item}</p>
              </>))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatToBring;