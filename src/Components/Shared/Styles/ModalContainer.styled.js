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

  @media ${Devices.Laptop} {
    max-width: 40%;
    max-height: 80vh;
    position: absolute;
    top: 10vh;
    left: 30%;
    border: solid 1px ${Colors.Text};
  }
`;
ModalWrapper.displayName = 'ModalWrapper';

export const ContentWrapper = styled.form`
  padding: 60px 0 120px 20px;
  overflow: scroll;
  height: 100%;
`;
ContentWrapper.displayName = 'ContentWrapper';

export const ModalBtnWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${Colors.BG};
`;
ModalBtnWrapper.displayName = 'ModalBtnWrapper';

export const ModalTitle = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${Colors.BG};
  align-items: center;
  height: 60px;
  z-index: 1;
`;
ModalTitle.displayName = 'ModalTitle';