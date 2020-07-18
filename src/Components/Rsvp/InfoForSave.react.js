import React from 'react';
import { BasicText, CenteredH3 } from '../Shared/Styles/Shared.styled';
import SpacerDots from '../Shared/Elements/SpacerDots.react';

const InfoForSave = ({
  rsvpInfo
}) => {
  const getGuestString = () => {
    if (!rsvpInfo.people || !rsvpInfo.people.length) {
      return `You haven't addded any attendees to the list. Please make sure you sign up for everyone in your group including you.`;
    }

    let guestList = rsvpInfo.people.map((pers, i) => {
      let comma = i < (rsvpInfo.people.length - 1) ? ', ' : '';
      return pers.fullName + comma;
    })

    return guestList;
  }

  return (
    <>
      <CenteredH3 whiteText>Attendees:</CenteredH3>
      {rsvpInfo.people && rsvpInfo.people.length ? <>
        <BasicText centerText>(should include everyone in your group including you)</BasicText>
      </> : null}
      <BasicText centerText>{getGuestString()}</BasicText>
      <SpacerDots />
      <BasicText centerText >Main Contact: {rsvpInfo.name}</BasicText>
      <BasicText centerText >Contact Email: {rsvpInfo.email}</BasicText>
      <BasicText centerText >Lodging Plan: {rsvpInfo.lodging}</BasicText>
      <BasicText centerText >Arrival Date: {rsvpInfo.arrival.toLocaleDateString()}</BasicText>
      <SpacerDots />
      <CenteredH3>Events:</CenteredH3>
      {!rsvpInfo.events || !rsvpInfo.events.length ? <>
        <BasicText centerText >You haven't registered for any Events.</BasicText>
        <BasicText centerText >Please click the 'RSVP for Events' button and let us know which ones you'll be attending.</BasicText>
      </>
        : <>
          <BasicText centerText>EVENT GOES HERE</BasicText>
        </>}
    </>
  );
}

export default InfoForSave;