import React, { useState, useEffect } from 'react';
import { FancyInputWrapper, FancyInputLabel, StyledInput } from '../Styles/FancyInput.styled';


const FancyInput = ({
  hint,
  inputName,
  inputChangeHandler,
  inputType,
  inputValue,
  inputId,
  passedKey,
  blurFunc,
  blurVal
}) => {
  let [currentValue, setValue] = useState(inputValue);
  let [emptyClass, setEmptyClass] = useState('');

  const changeHandler = (e) => {
    let { value } = e.target;
    inputChangeHandler(inputName, value);
    setValue(value);

    if (!blurFunc) {
      if (value.length) {
        setEmptyClass('');
      } else {
        setEmptyClass('is-empty');
      }
    }
  }

  const handleBlur = (e) => {
    let { value } = e.target;
    if (blurFunc && !value.length) {
      inputChangeHandler(inputName, blurVal);
      setValue(blurVal);
    }
  }

  useEffect(() => {
    currentValue !== inputValue && setValue(inputValue);
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue])

  return (
    <FancyInputWrapper>
      <StyledInput
        type={inputType || 'text'}
        className={"form__field " + emptyClass}
        placeholder={hint}
        id={inputId ? inputId : inputName}
        value={currentValue}
        onChange={changeHandler}
        key={passedKey && passedKey}
        onBlur={handleBlur}
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