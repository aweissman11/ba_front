import React from 'react';
import { FancyBtn } from '../Styles/FancyButton.styled';


export const FancyButton = ({
  handleClick,
  btnLabel,
  hangLeft,
  centerIt
}) => (
    <FancyBtn
      className="icon-btn add-btn"
      onClick={handleClick}
      hangLeft={hangLeft}
      centerIt={centerIt}
    >
      <div class="btn-txt">{btnLabel}</div>
    </FancyBtn>
  );
