import styled from 'styled-components';
import { Colors } from './Colors';

export const FancyCheckWrapper = styled.div`
  margin: 10px 0;

  .checkbox {
    display: table-cell;
    height: 100%;
    vertical-align: middle;
    text-align: center;
  }
`;

export const FancyCheckLabel = styled.label`
    display: inline-block;
    color: ${Colors.Text};
    cursor: pointer;
    position: relative;

    span {
      display: inline-block;
      position: relative;
      background-color: transparent;
      width: 25px;
      height: 25px;
      transform-origin: center;
      border: 2px solid ${Colors.Text};
      border-radius: 50%;
      vertical-align: -6px;
      margin-right: 10px;
      transition: background-color 150ms 200ms, transform 350ms cubic-bezier(.78,-1.22,.17,1.89);

    &:before {
      content: "";
      width: 0px;
      height: 2px;
      border-radius: 2px;
      background: ${Colors.Text};
      position: absolute;
      transform: rotate(45deg);
      top: 11px;
      left: 6px;
      transition: width 50ms ease 50ms;
      transform-origin: 0% 0%;
    }

    &:after {
      content: "";
      width: 0;
      height: 2px;
      border-radius: 2px;
      background: ${Colors.Text};
      position: absolute;
      transform: rotate(305deg);
      top: 15px;
      left: 8px;
      transition: width 50ms ease;
      transform-origin: 0% 0%;
    }
  }

  &:hover {
    span {
      &:before {
        width: 5px;
        transition: width 100ms ease;
      }

      &:after {
        width: 10px;
        transition: width 150ms ease 100ms;
      }
    }
  }
`

export const FancyCheckboxCheck = styled.input`
  display: none;

  &:checked {
    + label {
      span {
        background-color: ${Colors.Text};
        transform: scale(1.25);

        &:after {
          width: 10px;
          background: ${Colors.BG};
          transition: width 150ms ease 100ms;
        }

        &:before {
          width: 5px;
          background: ${Colors.BG};
          transition: width 150ms ease 100ms;
        }
      }

      &:hover {
        span {
          background-color: ${Colors.Text};
          transform: scale(1.25);

          &:after {
            width: 10px;
            background: ${Colors.BG};
            transition: width 150ms ease 100ms;
          }

          &:before {
            width: 5px;
            background: ${Colors.BG};
            transition: width 150ms ease 100ms;
          }
        }
      }
    }
  }
  `;
FancyCheckboxCheck.displayName = 'FancyCheckboxCheck';