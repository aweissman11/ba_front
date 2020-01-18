import styled from 'styled-components';
import { Colors } from '../Shared/Styles/Colors';
import { Devices } from '../Shared/Styles/Devices';

export const LoadingContainer = styled.div`
  background: ${Colors.BG};
  width: ${({ isModal }) => isModal ? '100px' : '100vw'};
  height: ${({ isModal }) => isModal ? '50%' : '100vh'};
  display: flex;
  justify: center;
  align-items: center;
  margin: auto;

  .spinner-box {
  width: ${({ isModal }) => isModal ? '100px' : '300px'};
  height: ${({ isModal }) => isModal ? '100px' : '300px'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin: auto;
}

.circle-border {
  width: ${({ isModal }) => isModal ? '50px' : '150px'};
  height: ${({ isModal }) => isModal ? '50px' : '150px'};
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(63,249,220);
  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);
  animation: spin .8s linear 0s infinite;
}

.circle-core {
  width: 100%;
  height: 100%;
  background-color: ${Colors.BG};
  border-radius: 50%;
}


  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to{
      transform: rotate(359deg);
    }
  }

  @media ${Devices.Laptop} {
    height: ${({ isModal }) => isModal ? '100px' : '100vh'};
  }
`;
LoadingContainer.displayName = 'LoadingContainer';