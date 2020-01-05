import React, { useState, useEffect } from 'react';
import useForceUpdate from 'use-force-update';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import { LoginButton, RsvpForm, DateHolder, BoxIt } from './RSVP.styled';
import FancyInput from '../Shared/Elements/FancyInput.react';
import FancyCheckbox from '../Shared/Elements/FancyCheckbox.react';
import { FancyButton } from '../Shared/Elements/FancyButton.react';
import { CenterIt, BasicH3, BasicText, InnerOutline, OuterOutline } from '../Shared/Styles/Shared.styled';
import SpacerDots from '../Shared/Elements/SpacerDots.react';
import Attendee from './Attendee.react';
import ModalContainer from '../Shared/Elements/ModalContainer.react';
import HelpSignup from './HelpSignup.react';
import EventSignup from './EventSignup.react';
import Song from './Song.react';

// TODO: Logout button
// TODO: hook up backend and handleSubmit


export const RSVP = (props) => {
  const forceUpdate = useForceUpdate();

  let blankInfo = {
    name: '',
    email: '',
    firstTime: false,
    people: [],
    lodging: 'tent',
    dogs: '',
    arrival: new Date('June 26, 2020'),
    events: [],
    chores: [],
    driving: 'full',
    spots: '',
    songs: []
  }

  useEffect(() => {
    window.addEventListener('keypress', submitOnEnter);

    return () => {
      window.removeEventListener('keypress', submitOnEnter);
    }
  }, []);

  const submitOnEnter = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      openSaveModal(true);
    }
  }

  let [loggedIn, setLogin] = useState(true);
  let [rsvpInfo, changeRsvpInfo] = useState(blankInfo);
  let [eventsVisible, makeEventsVisible] = useState(false);
  let [helpVisible, makeHelpVisible] = useState(false);
  let [saveModalVisible, openSaveModal] = useState(false);

  const addPerson = () => {
    let newPerson = {
      fullName: '',
      isKid: false,
      allergies: '',
      hairApt: false,
      personIndex: rsvpInfo.people.length
    }

    rsvpInfo.people = [...rsvpInfo.people, newPerson];
    changeRsvpInfo(rsvpInfo);
    forceUpdate();
  }

  const removePerson = (index) => {
    rsvpInfo.people.splice(index, 1);
    rsvpInfo.people = [...rsvpInfo.people];
    changeRsvpInfo(rsvpInfo);
    forceUpdate();
  }

  const getCarpoolText = () => {
    return rsvpInfo.driving === 'spots' ? 'I have this many spots available' : 'I need this meany seats';
  }

  const inputChangeHandler = (inputName, value) => {
    rsvpInfo[inputName] = value;
    changeRsvpInfo(rsvpInfo);
  }

  const standardCheckHandler = (checked, propName) => {
    rsvpInfo[propName] = checked;
    changeRsvpInfo(rsvpInfo);
    forceUpdate();
  }

  const groupBoxesCheck = (checked, propValue, propName) => {
    rsvpInfo[propName] = propValue;
    changeRsvpInfo(rsvpInfo);
    forceUpdate();
  }

  const handleDateChange = (date) => {
    rsvpInfo.arrival = date;
    changeRsvpInfo(rsvpInfo);
    forceUpdate();
  }

  const updateAttendee = (attendee, index) => {
    rsvpInfo.people[index] = attendee;

    changeRsvpInfo(rsvpInfo);
    forceUpdate();
  }

  const updateEvents = (checked, eventName) => {
    if (checked) {
      rsvpInfo.events = [...rsvpInfo.events, eventName]
    } else {
      let updatedEvents = rsvpInfo.events.filter((event) => event !== eventName);
      rsvpInfo.events = updatedEvents;
    }
    forceUpdate();
  }

  const updateChores = (checked, eventName) => {
    if (checked) {
      rsvpInfo.chores = [...rsvpInfo.chores, eventName]
    } else {
      let updatedChores = rsvpInfo.chores.filter((event) => event !== eventName);
      rsvpInfo.chores = updatedChores;
    }
    forceUpdate();
  }

  const addSong = () => {
    let newSong = {
      song: '',
      artist: ''
    };

    rsvpInfo.songs = [...rsvpInfo.songs, newSong];
    changeRsvpInfo(rsvpInfo);
    forceUpdate();
  }

  const removeSong = (index) => {
    rsvpInfo.songs.splice(index, 1);
    rsvpInfo.songs = [...rsvpInfo.songs];
    console.log('rsvpInfo.songs :', rsvpInfo.songs);
    changeRsvpInfo(rsvpInfo);
    forceUpdate();
  }

  const updateSong = (song, index) => {
    rsvpInfo.songs[index] = song;

    changeRsvpInfo(rsvpInfo);
    forceUpdate();
  }

  const submitRSVPInfo = () => {
    // TODO: save animation
    console.log(JSON.stringify(rsvpInfo, null, 2));
  }


  return (
    <div className='events-page'>
      <h1 className='invited'>We can't wait to see you!</h1>
      <OuterOutline>
        <InnerOutline>
          {!loggedIn ?
            <LoginButton onClick={() => setLogin(true)}>LOGIN</LoginButton>
            :
            <RsvpForm onSubmit={submitRSVPInfo}>
              <FancyInput
                hint='Your name'
                inputName='name'
                inputChangeHandler={inputChangeHandler}
              // inputValue={rsvpInfo.name}
              />
              <FancyInput
                hint='Email Address'
                inputName='email'
                inputChangeHandler={inputChangeHandler}
                inputValue={rsvpInfo.email}
              />
              <FancyCheckbox
                id='first'
                label='Is this any of your first time camping?'
                isChecked={rsvpInfo.firstTime}
                propertyValue='firstTime'
                checkHandler={standardCheckHandler}
              />
              <SpacerDots />
              <BoxIt>
                <BasicH3>What is your plan for lodging?</BasicH3>
                <FancyCheckbox
                  id='tent-check'
                  label='tent'
                  isChecked={rsvpInfo.lodging === 'tent'}
                  propertyValue='tent'
                  propertyName='lodging'
                  checkHandler={groupBoxesCheck}
                />
                <FancyCheckbox
                  id='rv-check'
                  label='rv'
                  isChecked={rsvpInfo.lodging === 'rv'}
                  propertyValue='rv'
                  propertyName='lodging'
                  checkHandler={groupBoxesCheck}
                />
                <FancyCheckbox
                  id='offsite-check'
                  label='offsite'
                  isChecked={rsvpInfo.lodging === 'offsite'}
                  propertyValue='offsite'
                  propertyName='lodging'
                  checkHandler={groupBoxesCheck}
                />
              </BoxIt>

              <SpacerDots />

              <BasicH3>When will you arrive in Dillon?</BasicH3>
              <BasicText>(Tent packages arrive on Thursday, July  2nd)</BasicText>
              <DateHolder>
                <DatePicker
                  minDate={new Date('June 26, 2020')}
                  maxDate={new Date('July 4, 2020')}
                  selected={rsvpInfo.arrival}
                  onChange={handleDateChange}
                  showDisabledMonthNavigation
                  inline
                  dayClassName={() => 'date-day'}
                />
              </DateHolder>

              <SpacerDots />

              <FancyInput
                hint='How many dogs are you bringing?'
                inputName='dogs'
                inputChangeHandler={inputChangeHandler}
                inputValue={rsvpInfo.dogs}
                inputType='number'
              />

              <SpacerDots />

              <CenterIt
                noBottom
              >
                <BasicH3>Please let us know who is coming</BasicH3>
                <BasicText>(you included)</BasicText>
              </CenterIt>
              {rsvpInfo && rsvpInfo.people && rsvpInfo.people.length ? rsvpInfo.people.map((person, i) => (
                <Attendee
                  i={i}
                  removePerson={removePerson}
                  updateAttendee={updateAttendee}
                  person={person}
                  key={person.fullName + '-' + i}
                />
              ))
                : null}

              <FancyButton
                handleClick={addPerson}
                btnLabel='Add Attendee'
                centerIt
              />

              <SpacerDots />

              <BoxIt>
                <BasicH3>Carpooling</BasicH3>
                <FancyCheckbox
                  id='no-spots'
                  label='I am driving but my car is full'
                  isChecked={rsvpInfo.driving === 'full'}
                  propertyValue='full'
                  propertyName='driving'
                  checkHandler={groupBoxesCheck}
                />
                <FancyCheckbox
                  id='driving-check'
                  label='I have extra space in my car'
                  isChecked={rsvpInfo.driving === 'spots'}
                  propertyValue='spots'
                  propertyName='driving'
                  checkHandler={groupBoxesCheck}
                />
                <FancyCheckbox
                  id='riding-check'
                  label='I need a ride'
                  isChecked={rsvpInfo.driving === 'rider'}
                  propertyValue='rider'
                  propertyName='driving'
                  checkHandler={groupBoxesCheck}
                />

                {rsvpInfo.driving === 'spots' || rsvpInfo.driving === 'rider' ?
                  <FancyInput
                    hint={getCarpoolText()}
                    inputName='spots'
                    inputChangeHandler={inputChangeHandler}
                    inputValue={rsvpInfo.spots}
                    inputType='number'
                  />
                  : null}
              </BoxIt>

              <SpacerDots />

              <CenterIt>
                <FancyButton
                  handleClick={() => makeEventsVisible(true)}
                  btnLabel='RSVP for Events'
                />

                {eventsVisible ?
                  <ModalContainer
                    isVisible={eventsVisible}
                    modalTitle='Register for Events'
                    subTitle="When should we anticipate hosting you?"
                    closeModal={() => makeEventsVisible(false)}
                    modalContent={<EventSignup
                      allEvents={rsvpInfo.events}
                      updateEvents={updateEvents}
                    />}
                  />
                  : null}

                <SpacerDots />

                <FancyButton
                  handleClick={() => makeHelpVisible(true)}
                  btnLabel='Sign up to help out'
                />

                {helpVisible ?
                  <ModalContainer
                    isVisible={helpVisible}
                    modalTitle='Sign up to help us out please!'
                    subTitle="please choose one or two (don't overdo it!)"
                    closeModal={() => makeHelpVisible(false)}
                    modalContent={<HelpSignup
                      allChores={rsvpInfo.chores}
                      updateChores={updateChores}
                    />}
                  />
                  : null}

                <SpacerDots />

                <BasicH3>We are our own DJs, please help us curate the perfect playlist</BasicH3>


                {rsvpInfo.songs && rsvpInfo.songs.map((song, i) => (
                  <Song
                    i={i}
                    removeSong={removeSong}
                    updateSong={updateSong}
                    song={song}
                    key={song.song + '-' + i}
                  />
                ))}
                <FancyButton
                  handleClick={addSong}
                  btnLabel='Add Song'
                />
                <BasicText>(Unlimited submissions!)</BasicText>

                <SpacerDots />
                <FancyButton
                  handleClick={() => openSaveModal(true)}
                  btnLabel='Save Info'
                />


                {saveModalVisible ?
                  <ModalContainer
                    isVisible={saveModalVisible}
                    modalTitle='Save RSVP Info'
                    closeModal={() => openSaveModal(false)}
                    doneText='Save Info'
                    miniModal
                    modalContent={<></>}
                    extraCloseFunction={submitRSVPInfo}
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