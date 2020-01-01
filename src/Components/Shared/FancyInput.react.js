import React, { useState, useEffect } from 'react';
import { FancyInputWrapper, FancyInputLabel, StyledInput } from './FancyInput.styled';


const FancyInput = ({ hint, inputName }) => {
  let [inputValue, setValue] = useState('');

  const changeHandler = (e) => {
    let { value } = e.target;
    setValue(value);
  }

  return (
    <FancyInputWrapper>
      <StyledInput
        type="input"
        className="form__field"
        placeholder={hint}
        name={inputName}
        id={inputName}
        required
        value={inputValue}
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