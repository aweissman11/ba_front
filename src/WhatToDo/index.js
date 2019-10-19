import React, { useEffect } from 'react';

// CSS
import './WhatToDo.css';

const activities = [
  {
    activity: 'Boating',
    link: 'boats.com'
  },
  {
    activity: 'Hiking',
    link: 'boats.com'
  },
  {
    activity: 'Mountain Biking',
    link: 'boats.com'
  },
  {
    activity: 'Town',
    link: 'boats.com'
  },
  {
    activity: 'Campground Games',
    link: 'boats.com'
  },
  {
    activity: 'Eating',
    link: 'boats.com'
  },
]

const WhatToDo = () => {
  return (
    <div className='events-page'>
      <h1 className='invited'>There's lots to do!</h1>
      <div className='name-outline'>
        <div className='inner-outline'>
          {activities.map(thing => (
            <div className='event-box'>
              <h3 className='event-event'>{thing.activity}</h3>
              <p className='info-type'>Info:</p>
              <p className='info-info'><a href={thing.link}>Link</a></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatToDo;