import React from 'react'

import { BasicText } from '../Shared/Styles/Shared.styled';
import FancyCheckbox from '../Shared/Elements/FancyCheckbox.react';
import SpacerDots from '../Shared/Elements/SpacerDots.react';
import { ChoresList } from '../Shared/Data/ChoresList';

const HelpSignup = () => {
  return (<>
    {ChoresList.map((day, i) => (<>
      <BasicText centerText>{day.Day}</BasicText>
      {
        day.List.map(chore => (
          <FancyCheckbox
            marginLeft={'20px'}
            id={chore.id}
            label={chore.label}
          />
        ))
      }
      <SpacerDots />
    </>
    ))}
  </>)
}

export default HelpSignup