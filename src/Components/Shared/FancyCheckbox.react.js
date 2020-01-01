import React, { useState, useEffect } from 'react';
import { FancyCheckWrapper, FancyCheckLabel, FancyCheckboxCheck } from './FancyCheckbox.styled';


const FancyCheckbox = ({ id, label }) => {
  let [loggedIn, setLogin] = useState(false);
  let [peopleList, addPeople] = useState([]);

  const addPerson = () => {
    let newPerson = {
      name: '',
      isKid: false,
      allergies: '',
      hairApt: false
    }

    peopleList = [...peopleList, newPerson];
    addPeople(peopleList);
  }

  return (
    <FancyCheckWrapper className="exp">
      <div className="checkbox">
        <div>
          <div>
            <FancyCheckboxCheck type="checkbox" id={id} name={id} value="" />
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