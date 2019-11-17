import React from 'react';

// CSS
import './Dogs.css';

const Dogs = () => {
  return (
    <div className='events-page'>
      <h1 className='invited'>Information for the Bridal Party</h1>
      <div className='name-outline'>
        <div className='inner-outline'>
          <h1>All dogs are invited, but these are the ones with jobs</h1>
          <h3>Please pack extra poop bags</h3>
          <br />
          <br />

          <div className='info-section'>
            <div className='small-circle-div'>
              <div className='frank circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Frankenstein</h3>
              <p className='info-block'>Our pooch, the one we see every day</p>
              <p className='info-block'>Responsibilities include: squirrel control, mud patrol, puppy kisses</p>
            </section>
          </div>

          <hr className='event-break' />

          <div className='info-section flex-switch'>
            <div className='small-circle-div'>
              <div className='miah circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Miah</h3>
              <p className='info-block'>Gary and Sally's doggo</p>
              <p className='info-block'>Responsibilities include: staying dry, looking pretty, being above it all</p>
            </section>
          </div>

          <hr className='event-break' />

          <div className='info-section'>
            <div className='small-circle-div'>
              <div className='delilah circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Delilah</h3>
              <p className='info-block'>Joel and Wendy's pupper</p>
              <p className='info-block'>Responsibilities include: fetch - all day and night, crumb cleanup</p>
            </section>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Dogs;