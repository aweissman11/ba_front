import React from 'react';
import { FancyBtn } from '../Styles/FancyButton.styled';


export const FancyButton = ({
  handleClick,
  btnLabel,
  hangLeft,
  centerIt,
  extraBottomMargin
}) => (
    <FancyBtn
      className="icon-btn add-btn"
      onClick={handleClick}
      hangLeft={hangLeft}
      centerIt={centerIt}
      extraBottomMargin={extraBottomMargin}
    >
      <div className="btn-txt">{btnLabel}</div>
    </FancyBtn>
  );
