import React, { useEffect } from 'react';
import { FancyBtn } from '../Styles/FancyButton.styled';


export const FancyButton = ({
  id,
  handleClick,
  btnLabel,
  hangLeft,
  centerIt,
  extraBottomMargin
}) => {

  useEffect(() => {
    window.addEventListener('keypress', handleEnterKey);

    return () => {
      window.removeEventListener('keypress', handleEnterKey);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleEnterKey = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      if (e.target.id === ('fancy-btn-' + id)) {
        handleClick();
        e.stopImmediatePropagation();
      }
    }
  }

  return (
    <FancyBtn
      id={'fancy-btn-' + id}
      className="icon-btn add-btn"
      onClick={handleClick}
      hangLeft={hangLeft}
      centerIt={centerIt}
      extraBottomMargin={extraBottomMargin}
      tabIndex={0}
    >
      <div className="btn-txt">{btnLabel}</div>
    </FancyBtn>
  );
}
