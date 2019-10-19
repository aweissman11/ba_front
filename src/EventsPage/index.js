import React, { useEffect } from 'react';

// CSS
import './EventsPage.css';

const events = [
  {
    event: 'Friday Setup',
    time: 'Friday, July 3rd from 10a - 2p',
    location: 'Windy Point Campground',
    dress: 'super casual'
  },
  {
    event: 'Friday BBQ',
    time: 'Friday, July 3rd from 5p - 730p',
    location: 'Windy Point Campground',
    dress: 'super casual'
  },
  {
    event: 'Saturday Bagel Brunch',
    time: 'Friday, July 3rd from 10a - 2p',
    location: 'Windy Point Campground',
    dress: 'super casual'
  },
  {
    event: 'Saturday PB&J bar',
    time: 'Friday, July 3rd from 10a - 2p',
    location: 'Windy Point Campground',
    dress: 'super casual'
  },
  {
    event: 'Ceremony',
    time: 'Friday, July 3rd from 10a - 2p',
    location: 'Windy Point Campground',
    dress: 'super casual'
  },
  {
    event: 'Dinner',
    time: 'Friday, July 3rd from 10a - 2p',
    location: 'Windy Point Campground',
    dress: 'super casual'
  },
  {
    event: 'Reception',
    time: 'Friday, July 3rd from 10a - 2p',
    location: 'Windy Point Campground',
    dress: 'super casual'
  },
  {
    event: 'Sunday Breakfast',
    time: 'Friday, July 3rd from 10a - 2p',
    location: 'Windy Point Campground',
    dress: 'super casual'
  },
  {
    event: 'Cleanup',
    time: 'Friday, July 3rd from 10a - 2p',
    location: 'Windy Point Campground',
    dress: 'super casual'
  },
]

const EventsPage = () => {
  return (
    <div className='events-page'>
      <h1 className='invited'>Everyone is invited to all events</h1>
      <div className='name-outline'>
        <div className='inner-outline'>
          {events.map(thing => (
            <div className='event-box'>
              <h3 className='event-event'>{thing.event}</h3>
              <p className='info-type'>When:</p>
              <p className='info-info'>{thing.time}</p>
              <p className='info-type'>Location:</p>
              <p className='info-info'>{thing.location}</p>
              <p className='info-type'>Dress:</p>
              <p className='info-info'>{thing.dress}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventsPage;