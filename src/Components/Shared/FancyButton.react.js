import React from 'react';
import { FancyBtn } from './FancyButton.styled';


export const FancyButton = ({ handleClick, btnLabel }) => (
  <FancyBtn class="icon-btn add-btn" onClick={handleClick}>
    <div class="btn-txt">{btnLabel}</div>
  </FancyBtn>
);
