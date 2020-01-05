import React from 'react'

import { BasicText } from '../Shared/Styles/Shared.styled';
import FancyCheckbox from '../Shared/Elements/FancyCheckbox.react';
import SpacerDots from '../Shared/Elements/SpacerDots.react';

const HelpSignup = () => {
  return (<>
    <SpacerDots />
    <BasicText>During the Week</BasicText>
    <FancyCheckbox
      id='hang-lights'
      label='string up lights in the woods'
    />
    <FancyCheckbox
      id='wind-block'
      label='hang fabric for wind blocking'
    />
    <FancyCheckbox
      id='build-bar'
      label='construct a table to use as a bar'
    />
    <FancyCheckbox
      id='chuppah'
      label='help build a chuppah'
    />
    <FancyCheckbox
      id='burger-prep'
      label='prep bbq toppings'
    />
    <FancyCheckbox
      id='roll-burritos'
      label='roll and prep burritos'
    />
    <FancyCheckbox
      id='tent-pickup'
      label='pick up tents in Denver'
    />
    <SpacerDots />
    <BasicText>Day Before</BasicText>
    <FancyCheckbox
      id='rehearsal-setup'
      label='setup for rehearsal BBQ'
    />
    <FancyCheckbox
      id='rehearsal-cleanup'
      label='cleanup after rehearsal BBQ'
    />
    <FancyCheckbox
      id='flower-party'
      label='make bouquets'
    />
    <FancyCheckbox
      id='grill'
      label='grill master'
    />
    <SpacerDots />
    <BasicText>Day Of</BasicText>
    <FancyCheckbox
      id='chairs'
      label='set up chairs'
    />
    <FancyCheckbox
      id='get-bagels'
      label='pick up bagels from Einstein'
    />
    <FancyCheckbox
      id='prep-breakfast'
      label='set up for bagel brunch'
    />
    <FancyCheckbox
      id='clean-breakfast'
      label='clean up after bagel brunch'
    />
    <FancyCheckbox
      id='tablecloths'
      label='set up tablecloths and centerpieces'
    />
    <FancyCheckbox
      id='turn-on-lights'
      label='turn on the lights'
    />
    <FancyCheckbox
      id='move-tables'
      label='move tables off the dance floor'
    />
    <FancyCheckbox
      id='centerpiece-wood'
      label='move centerpiece wood to the firepit'
    />
    <FancyCheckbox
      id='fire-master'
      label='build a fire and PUT IT OUT'
    />
    <SpacerDots />
    <BasicText>Day After</BasicText>
    <FancyCheckbox
      id='set-up-burritos'
      label='set up for burrito party'
    />
    <FancyCheckbox
      id='heat-burritos'
      label='heat up the breakfast burritos'
    />
    <FancyCheckbox
      id='clean-burritos'
      label='clean up after burritos'
    />
  </>)
}

export default HelpSignup