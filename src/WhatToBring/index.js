import React from 'react';

// CSS
import './WhatToBring.css';

const lists = [
  {
    who: 'For Everyone',
    what: [
      'Headlamp/flashlight',
      'Bug Spray',
      'Sunscreen',
      'Water Bottle',
      'Rain coat',
      'Warm clothes',
      'Sandals',
      'Sun glasses',
      'Hiking boots',
      'Beer coozie',
      'Grit'
    ]
  },
  {
    who: 'For Tenters',
    what: [
      'Tent',
      '(unless you are renting this through Outdoors Geek)',
      'Sleeping bag',
      '(unless you are renting this through Outdoors Geek)',
      'Sleeping pad',
      '(unless you are renting this through Outdoors Geek)',
      'Extra flashlight/lantern',
      'Extra batteries',
      'Phone battery pack',
      'Pillow',
      "Don't forget to bring a towel"
    ]
  },
  {
    who: "For RV'rs",
    what: [
      'RV',
      'Generator/power source (if needed)',
      'Extra flashlight/lantern',
      'Extra batteries',
      'Double check with the rental place to see if they reccomend anything else',
      'Phone battery pack'
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
            <div className='what-box'>
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