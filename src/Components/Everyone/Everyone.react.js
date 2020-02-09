import React, { useState, useEffect } from 'react';
import { OuterOutline, InnerOutline } from '../Shared/Styles/Shared.styled';
import EveryonePasswordModal from './EveryonePasswordModal.react';
import FancyInput from '../Shared/Elements/FancyInput.react';
import { returnRsvps } from '../../utils/apiCalls';
import OneRsvp from './OneRsvp.react';
import EveryoneTable from './EveryoneTable.react';

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

  return (
    <div className='events-page' style={{ overflow: 'scroll' }}>
      <h1 className='invited'>List of Responses</h1>
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

      {rsvps.length ?
        <EveryoneTable
          rsvps={rsvps}
        />
        : null}

    </div>
  );
}

export default Everyone;

