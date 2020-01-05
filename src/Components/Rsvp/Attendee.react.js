import React from 'react'
import { NewPerson } from './RSVP.styled';
import FancyInput from '../Shared/Elements/FancyInput.react';
import FancyCheckbox from '../Shared/Elements/FancyCheckbox.react';
import { FancyButton } from '../Shared/Elements/FancyButton.react';

const Attendee = ({
  i,
  removePerson
}) => {
  return (
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
      <FancyButton
        handleClick={() => removePerson(i)}
        btnLabel='Remove Attendee'
        centerIt
      />
    </NewPerson>
  )
}

export default Attendee