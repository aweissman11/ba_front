import React, { useState, useEffect } from 'react';
import { LoginButton, NewPerson, RsvpForm } from './RSVP.styled';
import FancyInput from '../Shared/Elements/FancyInput.react';
import FancyCheckbox from '../Shared/Elements/FancyCheckbox.react';
import { FancyButton } from '../Shared/Elements/FancyButton.react';
import { CenterIt, BasicH3, BasicText, InnerOutline, OuterOutline } from '../Shared/Styles/Shared.styled';
import SpacerDots from '../Shared/Elements/SpacerDots.react';
import Attendee from './Attendee.react';
import ModalContainer from '../Shared/Elements/ModalContainer.react';
import HelpSignup from './HelpSignup.react';

// TODO: Logout button
// TODO: delete person btn
// TODO: clean up styles
// TODO: change handlers
// TODO: hook up backend
// TODO: Create a modal
// TODO: handleSubmit

const RSVP = (props) => {
  let blankInfo = {
    name: '',
    email: '',
    firstTime: false,
    people: [],
    lodging: 'tent',
    dogs: 0,
    nights: 2,
    jobs: [],
    carpool: {
      driver: false,
      spots: 0
    }
  }

  let [loggedIn, setLogin] = useState(true);
  let [peopleList, setPeople] = useState([]);
  let [rsvpInfo, changeRsvpInfo] = useState(blankInfo);
  let [eventsVisible, makeEventsVisible] = useState(false);
  let [helpVisible, makeHelpVisible] = useState(false);

  const addPerson = () => {
    let newPerson = {
      name: '',
      isKid: false,
      allergies: '',
      hairApt: false,
      personIndex: peopleList.length
    }

    peopleList = [...peopleList, newPerson];
    setPeople(peopleList);
  }

  const removePerson = (index) => {
    peopleList.splice(index, 1);
    peopleList = [...peopleList];
    setPeople(peopleList);
  }


  return (
    <div className='events-page'>
      <h1 className='invited'>We can't wait to see you!</h1>
      <OuterOutline>
        <InnerOutline>
          {!loggedIn ?
            <LoginButton onClick={() => setLogin(true)}>LOGIN</LoginButton>
            :
            <RsvpForm key={peopleList.length}>
              <FancyInput
                hint='Your name'
                inputName='name'
              />
              <FancyInput
                hint='Email Address'
                inputName='email'
              />
              <FancyCheckbox
                id='first'
                label='Is this your first time camping?'
              />
              <SpacerDots />
              <div>
                <BasicH3>What is your plan for lodging?</BasicH3>
                <FancyCheckbox
                  id='tent-check'
                  label='tent?'
                />
                <FancyCheckbox
                  id='rv-check'
                  label='rv?'
                />
                <FancyCheckbox
                  id='offsite-check'
                  label='offsite?'
                />
              </div>


              {/* TODO: change this to a calendar input */}
              <FancyInput
                hint='How many nights will you be staying?'
                inputName='nights'
              />

              <FancyInput
                hint='How many dogs are you bringing?'
                inputName='dogs'
              />

              <SpacerDots />

              <CenterIt
                noBottom
              >
                <BasicH3>Please let us know who is coming</BasicH3>
                <BasicText>(you included)</BasicText>
              </CenterIt>
              {peopleList.map((person, i) => (
                <Attendee
                  i={i}
                  removePerson={removePerson}
                />
              ))}

              <FancyButton
                handleClick={addPerson}
                btnLabel='Add Attendee'
                centerIt
              />

              <SpacerDots />

              <BasicH3>Carpooling</BasicH3>
              <FancyCheckbox
                id='driving-check'
                label='I have extra space in my car'
              />
              <FancyCheckbox
                id='riding-check'
                label='I need a ride'
              />
              <FancyInput
                hint='This many people/spaces'
                inputName='number-of-riders'
              />

              <SpacerDots />

              <CenterIt>
                <FancyButton
                  handleClick={() => makeEventsVisible(true)}
                  btnLabel='Events Attendance'
                />

                {eventsVisible ?
                  <ModalContainer
                    isVisible={eventsVisible}
                    modalTitle='Register for Events'
                    closeModal={() => makeEventsVisible(false)}
                  />
                  : null}

                <FancyButton
                  handleClick={() => makeHelpVisible(true)}
                  btnLabel='Help Sign Up'
                />

                {helpVisible ?
                  <ModalContainer
                    isVisible={helpVisible}
                    modalTitle='Sign up to help us out please!'
                    closeModal={() => makeHelpVisible(false)}
                    modalContent={<HelpSignup />}
                  />
                  : null}

              </CenterIt>
            </RsvpForm>
          }
        </InnerOutline>
      </OuterOutline>
    </div>
  );
}

export default RSVP;


            // user_id
            // email
            // name
            // group_names(a)
//   {name, isKid, dietary, hair }
                                // lodging(s)
//   {onsite: 'tent/rv/no', overnight_car }
                                // dogs
                                // nights
                                // events
                                // jobs
                                // carpool
//   {status: 'driver/rider', humans }
                                // first
