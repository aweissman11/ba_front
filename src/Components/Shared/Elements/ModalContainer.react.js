import React from 'react';
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
import { CenteredH3, BasicText } from '../Styles/Shared.styled';


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
  noDoneBtn
}) => {
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
            {doneText ?
              <FancyButton
                id='cancel-btn'
                btnLabel={'Cancel'}
                handleClick={closeModal}
              />
              : null}
          </ModalBtnWrapper>
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