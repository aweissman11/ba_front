import React, { useState, useEffect } from 'react';
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
              name={id}
              checked={isChecked}
              onChange={handleChange}
            />
            <FancyCheckLabel htmlFor={id}>
              <span></span>{label}
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
  propertyValue: PropTypes.string
}