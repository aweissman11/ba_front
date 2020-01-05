import React from 'react';

// CSS
import './WhatToBring.css';
import { OuterOutline, InnerOutline } from '../Shared/Styles/Shared.styled';
import { lists } from '../Shared/Data/Lists';

const WhatToBring = () => {
  return (
    <div className='events-page'>
      <h1 className='invited'>Please come prepared with the following</h1>
      <OuterOutline>
        <InnerOutline>
          {lists.map((list, i) => (
            <div className='what-box' key={i}>
              <h3 className='event-event'>{list.who}</h3>
              <p className='info-type'>Don't forget the following:</p>
              {list.what.map((item, i) => (
                <p key={'item-' + i}>{item}</p>
              ))}
            </div>
          ))}
        </InnerOutline>
      </OuterOutline>
    </div>
  );
}

export default WhatToBring;