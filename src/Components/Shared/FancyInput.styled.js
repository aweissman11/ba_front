import styled from 'styled-components';
import { Colors } from './Colors';

export const FancyInputWrapper = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
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