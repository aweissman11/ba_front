import React from 'react';
import { Link } from 'react-router-dom';

// Data
import { events } from '../Shared/Data/Events';
// Styles
import './EventsPage.css';
import { OuterOutline, InnerOutline } from '../Shared/Styles/Shared.styled';
import CaawLogo from '../Shared/Elements/CaawLogo.react';
import SpacerDots from '../Shared/Elements/SpacerDots.react';

const EventsPage = () => {
  return (
    <div className="events-page">
      <CaawLogo />
      <SpacerDots />
      <h1 className="invited">
        Everyone and their dogs are welcome to all events
      </h1>
      <h2 className="events-invite">
        The campground is reserved from Wednesday, June 30th to Wednesday, July
        7th, 2021
      </h2>
      <h2 className="events-invite">
        You and your pups are invited to stay for as long as you'd like!
      </h2>

      <OuterOutline>
        <InnerOutline>
          {events.map((thing, i) => (
            <div className={'event-box'} key={i}>
              <div
                className={
                  'event-circle ' + (thing.event === 'Ceremony' && 'stand-out')
                }
              >
                <h3 className="event-event">{thing.event}</h3>
                <h3 className="info-type">{thing.food}</h3>
                <p className="info-info">{thing.time}</p>
                <p className="info-info">{thing.location}</p>
                <p className="info-type">Dress:</p>
                <p className="info-info">
                  <Link
                    to="/clothes"
                    style={{
                      color: thing.event === 'Ceremony' && '#0c1b23',
                    }}
                  >
                    {thing.dress}
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </InnerOutline>
      </OuterOutline>
    </div>
  );
};

export default EventsPage;
