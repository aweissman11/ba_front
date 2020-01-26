import React, { useState, useEffect } from 'react';
import { FancyInputWrapper, FancyInputLabel, StyledInput } from '../Styles/FancyInput.styled';


const FancyInput = ({
  hint,
  inputName,
  inputChangeHandler,
  inputType,
  inputValue,
  inputId,
  passedKey
}) => {
  let [currentValue, setValue] = useState(inputValue);

  const changeHandler = (e) => {
    let { value } = e.target;
    inputChangeHandler(inputName, value);
    setValue(value);
  }

  useEffect(() => {
    currentValue !== inputValue && setValue(inputValue);
  }, [inputValue])

  return (
    <FancyInputWrapper>
      <StyledInput
        type={inputType || 'text'}
        className="form__field"
        placeholder={hint}
        id={inputId ? inputId : inputName}
        value={currentValue}
        onChange={changeHandler}
        key={passedKey && passedKey}
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