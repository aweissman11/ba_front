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
import { CenteredH3 } from '../Styles/Shared.styled';


const ModalContainer = ({
  modalContent,
  closeModal,
  modalTitle
}) => {
  const modalRoot = document.getElementById('app-root');

  const modalComponent = (
    <ModalBackground>
      <ClosingBackground onClick={closeModal} />
      <ModalWrapper>
        <ModalTitle>
          {modalTitle &&
            <CenteredH3>{modalTitle}</CenteredH3>
          }
        </ModalTitle>
        <ContentWrapper onSubmit={closeModal}>
          {modalContent && modalContent}
        </ContentWrapper>
        <ModalBtnWrapper>
          <FancyButton
            btnLabel='Done'
            handleClick={closeModal}
          />
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