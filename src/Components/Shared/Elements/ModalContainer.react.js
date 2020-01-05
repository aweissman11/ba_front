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
  subTitle
}) => {
  const modalRoot = document.getElementById('app-root');

  const modalComponent = (
    <ModalBackground>
      <ClosingBackground onClick={closeModal} />
      <ModalWrapper>
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