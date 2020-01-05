import React from 'react';

// Data
import { events } from '../Shared/Data/Events';
// Styles
import './EventsPage.css';
import { OuterOutline, InnerOutline } from '../Shared/Styles/Shared.styled';

const EventsPage = () => {
  return (
    <div className='events-page'>
      <h1 className='invited'>Everyone and their dogs are welcome to all events</h1>
      <h2 className='events-invite'>The campground is reserved from June 26th to July 6th</h2>
      <h2 className='events-invite'>You and the pups are invited to stay for as long as you'd like!</h2>

      <OuterOutline>
        <InnerOutline>
          {events.map((thing, i) => (
            <div className={'event-box'} key={i}>
              <div className={'event-circle ' + (thing.event === 'Ceremony' && 'stand-out')}>
                <h3 className='event-event'>{thing.event}</h3>
                <h3 className='info-type'>{thing.food}</h3>
                <p className='info-info'>{thing.time}</p>
                <p className='info-info'>{thing.location}</p>
                <p className='info-type'>Dress:</p>
                <p className='info-info'>{thing.dress}</p>
              </div>
            </div>
          ))}
        </InnerOutline>
      </OuterOutline>
    </div>
  );
}

export default EventsPage;