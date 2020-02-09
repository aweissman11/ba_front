import React from 'react';

const OneRsvp = ({
  info
}) => {
  return (
    <div>
      <h1>This is an RSVP</h1>
      <p>{info.name} filled out the form</p>
      <p>Email: {info.email}</p>
      <p>Attending the wedding: {info.attending}</p>
      {info.attending &&
        <p>They are arriving: {info.arriving}</p>
      }
    </div>
  );
}

export default OneRsvp;