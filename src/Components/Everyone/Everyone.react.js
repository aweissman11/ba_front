import React, { useState, useEffect } from 'react';
import EveryonePasswordModal from './EveryonePasswordModal.react';
import FancyInput from '../Shared/Elements/FancyInput.react';
import { returnRsvps } from '../../utils/apiCalls';
import EveryoneTable from './EveryoneTable.react';
import { EventSignupList } from '../Shared/Data/EventSignupList';
import EveryoneEvents from './EveryoneEvents.react';

const Everyone = () => {
  let [accessModal, toggleAccessModal] = useState(false);
  let [password, enterPassword] = useState('');
  let [rsvps, setRsvps] = useState([]);

  useEffect(() => {
    // toggleAccessModal(true);
    getRSVPs();
  }, [])

  const passwordChangeHandler = (inputName, value) => {
    enterPassword(value);
  }

  const checkPassword = (e) => {
    e.preventDefault();
    if (password === 'hello') {
      toggleAccessModal(false);
      getRSVPs();
    }
  }

  const getRSVPs = async () => {
    let rsvpsReply = await returnRsvps();
    setRsvps(rsvpsReply);
  }

  const eventRsvps = () => {
    let eventsRsvps = EventSignupList.map(event => {
      let eventListItem = { ...event, attendees: [], number: 0 };
      rsvps.forEach(rsvp => {
        if (rsvp.events.includes(event.id)) {
          eventListItem.attendees.push({ partyName: rsvp.name, email: rsvp.email, partyNum: rsvp.people.length});
          eventListItem.number = (eventListItem.number + rsvp.people.length)
        }
      });
      return eventListItem;
    });
    return eventsRsvps;
  }

  return (
    <div className='events-page' style={{ overflow: 'scroll' }}>
      {accessModal ?
        <EveryonePasswordModal
          isVisible={toggleAccessModal}
          modalTitle='Enter Password to See RSVPs'
          miniModal
          modalContent={
            <form onSubmit={checkPassword}>
              <FancyInput
                hint="Password"
                inputName='password'
                inputChangeHandler={passwordChangeHandler}
                inputValue={password}
                key={'password'}
                passedKey={'password'}
                inputType='text'
              />
            </form>
          }
          tallButton
        />
        : null}

      <h1 className='invited'>List of Events</h1>
      {rsvps.length && eventRsvps().length ?
        <EveryoneEvents
          rsvps={eventRsvps()}
        />
      : null}

      <h1 className='invited'>List of Responses</h1>
      {rsvps.length ?
        <EveryoneTable
          rsvps={rsvps}
        />
        : null}

    </div>
  );
}

export default Everyone;

