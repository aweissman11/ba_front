import React from 'react'

import { BasicText } from '../Shared/Styles/Shared.styled';
import FancyCheckbox from '../Shared/Elements/FancyCheckbox.react';
import SpacerDots from '../Shared/Elements/SpacerDots.react';
import { EventSignupList } from '../Shared/Data/EventSignupList';

const EventSignup = () => {
  return (<>
    {EventSignupList.map((event, i) => (<>
      <FancyCheckbox
        marginLeft={'20px'}
        id={event.id}
        label={event.label}
        noBottom
      />
      <BasicText leftText >{event.when}</BasicText>
      <SpacerDots />
    </>))}
  </>)
}

export default EventSignup