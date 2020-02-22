import React from 'react';

// Styles
import './Contact.css';
import { OuterOutline, InnerOutline } from '../Shared/Styles/Shared.styled';
import CaawLogo from '../Shared/Elements/CaawLogo.react';
import SpacerDots from '../Shared/Elements/SpacerDots.react';

const Contact = () => {
  return (
    <div className='events-page'>
      <CaawLogo />
      <SpacerDots />
      <h1 className='invited'>Please let us know if you have any questions</h1>
      <OuterOutline>
        <InnerOutline>
          <br />
          <h1>Contact Info</h1>
          <br />
          <h3>Email:</h3>
          <p><a
            href="mailto:chelseyandaaronsbigadventure@gmail.com?subject=I%20Have%20A%20Question"
            target='_blank'
            rel="noopener noreferrer"
            className='email-address'
          >chelseyandaaronsbigadventure@gmail.com</a></p>
          <br />
          <h3>Phone:</h3>
          <p>Aaron - (339) 221-1265</p>
          <p>Chelsey - (206) 992-6861</p>
        </InnerOutline>
      </OuterOutline>
    </div>
  );
}

export default Contact;