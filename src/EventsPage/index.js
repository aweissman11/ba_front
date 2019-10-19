import React from 'react';

// CSS
import './EventsPage.css';

const events = [
  {
    event: 'Friday Setup',
    time: 'Friday, July 3rd from 10a - 2p',
    location: 'Windy Point Campground',
    dress: 'camping casual'
  },
  {
    event: 'Friday BBQ',
    time: 'Friday, July 3rd from 5p - 730p',
    location: 'Windy Point Campground',
    dress: 'camping casual'
  },
  {
    event: 'Saturday Bagel Brunch',
    time: 'Saturday, July 4th from 8a - 11a',
    location: 'Windy Point Campground',
    dress: 'camping casual'
  },
  {
    event: 'Saturday PB&J bar',
    time: 'Saturday, July 4th from 12p - 2p',
    location: 'Windy Point Campground',
    dress: 'camping casual'
  },
  {
    event: 'Ceremony',
    time: 'Saturday, July 4th 230p SHARP',
    location: 'Windy Point Campground',
    dress: 'Black tie/campground formal (hiking boots encouraged)'
  },
  {
    event: 'Reception',
    time: 'Saturday, July 4th from 3p - Sunday',
    location: 'Windy Point Campground',
    dress: 'campground formal'
  },
  {
    event: 'Dinner',
    time: 'Saturday, July 4th from 5p - 730p',
    location: 'Windy Point Campground',
    dress: 'warmer clothes'
  },
  {
    event: 'Sunday Breakfast',
    time: 'Friday, July 3rd from 8a - 12p',
    location: 'Windy Point Campground',
    dress: 'camping casual'
  },
  {
    event: 'Cleanup',
    time: 'Friday, July 3rd from 12p on',
    location: 'Windy Point Campground',
    dress: 'camping casual'
  },
]

const EventsPage = () => {
  return (
    <div className='events-page'>
      <h1 className='invited'>Everyone is invited to all events</h1>
      <div className='name-outline'>
        <div className='inner-outline'>
          {events.map((thing, i) => (
            <div className='event-box' key={i}>
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