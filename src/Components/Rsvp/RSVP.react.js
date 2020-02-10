import React, { useState, useEffect } from 'react';
import useForceUpdate from 'use-force-update';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import { useAuth0 } from "../../react-auth0-spa";

import { RsvpForm, DateHolder, BoxIt } from './RSVP.styled';
import FancyInput from '../Shared/Elements/FancyInput.react';
import FancyCheckbox from '../Shared/Elements/FancyCheckbox.react';
import { FancyButton } from '../Shared/Elements/FancyButton.react';
import {
  CenterIt,
  BasicH3,
  BasicText,
  InnerOutline,
  OuterOutline
} from '../Shared/Styles/Shared.styled';
import SpacerDots from '../Shared/Elements/SpacerDots.react';
import Attendee from './Attendee.react';
import ModalContainer from '../Shared/Elements/ModalContainer.react';
import EventSignup from './EventSignup.react';
import Song from './Song.react';
import SubHeader from '../SubHeader/SubHeader.react';
import Loading from '../Loading/Loading.react';
import {
  patchRsvpInfo,
  postRSVPInfo,
  getRsvpFromDatabase
} from '../../utils/apiCalls';
import {
  addPerson,
  removePerson,
  addSong,
  removeSong,
  updateSong,
  getSaveCompleteText
} from './RSVP.helpers';
import { LinkIcon } from '../NavButtons/LinkIcon.react';

// TODO: clear all button
// TODO: Handle empty inputs
// Timeout API call in case it fails.

export const RSVP = () => {
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
    songs: []
  }

  let [rsvpInfo, changeRsvpInfo] = useState(blankInfo);
  let [eventsVisible, makeEventsVisible] = useState(false);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      getRsvpFromDatabase(user, rsvpInfo, [changeRsvpInfo, forceUpdate, setShouldPost]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <BasicH3>Please login or create an account</BasicH3>
            <SpacerDots />
            <BasicText
              maxWidth='290px'
            >
              Our wedding has a lot of logistics and plans can change. We're asking that you make an account so that you can update your plans in case you decide to tack on a few extra days or anything else comes up.
            </BasicText>
            <SpacerDots />
            <FancyButton
              handleClick={() => loginWithRedirect({
                redirect_uri: `${window.location.origin}/rsvp`
              })}
              btnLabel='Log back in / Create login'
              centerIt
              extraBottomMargin='40px'
            />
            <SpacerDots />
            <BasicText>We reccomend logging in with Google if you have an account.</BasicText>
            <BasicText>That way you don't need to remember a password</BasicText>
          </>
            :
            <>
              <RsvpForm onSubmit={submitRSVPInfo}>
                <FancyInput
                  hint="Who's filling this out?*"
                  inputName='name'
                  inputChangeHandler={inputChangeHandler}
                  inputValue={rsvpInfo.name}
                  key={'name'}
                  passedKey={'name'}
                />
                <FancyInput
                  hint="What's your email address?*"
                  inputName='email'
                  inputChangeHandler={inputChangeHandler}
                  inputValue={rsvpInfo.email}
                  key={'email'}
                  passedKey={'email'}
                  inputType='email'
                />
                <SpacerDots />
                <BasicH3>Will you be attending our wedding?</BasicH3>
                <FancyCheckbox
                  id='are-not-attending'
                  label="No"
                  isChecked={rsvpInfo.attending === false}
                  propertyName='attending'
                  propertyValue={false}
                  checkHandler={groupBoxesCheck}
                />
                <FancyCheckbox
                  id='are-attending'
                  label="Yes"
                  isChecked={rsvpInfo.attending === true}
                  propertyName='attending'
                  propertyValue={true}
                  checkHandler={groupBoxesCheck}
                />
                <SpacerDots />
                {rsvpInfo.attending ? <>
                  <CenterIt
                    noBottom
                  >
                    <BasicH3>Who all is coming to the wedding? - (Please add an entry for everyone in your party, you included)</BasicH3>
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
                  <CenterIt>
                    <BasicH3
                      centerIt
                    >
                      Please let us know which events you will be attending
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

                    <BoxIt>
                      <BasicH3>What is your plan for lodging?</BasicH3>
                      <FancyCheckbox
                        id='tent-check'
                        label='Tent'
                        isChecked={rsvpInfo.lodging === 'tent'}
                        propertyValue='tent'
                        propertyName='lodging'
                        checkHandler={groupBoxesCheck}
                      />
                      <FancyCheckbox
                        id='rv-check'
                        label='RV (No Hookups)'
                        isChecked={rsvpInfo.lodging === 'rv'}
                        propertyValue='rv'
                        propertyName='lodging'
                        checkHandler={groupBoxesCheck}
                      />
                      <FancyCheckbox
                        id='offsite-check'
                        label='Offsite'
                        isChecked={rsvpInfo.lodging === 'offsite'}
                        propertyValue='offsite'
                        propertyName='lodging'
                        checkHandler={groupBoxesCheck}
                      />
                    </BoxIt>
                    {rsvpInfo.lodging === 'tent' ? <>
                      <FancyCheckbox
                        id='first'
                        label="Is this you or anyone in your group's first time camping?"
                        isChecked={rsvpInfo.firstTime}
                        propertyValue='firstTime'
                        checkHandler={standardCheckHandler}
                      />
                    </>
                      : null}

                    <SpacerDots />

                    <BasicH3>When will you arrive in Dillon?</BasicH3>
                    <BasicText>(Tent packages arrive on Thursday, July  2nd.)</BasicText>
                    <BasicText><a href='lodging' target='_blank'>More Info <LinkIcon /></a></BasicText>
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
                    <BasicText>(The campground is reserved June 26 - July 6)</BasicText>
                    <BasicText><a href='campground' target='_blank'>Campground Details <LinkIcon /></a></BasicText>

                    <SpacerDots />

                    <FancyInput
                      hint='How many dogs are you bringing?'
                      inputName='dogs'
                      inputChangeHandler={inputChangeHandler}
                      inputValue={rsvpInfo.dogs}
                      inputType='number'
                      key={'dogs'}
                      passedKey={'dogs'}
                    />

                    <SpacerDots />

                    <BasicH3>We are our own DJs, please help us create the perfect playlist</BasicH3>


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