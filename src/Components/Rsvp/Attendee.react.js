import React, { useState } from 'react'
import { NewPerson } from './RSVP.styled';
import FancyInput from '../Shared/Elements/FancyInput.react';
import FancyCheckbox from '../Shared/Elements/FancyCheckbox.react';
import { FancyButton } from '../Shared/Elements/FancyButton.react';
import { BasicText } from '../Shared/Styles/Shared.styled';

const Attendee = ({
  i,
  removePerson,
  person,
  updateAttendee
}) => {
  const handleChange = (inputName, value) => {
    person[inputName] = value;
    updateAttendee(person);
  }

  const handleCheck = (checked, propName) => {
    person[propName] = checked;
    updateAttendee(person);
  }

  return (
    <NewPerson>
      <FancyInput
        hint='Full Name'
        inputName='fullName'
        inputChangeHandler={handleChange}
        inputValue={person.fullName}
      />
      <FancyCheckbox
        id={'kid-check-' + i}
        label='Is this a kid under 10?'
        propertyValue='isKid'
        checkHandler={handleCheck}
        isChecked={person.isKid}
      />
      <FancyInput
        hint='Alergies/dietary restrictions?'
        inputName='allergies'
        inputChangeHandler={handleChange}
        inputValue={person.allergies}
      />
      <FancyCheckbox
        id={'hair-check-' + i}
        // TODO: add linkIcon
        label={<>Do you want yo hair did? <a href='google.com' target='_blank'>Details</a></>}
        propertyValue='hairApt'
        checkHandler={handleCheck}
        isChecked={person.hairApt}
        noBottom
      />
      <BasicText>(No showers means you may want a shampoo and blowout!)</BasicText>
      <FancyButton
        handleClick={() => removePerson(i)}
        btnLabel='Remove Attendee'
        centerIt
      />
    </NewPerson>
  )
}

export default Attendee