import React, { useState, useEffect } from 'react'

import { BasicText, ScrollListWrapper, BlockButtonWrapper, DownArrowWrapper } from '../Shared/Styles/Shared.styled';
import FancyCheckbox from '../Shared/Elements/FancyCheckbox.react';
import SpacerDots from '../Shared/Elements/SpacerDots.react';
import { EventSignupList } from '../Shared/Data/EventSignupList';
import { FancyButton } from '../Shared/Elements/FancyButton.react';
import { DownArrow } from './DownArrow.react';

const EventSignup = ({
  allEvents,
  updateEvents,
  doneFunc
}) => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    let containerEl = document.getElementById('modal-container-form');
    containerEl.addEventListener('scroll', handleScrollTop);


    return (() => {
      containerEl.removeEventListener('scroll', handleScrollTop);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleScrollTop = () => {
    let containerEl = document.getElementById('modal-container-form');
    const { scrollTop, scrollTopMax } = containerEl;
    if (scrollTop === scrollTopMax) {
      setShowArrow(false);
    } else {
      setShowArrow(true);
    }
  }

  const handleCheck = (checked, propName) => {
    updateEvents(checked, propName);
  }

  const scrollToEnd = () => {
    let containerEl = document.getElementById('modal-container-form');
    containerEl.scrollTo({ behavior: "smooth", top: containerEl.scrollTopMax});
  }

  return (<ScrollListWrapper>
    {EventSignupList && EventSignupList.map((event, i) => (
      <span key={event.id}>
        <FancyCheckbox
          marginLeft={'20px'}
          id={event.id}
          label={event.label}
          noBottom
          checkHandler={handleCheck}
          isChecked={allEvents && allEvents.includes(event.id)}
          propertyValue={event.id}
        />
        <BasicText leftText >{event.when}</BasicText>
        <SpacerDots />
      </span>))}
    {showArrow ?
      <DownArrowWrapper onClick={scrollToEnd}>
        <DownArrow/>
      </DownArrowWrapper>
      : null}
    <BlockButtonWrapper>
      <FancyButton
        id='done-btn'
        btnLabel='All set'
        handleClick={doneFunc}
      />
    </BlockButtonWrapper>
  </ScrollListWrapper>)
}

export default EventSignup