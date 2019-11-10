import React from 'react';

// CSS
import './Contact.css';

const Contact = () => {
  return (
    <div className='events-page'>
      <h1 className='invited'>We're just not ready to make these kinds of decisions yet!</h1>
      <div className='name-outline'>
        <div className='inner-outline'>
          <br />
          <h1>Contact Info</h1>
          <br />
          <h3>Email:</h3>
          <p><a
            href="mailto:chelseyandaaronsbigadventure@gmail.com?subject=I%20Have%20A%20Question"
            target='_blank'
            className='email-address'
          >chelseyandaaronsbigadventure@gmail.com</a></p>
          <br />
          <h3>Phone:</h3>
          <p>Aaron - (339) 221-1265</p>
          <p>Chelsey - (206) 992-6861</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;