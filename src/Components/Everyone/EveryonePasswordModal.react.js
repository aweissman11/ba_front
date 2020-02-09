import React from 'react';
import { createPortal } from 'react-dom';
import {
  ModalWrapper,
  ContentWrapper,
  ModalBtnWrapper,
  ModalBackground,
  ModalTitle,
  ClosingBackground
} from '../Shared/Styles/ModalContainer.styled';
import { FancyButton } from '../Shared/Elements/FancyButton.react';
import { CenteredH3, BasicText } from '../Shared/Styles/Shared.styled';


const EveryonePasswordModal = ({
  modalContent,
  closeModal,
  modalTitle,
  subTitle,
  doneText,
  miniModal,
  extraCloseFunction,
  tallButton,
  saveModal
}) => {
  const modalRoot = document.getElementById('app-root');

  const modalComponent = (
    <ModalBackground>
      <ModalWrapper miniModal={miniModal} saveModal={saveModal}>
        <ModalTitle subTitle={subTitle}>
          {modalTitle &&
            <CenteredH3>{modalTitle}</CenteredH3>
          }
          {subTitle &&
            <BasicText centerText>{subTitle}</BasicText>
          }
        </ModalTitle>
        <ContentWrapper subTitle={subTitle}>
          {modalContent && modalContent}
        </ContentWrapper>
      </ModalWrapper>
    </ModalBackground>
  )

  return createPortal(
    modalComponent,
    modalRoot
  )
}

export default EveryonePasswordModal