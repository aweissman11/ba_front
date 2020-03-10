import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { FancyCheckWrapper, FancyCheckLabel, FancyCheckboxCheck } from '../Styles/FancyCheckbox.styled';


const FancyCheckbox = ({
  id,
  label,
  marginLeft,
  noBottom,
  isChecked,
  checkHandler,
  propertyName,
  propertyValue
}) => {

  useEffect(() => {
    window.addEventListener('keypress', handleEnterKey);

    return () => {
      window.removeEventListener('keypress', handleEnterKey);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleEnterKey = (e) => {
    if (e.target.id === ('span-' + id)) {
      if (e.key === 'Enter' || e.keyCode === 13 || e.keyCode === 32) {
        e.preventDefault();
        e.stopPropagation();
        checkHandler(!isChecked, propertyValue, propertyName);
        e.stopImmediatePropagation();
      }
    }
  }

  const handleChange = (e) => {
    let { checked } = e.target;
    checkHandler(checked, propertyValue, propertyName);
  }

  return (
    <FancyCheckWrapper
      className="exp"
      marginLeft={marginLeft}
      noBottom={noBottom}
    >
      <div className="checkbox">
        <div>
          <div>
            <FancyCheckboxCheck
              type="checkbox"
              id={id}
              checked={isChecked}
              onChange={handleChange}
            />
            <FancyCheckLabel htmlFor={id}>
              <span tabIndex={0} id={'span-' + id}></span>{label}
            </FancyCheckLabel>
          </div>
        </div>
      </div>
    </FancyCheckWrapper>
  );
}

export default FancyCheckbox;

FancyCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  marginLeft: PropTypes.string,
  noBottom: PropTypes.bool,
  isChecked: PropTypes.bool.isRequired,
  checkHandler: PropTypes.func.isRequired,
  propertyName: PropTypes.string,
  propertyValue: PropTypes.any
}