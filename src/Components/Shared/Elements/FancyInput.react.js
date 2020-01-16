import React, { useState } from 'react';
import { FancyInputWrapper, FancyInputLabel, StyledInput } from '../Styles/FancyInput.styled';


const FancyInput = ({
  hint,
  inputName,
  inputChangeHandler,
  inputType,
  inputValue
}) => {
  let [currentValue, setValue] = useState(inputValue);

  const changeHandler = (e) => {
    let { value } = e.target;
    console.log('value :', value);
    inputChangeHandler(inputName, value);
    setValue(value);
  }

  return (
    <FancyInputWrapper>
      <StyledInput
        type={inputType || 'text'}
        className="form__field"
        placeholder={hint}
        // name={inputName}
        id={inputName}
        // required
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