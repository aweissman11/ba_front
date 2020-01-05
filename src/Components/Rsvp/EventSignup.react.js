import React from 'react'

import { BasicText } from '../Shared/Styles/Shared.styled';
import FancyCheckbox from '../Shared/Elements/FancyCheckbox.react';
import SpacerDots from '../Shared/Elements/SpacerDots.react';
import { EventSignupList } from '../Shared/Data/EventSignupList';

const EventSignup = ({ allEvents, updateEvents }) => {
  const handleCheck = (checked, propName) => {
    updateEvents(checked, propName);
  }
  return (<>
    {EventSignupList && EventSignupList.map((event, i) => (<>
      <FancyCheckbox
        marginLeft={'20px'}
        id={event.id}
        label={event.label}
        noBottom
        checkHandler={handleCheck}
        isChecked={allEvents.includes(event.id)}
        propertyValue={event.id}
      />
      <BasicText leftText >{event.when}</BasicText>
      <SpacerDots />
    </>))}
  </>)
}

export default EventSignup