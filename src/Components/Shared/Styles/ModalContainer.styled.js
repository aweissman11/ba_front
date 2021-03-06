import styled from 'styled-components';
import { Colors } from './Colors';
import { Devices } from './Devices';

export const ModalBackground = styled.div`
  position: fixed;
  background: rgba(0,0,0,0.7);
  width: 100vw;
  height: 100vh;
  z-index: 999999;
  display: block;
  align-content: center;
  align-items: center;
  top: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
ModalBackground.displayName = 'ModalBackground';

export const ClosingBackground = styled.div`
    position:fixed;
    width: 100vw;
    height: 100vh;
    z-index: -1;
`;
ClosingBackground.displayName = 'ClosingBackground';

export const ModalWrapper = styled.div`
  background: ${Colors.BG};
  width: 100vw;
  height: 100vh;
  transition: .3s ease-in-out;
  position: relative;

  @media ${Devices.Laptop} {
    max-width: 40%;
    max-height: 80vh;
    ${'' /* position: absolute; */}
    ${'' /* top: ${({ miniModal }) => miniModal ? '35vh' : '10vh'}; */}
    ${'' /* left: 30%; */}
    border: solid 1px ${Colors.Text};
    height: ${({ miniModal, saveModal }) => saveModal ? 'max-content' : miniModal && 'min-content'};
    overflow: hidden;
  }
`;
ModalWrapper.displayName = 'ModalWrapper';

export const ContentWrapper = styled.form.attrs({
  id: 'modal-container-form'
})`
  padding: ${({ subTitle }) => subTitle ? '80px 0 80px' : '60px 0 80px'};
  overflow: scroll;
  height: 100%;
`;
ContentWrapper.displayName = 'ContentWrapper';

export const ModalBtnWrapper = styled.div`
  ${'' /* position: absolute; */}
  ${'' /* bottom: 0; */}
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${Colors.BG};
  height: ${({ tallButton }) => tallButton && '54%'};

  @media ${Devices.Laptop} {
    height: 70px;
  }

  @media (max-height: 600px) {
    height: ${({ tallButton }) => tallButton && '30%'};
  }
`;
ModalBtnWrapper.displayName = 'ModalBtnWrapper';

export const ModalTitle = styled.div`
  ${'' /* position: absolute; */}
  ${'' /* top: 0; */}
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${Colors.BG};
  align-items: center;
  height: ${({ subTitle }) => subTitle ? '80px' : '60px'};
  padding-top: ${({ subTitle }) => subTitle && '20px'};
  z-index: 1;
  flex-direction: column;
`;
ModalTitle.displayName = 'ModalTitle';