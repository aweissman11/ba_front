import React, { useState, useEffect } from 'react';
import { LoginButton, StyledInput, AddBtn, NewPerson, RsvpForm, SpaceBlock } from './RSVP.styled';
import FancyInput from '../Shared/FancyInput.react';
import { FancyCheckWrapper, FancyCheckLabel, FancyCheckboxCheck } from '../Shared/FancyCheckbox.styled';
import FancyCheckbox from '../Shared/FancyCheckbox.react';
import { AddButton, FancyButton } from '../Shared/FancyButton.react';
import { CenterIt, BasicH3, BasicText } from '../Shared/Shared.styled';

// TODO: Logout button
// TODO: delete person btn
// TODO: clean up styles
// TODO: change handlers
// TODO: hook up backend
// TODO: Create a modal

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
      <div className='name-outline'>
        <div className='inner-outline'>
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
              <SpaceBlock>
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
              </SpaceBlock>
              <FancyInput
                hint='How many dogs are you bringing?'
                inputName='dogs'
              />


              {/* TODO: change this to a calendar input */}
              <FancyInput
                hint='How many nights will you be staying?'
                inputName='nights'
              />


              <CenterIt>
                <BasicH3>Please let us know who is coming</BasicH3>
                <BasicText>(you included)</BasicText>
                <FancyButton handleClick={addPerson} btnLabel='Add Attendee' />
              </CenterIt>
              {peopleList.map((person, i) => (
                <NewPerson>
                  <FancyInput
                    hint='Full Name'
                    inputName='fullName'
                  />
                  <FancyCheckbox
                    id={'kid-check-' + i}
                    label='Is this a kid under 10?'
                  />
                  <FancyInput
                    hint='Alergies/dietary restrictions?'
                    inputName='allergies'
                  />
                  <FancyCheckbox
                    id={'hair-check-' + i}
                    label='Do you want yo hair did?'
                  />
                  <div>P INdex: {person.personIndex}</div>
                  <FancyButton handleClick={() => removePerson(i)} btnLabel='Remove Attendee' />
                </NewPerson>
              ))}

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

              <CenterIt>
                <FancyButton
                  handleClick={() => console.log('Events Sign Up')}
                  btnLabel='Events Attendance'
                />
                <FancyButton
                  handleClick={() => console.log('Jobs Sign Up')}
                  btnLabel='Help Sign Up'
                />
              </CenterIt>
            </RsvpForm>
          }
        </div>
      </div>
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
