import React from 'react'

import { BasicText } from '../Shared/Styles/Shared.styled';
import FancyCheckbox from '../Shared/Elements/FancyCheckbox.react';
import SpacerDots from '../Shared/Elements/SpacerDots.react';
import { ChoresList } from '../Shared/Data/ChoresList';

const HelpSignup = ({ allChores, updateChores }) => {
  const handleCheck = (checked, propName) => {
    updateChores(checked, propName);
  }

  return (<>
    {ChoresList.map((day, i) => (<>
      <BasicText centerText>{day.Day}</BasicText>
      {
        day.List.map(chore => (
          <FancyCheckbox
            marginLeft={'20px'}
            id={chore.id}
            label={chore.label}
            checkHandler={handleCheck}
            isChecked={allChores.includes(chore.id)}
            propertyValue={chore.id}
          />
        ))
      }
      <SpacerDots />
    </>
    ))}
  </>)
}

export default HelpSignup