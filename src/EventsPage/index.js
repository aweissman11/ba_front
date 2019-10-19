import React, { useEffect } from 'react';

// CSS
import './EventsPage.css';

const EventsPage = () => {
  return (
    <div className='events-page'>
      <ul className='event-list'>
        <li>Friday BBQ</li>
        <li>Saturday Bagels</li>
        <li>Saturday PB&J</li>
        <li>Ceremony</li>
        <li>Dinner</li>
        <li>Reception</li>
        <li>Sunday Breakfast</li>
      </ul>
    </div>
  );
}

export default EventsPage;