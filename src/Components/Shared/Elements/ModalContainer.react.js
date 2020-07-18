import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalWrapper,
  ContentWrapper,
  ModalBtnWrapper,
  ModalBackground,
  ModalTitle,
  ClosingBackground
} from '../Styles/ModalContainer.styled';
import { FancyButton } from './FancyButton.react';
import { CenteredH3, BasicText, DownArrowWrapper } from '../Styles/Shared.styled';
import { DownArrow } from '../../Rsvp/DownArrow.react';


const ModalContainer = ({
  modalContent,
  closeModal,
  modalTitle,
  subTitle,
  doneText,
  miniModal,
  extraCloseFunction,
  tallButton,
  saveModal,
  noDoneBtn,
  noCancelBtn,
  needsArrow
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

  const scrollToEnd = () => {
    let containerEl = document.getElementById('modal-container-form');
    containerEl.scrollTo({ behavior: "smooth", top: containerEl.scrollHeight });
  }


  const modalRoot = document.getElementById('app-root');

  const modalComponent = (
    <ModalBackground>
      <ClosingBackground onClick={closeModal} />
      <ModalWrapper miniModal={miniModal} saveModal={saveModal}>
        <ModalTitle subTitle={subTitle}>
          {modalTitle &&
            <CenteredH3>{modalTitle}</CenteredH3>
          }
          {subTitle &&
            <BasicText centerText>{subTitle}</BasicText>
          }
        </ModalTitle>
        <ContentWrapper onSubmit={closeModal} subTitle={subTitle}>
          {modalContent && modalContent}
        </ContentWrapper>
        {!noDoneBtn ?
          <ModalBtnWrapper
            tallButton={tallButton}
          >
            <FancyButton
              id='done-btn'
              btnLabel={doneText || 'Done'}
              handleClick={() => {
                !saveModal && closeModal();
                extraCloseFunction && extraCloseFunction();
              }}
            />
            {doneText && !noCancelBtn ?
              <FancyButton
                id='cancel-btn'
                btnLabel={'Cancel'}
                handleClick={closeModal}
              />
              : null}
          </ModalBtnWrapper>
          : null}
        {showArrow && needsArrow ?
          <DownArrowWrapper onClick={scrollToEnd}>
            <DownArrow />
          </DownArrowWrapper>
          : null}
      </ModalWrapper>
    </ModalBackground>
  )

  return createPortal(
    modalComponent,
    modalRoot
  )
}

export default ModalContainer