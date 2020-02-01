import React, { useState, useEffect } from 'react'
import { v4 } from 'uuid';

import { NewPerson } from './RSVP.styled';
import FancyInput from '../Shared/Elements/FancyInput.react';
import FancyCheckbox from '../Shared/Elements/FancyCheckbox.react';
import { FancyButton } from '../Shared/Elements/FancyButton.react';
import { BasicText } from '../Shared/Styles/Shared.styled';
import { LinkIcon } from '../NavButtons/LinkIcon.react';


const Attendee = ({
  i,
  removePerson,
  person,
  updateAttendee
}) => {
  let [uniqueId, setId] = useState('');

  useEffect(() => {
    setId(v4());
  }, [])

  const handleChange = (inputName, value) => {
    person[inputName] = value;
    updateAttendee(person);
  }

  const handleCheck = (checked, propName) => {
    person[propName] = checked;
    updateAttendee(person);
  }

  return (
    <NewPerson
      key={i + '-new-person-' + uniqueId}
    >
      <FancyInput
        hint='Full Name'
        inputName='fullName'
        inputId={'fullName-' + i}
        inputChangeHandler={handleChange}
        inputValue={person.fullName}
        key={i + 'full-name-' + uniqueId}
        passedKey={i + 'full-name-' + uniqueId}
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
        inputId={'allergies' + i}
        inputChangeHandler={handleChange}
        inputValue={person.allergies}
        key={'allergies-' + i}
      />
      <FancyCheckbox
        id={'hair-check-' + i}
        label={<>Would you like to get your hair done? <a href='hair' target='_blank'>Details <LinkIcon /></a></>}
        propertyValue='hairApt'
        checkHandler={handleCheck}
        isChecked={person.hairApt}
        noBottom
      />
      <BasicText>(We have a service coming to the campground the day of the ceremony)</BasicText>
      <BasicText>(No showers onsite means you may want a shampoo and blowout!)</BasicText>
      <FancyButton
        handleClick={() => removePerson(i)}
        btnLabel='Remove Attendee'
        centerIt
      />
    </NewPerson>
  )
}

export default Attendee