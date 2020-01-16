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
  tallButton
}) => {
  const modalRoot = document.getElementById('app-root');

  const modalComponent = (
    <ModalBackground>
      <ClosingBackground onClick={closeModal} />
      <ModalWrapper miniModal={miniModal}>
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
        <ModalBtnWrapper
          tallButton={tallButton}
        >
          <FancyButton
            btnLabel={doneText || 'Done'}
            handleClick={() => {
              closeModal();
              extraCloseFunction && extraCloseFunction();
            }}
          />
          {doneText ?
            <FancyButton
              btnLabel={'Cancel'}
              handleClick={closeModal}
            />
            : null}
        </ModalBtnWrapper>
      </ModalWrapper>
    </ModalBackground>
  )

  return createPortal(
    modalComponent,
    modalRoot
  )
}

export default ModalContainer