import React, { useState } from 'react';
import { FancyInputWrapper, FancyInputLabel, StyledInput } from '../Styles/FancyInput.styled';


const FancyInput = ({
  hint,
  inputName,
  inputChangeHandler,
  inputType,
  inputValue,
  inputId
}) => {
  let [currentValue, setValue] = useState(inputValue);

  const changeHandler = (e) => {
    let { value } = e.target;
    inputChangeHandler(inputName, value);
    setValue(value);
  }

  return (
    <FancyInputWrapper>
      <StyledInput
        type={inputType || 'text'}
        className="form__field"
        placeholder={hint}
        id={inputId ? inputId : inputName}
        value={currentValue}
        onChange={changeHandler}
      />
      <FancyInputLabel
        htmlFor={inputName}
        className="form__label"
      >
        {hint}
      </FancyInputLabel>
    </FancyInputWrapper>
  );
}

export default FancyInput;