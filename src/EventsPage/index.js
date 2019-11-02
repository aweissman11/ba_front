import React from 'react';

// CSS
import './EventsPage.css';

const events = [
  {
    event: 'Setup and Drinks',
    food: '',
    time: 'Friday, July 3rd from 10a - 2p',
    location: 'Windy Point Campground',
    dress: 'camping casual'
  },
  {
    event: 'Rehearsal BBQ',
    food: 'Burgers and dogs provided',
    time: 'Friday, July 3rd from 5p - 730p',
    location: 'Windy Point Campground',
    dress: 'camping casual'
  },
  {
    event: 'Morning Yoga',
    food: 'Get ready to sweat',
    time: 'Saturday, July 4th from 7a - 8a',
    location: 'Windy Point Beach',
    dress: 'warm yoga casual'
  },
  {
    event: 'Bagel Brunch',
    food: 'Bagels and coffee provided',
    time: 'Saturday, July 4th from 8a - 11a',
    location: 'Windy Point Campground',
    dress: 'camping casual'
  },
  {
    event: 'PB&J bar',
    food: 'Lunch provided',
    time: 'Saturday, July 4th from 12p - 2p',
    location: 'Windy Point Campground',
    dress: 'camping casual'
  },
  {
    event: 'Ceremony',
    food: '',
    time: 'Saturday, July 4th 230p',
    location: 'Windy Point Campground',
    dress: 'Black tie/campground formal (hiking boots encouraged)'
  },
  {
    event: 'Dinner',
    food: 'Taco taco burrito burrito',
    time: 'Saturday, July 4th from 5p - 730p',
    location: 'Windy Point Campground',
    dress: 'warmer clothes'
  },
  {
    event: 'Reception',
    food: 'Eat beer',
    time: 'Saturday, July 4th from 3p - Sunday',
    location: 'Windy Point Campground',
    dress: 'campground formal'
  },
  {
    event: 'Fire',
    food: 'Fireworks, Bonfires, and Fire dance moves',
    time: 'Saturday, July 4th from 10p - Sunday',
    location: 'Windy Point firepit',
    dress: 'Very warm clothes'
  },
  {
    event: 'Breakfast Burritos',
    food: 'Breakfast and coffee provided',
    time: 'Sunday, July 5th from 8a - 12p',
    location: 'Windy Point Campground',
    dress: 'camping casual'
  },
  {
    event: 'Cleanup/Breakdown',
    food: 'Help us eat/drink the leftovers',
    time: 'Sunday, July 5th from 12p on',
    location: 'Windy Point Campground',
    dress: 'camping casual'
  },
]

const EventsPage = () => {
  return (
    <div className='events-page'>
      <h1 className='invited'>Everyone is welcome to all events</h1>
      <h2 className='events-invite'>The campground is reserved from June 26th to July 6th</h2>
      <h2 className='events-invite'>You are invited to stay for as long as you'd like!</h2>

      <div className='name-outline'>
        <div className='inner-outline'>
          {events.map((thing, i) => (
            <div className='event-box' key={i}>
              <div className='event-circle'>
                <h3 className='event-event'>{thing.event}</h3>
                <h3 className='info-type'>{thing.food}</h3>
                <p className='info-info'>{thing.time}</p>
                <p className='info-info'>{thing.location}</p>
                <p className='info-type'>Dress:</p>
                <p className='info-info'>{thing.dress}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventsPage;