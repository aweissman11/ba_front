import styled from 'styled-components';
import { Colors } from './Colors';

export const FancyInputWrapper = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: ${Colors.Text};
    transition: background-color 5000s ease-in-out 0s;
  }
`;
FancyInputWrapper.displayName = 'FancyInputWrapper';

export const StyledInput = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${Colors.Text};
  outline: 0;
  color: ${Colors.Text};
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  font-size: 1em;

  &:invalid {
    color: #e67e7e;
    border-bottom: 2px solid #e67e7e;
  }

  &.is-empty {
    color: #e67e7e;
    border-bottom: 2px solid #e67e7e;
  }

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    cursor: text;
    top: 20px;
  }

  &:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.3s;
    color: ${Colors.Text};
    font-weight: 700;
  }

  padding-bottom: 6px;
  border-bottom: 2px solid ${Colors.Text};
  font-weight: 700;
  border-width: 3px;
  border-image-slice: 1;
}
`;
StyledInput.displayName = 'StyledInput';


export const FancyInputLabel = styled.label`
position: absolute;
  top: 0;
  display: block;
  transition: 0.3s;
  color: ${Colors.Text};
`;
FancyInputLabel.displayName = 'FancyInputLabel';