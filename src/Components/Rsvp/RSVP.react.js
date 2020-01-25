import React, { useState, useEffect } from 'react';
import useForceUpdate from 'use-force-update';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import { useAuth0 } from "../../react-auth0-spa";

import { RsvpForm, DateHolder, BoxIt } from './RSVP.styled';
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
import SubHeader from '../SubHeader/SubHeader.react';
import Loading from '../Loading/Loading.react';
import { patchRsvpInfo, postRSVPInfo, getRsvpFromDatabase } from '../../utils/apiCalls';
import { getCarpoolText, addPerson, removePerson, addSong, removeSong, updateSong, getSaveCompleteText } from './RSVP.helpers';

// TODO: Login  button style and  instructions
// TODO: clear all button
// TODO: cancel save and clear changes
// TODO: Ask if they are actually coming to the wedding
// Only show the rest of the questions if they say yes
// TODO: Cancel save button (escpecially for mobile)
// TODO: Handle empty inputs
// Timeout API call in case it fails.

export const RSVP = (props) => {
  const forceUpdate = useForceUpdate();

  const { user, isAuthenticated, loginWithRedirect, loading } = useAuth0();

  let blankInfo = {
    name: '',
    attending: false,
    email: user ? user.email : '',
    firstTime: false,
    people: [],
    lodging: 'tent',
    dogs: '0',
    arrival: new Date('June 26, 2020'),
    events: [],
    chores: [],
    driving: 'full',
    spots: '0',
    songs: []
  }

  let [rsvpInfo, changeRsvpInfo] = useState(blankInfo);
  let [eventsVisible, makeEventsVisible] = useState(false);
  let [helpVisible, makeHelpVisible] = useState(false);
  let [saveModalVisible, openSaveModal] = useState(false);
  let [saveCompleteModal, openSaveComplete] = useState(false);
  let [saveSuccess, setSaveSuccess] = useState({ ok: true });
  let [shouldPost, setShouldPost] = useState(true);
  let [isSaving, setIsSaving] = useState(false);



  useEffect(() => {
    window.addEventListener('keypress', submitOnEnter);

    return () => {
      window.removeEventListener('keypress', submitOnEnter);
    }
  }, []);

  useEffect(() => {
    if (user) {
      getRsvpFromDatabase(user, rsvpInfo, [changeRsvpInfo, forceUpdate, setShouldPost]);
    }

  }, [user])

  const submitOnEnter = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      openSaveModal(true);
    }
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

  const saveRSVP = () => {
    setIsSaving(true);
    window.setTimeout(submitRSVPInfo, 200);
  }

  const submitRSVPInfo = async () => {
    let fullRsvpInfo = {
      ...rsvpInfo,
      user_id: user.sub,
      user_name: user.nickname
    }


    try {
      if (shouldPost) {
        const saveResponse = await postRSVPInfo(fullRsvpInfo);
        if (saveResponse.err) {
          setSaveSuccess(saveResponse);
        } else {
          setSaveSuccess(saveResponse);
        }
      } else {
        const saveResponse = await patchRsvpInfo(fullRsvpInfo);
        if (saveResponse.err) {
          setSaveSuccess(saveResponse);
        } else {
          setSaveSuccess(saveResponse);
        }
      }

      setIsSaving(false);
      openSaveModal(false);
      openSaveComplete(true);
    } catch (err) {
      console.log('err :', err);
    }
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className='events-page'>
      <h1 className='invited'>We can't wait to see you!</h1>
      <OuterOutline>
        <InnerOutline>
          {(!user || !isAuthenticated) ? <>
            <BasicH3>Please Login/Register</BasicH3>
            <FancyButton
              handleClick={() => loginWithRedirect({
                redirect_uri: `${window.location.origin}/rsvp`
              })}
              btnLabel='Login/Register'
              centerIt
            />
          </>
            :
            <>
              <RsvpForm onSubmit={submitRSVPInfo}>
                <FancyInput
                  hint='Your name*'
                  inputName='name'
                  inputChangeHandler={inputChangeHandler}
                  inputValue={rsvpInfo.name}
                  key={rsvpInfo.user_id + 'name'}
                />
                <FancyInput
                  hint='Email Address*'
                  inputName='email'
                  inputChangeHandler={inputChangeHandler}
                  inputValue={rsvpInfo.email}
                  key={rsvpInfo.user_id + 'email'}
                />
                <SpacerDots />
                {/* //TODO: Make this  a yes or no */}
                <FancyCheckbox
                  id='are-attending'
                  label='Will you be coming to our celebration?'
                  isChecked={rsvpInfo.attending}
                  propertyValue='attending'
                  checkHandler={standardCheckHandler}
                />
                <SpacerDots />
                {rsvpInfo.attending ? <>
                  <FancyCheckbox
                    id='first'
                    label="Is this you or anyone in your group's first time camping?"
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
                    key={rsvpInfo.user_id + 'dogs'}
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
                      removePerson={removePerson(i, rsvpInfo, [changeRsvpInfo, forceUpdate])}
                      updateAttendee={updateAttendee}
                      person={person}
                      key={i}
                    />
                  ))
                    : null}

                  <FancyButton
                    handleClick={addPerson(rsvpInfo, [changeRsvpInfo, forceUpdate])}
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
                        hint={getCarpoolText(rsvpInfo.driving)}
                        inputName='spots'
                        inputChangeHandler={inputChangeHandler}
                        inputValue={rsvpInfo.spots}
                        inputType='number'
                        key={rsvpInfo.user_id + 'spots'}
                      />
                      : null}
                  </BoxIt>

                  <SpacerDots />

                  <CenterIt>
                    <BasicH3
                      centerIt
                    >
                      Everyone's gotta eat! Let us know when you will be joining us.
                    </BasicH3>
                    <FancyButton
                      handleClick={() => makeEventsVisible(true)}
                      btnLabel='RSVP for Events'
                    />

                    {eventsVisible ?
                      <ModalContainer
                        isVisible={eventsVisible}
                        modalTitle='When should we anticipate hosting you?'
                        subTitle='All events will take place at the campground'
                        closeModal={() => makeEventsVisible(false)}
                        modalContent={<EventSignup
                          allEvents={rsvpInfo.events}
                          updateEvents={updateEvents}
                        />}
                      />
                      : null}

                    <SpacerDots />
                    <BasicH3
                      centerIt
                    >
                      We need you're help! If you can spare it...
                    </BasicH3>
                    <FancyButton
                      handleClick={() => makeHelpVisible(true)}
                      btnLabel='Sign up to help us out'
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
                        removeSong={removeSong(i, rsvpInfo, [changeRsvpInfo, forceUpdate])}
                        updateSong={updateSong(song, i, rsvpInfo, [changeRsvpInfo, forceUpdate])}
                        song={song}
                        key={i}
                      />
                    ))}
                    <FancyButton
                      handleClick={addSong(rsvpInfo, [changeRsvpInfo, forceUpdate])}
                      btnLabel='Add Song'
                    />
                    <BasicText>(Unlimited submissions!)</BasicText>


                  </CenterIt>
                  <SpacerDots />
                </>
                  : null}
                <FancyButton
                  handleClick={() => openSaveModal(true)}
                  btnLabel='Save Info'
                  centerIt
                />


                {saveModalVisible ?
                  <ModalContainer
                    isVisible={saveModalVisible}
                    modalTitle='Save RSVP Info'
                    closeModal={() => openSaveModal(false)}
                    doneText='Save Info'
                    miniModal
                    saveModal
                    modalContent={<>
                      {isSaving ?
                        <Loading
                          isModal
                        />
                        : null}
                    </>}
                    extraCloseFunction={saveRSVP}
                    tallButton
                  />
                  : null}

                {saveCompleteModal ?
                  <ModalContainer
                    isVisible={saveCompleteModal}
                    modalTitle={getSaveCompleteText(saveSuccess).saveMessage}
                    closeModal={() => openSaveComplete(false)}
                    miniModal
                    modalContent={<>
                      {
                        getSaveCompleteText(saveSuccess).failMessage &&
                        <BasicText
                          centerText
                        >
                          {getSaveCompleteText(saveSuccess).failMessage}
                        </BasicText>
                      }
                    </>}
                    tallButton
                  />
                  : null}
              </RsvpForm>
              <SubHeader />
            </>
          }
        </InnerOutline>
      </OuterOutline>
    </div>
  );
}

export default RSVP;