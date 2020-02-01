import React from 'react'
import { BoxIt } from './RSVP.styled';
import { BasicH3 } from '../Shared/Styles/Shared.styled';
import FancyCheckbox from '../Shared/Elements/FancyCheckbox.react';
import FancyInput from '../Shared/Elements/FancyInput.react';
import SpacerDots from '../Shared/Elements/SpacerDots.react';
import { FancyButton } from '../Shared/Elements/FancyButton.react';
import ModalContainer from '../Shared/Elements/ModalContainer.react';

const OldRsvpFormStuff = () => {
  return (
    <div>

      <BoxIt>
        <BasicH3>Carpooling</BasicH3>
        <FancyCheckbox
          id='no-spots'
          label='I am driving but my car is full'
          isChecked={rsvpInfo.driving === 'full'}
          propertyValue='full'
          propertyName='driving'
          checkHandler={groupBoxesCheck}
        />
        <FancyCheckbox
          id='driving-check'
          label='I have extra space in my car'
          isChecked={rsvpInfo.driving === 'spots'}
          propertyValue='spots'
          propertyName='driving'
          checkHandler={groupBoxesCheck}
        />
        <FancyCheckbox
          id='riding-check'
          label='I need a ride'
          isChecked={rsvpInfo.driving === 'rider'}
          propertyValue='rider'
          propertyName='driving'
          checkHandler={groupBoxesCheck}
        />

        {rsvpInfo.driving === 'spots' || rsvpInfo.driving === 'rider' ?
          <FancyInput
            hint={getCarpoolText(rsvpInfo.driving)}
            inputName='spots'
            inputChangeHandler={inputChangeHandler}
            inputValue={rsvpInfo.spots}
            inputType='number'
            key={'spots'}
            passedKey={'spots'}
          />
          : null}
      </BoxIt>

      <SpacerDots />


      <BasicH3
        centerIt
      >
        We need you're help! If you can spare it...
      </BasicH3>
      <FancyButton
        handleClick={() => makeHelpVisible(true)}
        btnLabel='Sign up to help us out'
      />

      {helpVisible ?
        <ModalContainerner
          isVisible={helpVisible}
          modalTitle='Sign up to help us out please!'
          subTitle="please choose one or two (don't overdo it!)"
          closeModal={() => makeHelpVisible(false)}
          modalContent={<HelpSignup
            allChores={rsvpInfo.chores}
            updateChores={updateChores}
          />}
        />
        : null}

      <SpacerDots />
    </div>
  )
}

export default OldRsvpFormStuff