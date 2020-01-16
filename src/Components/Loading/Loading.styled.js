import styled from 'styled-components';
import { Colors } from '../Shared/Styles/Colors';

export const LoadingContainer = styled.div`
  background: ${Colors.BG};
  width: 100vw;
  height: 100vh;

  #main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .spinner {
    position: relative;
  }
  .spinner:before, .spinner:after {
    content: "";
    position: relative;
    display: block;
  }
  .spinner:before {
    animation: spinner 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    width: 5em;
    height: 5em;
    background-color: ${Colors.Text};
  }
  .spinner:after {
    animation: shadow 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    bottom: -1.5em;
    height: .25em;
    border-radius: 50%;
    background-color: #000;
  }

  @keyframes spinner {
    50% {
      border-radius: 50%;
      transform: scale(0.5) rotate(360deg);
    }
    100% {
      transform: scale(1) rotate(720deg);
    }
  }
  @keyframes shadow {
    50% {
      transform: scale(0.5);
      background-color: #000;
    }
  }
`;
LoadingContainer.displayName = 'LoadingContainer';