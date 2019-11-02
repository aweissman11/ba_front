import React from 'react';

// CSS
import './Clothes.css';
import { LinkIcon } from '../NavButtons/LinkIcon';

const Clothes = () => {
  return (
    <div className='events-page'>
      <h1 className='invited'>You'll almost definitely need to wear some clothes</h1>
      <div className='name-outline'>
        <div className='inner-outline'>
          <h1>More clothes Info Coming Soon...</h1>
          <h3>Please check back in a few weeks</h3>

          <div className='info-section'>
            <div className='small-circle-div'>
              <div className='flower-boots circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Campground Formal</h3>
              <p className='info-block'>Anything you'd wear to a regular wedding except with hiking boots</p>
              <p className='info-block'>Our colors are navy blues, grays, and shades of white if you need inspiration</p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://pin.it/nl2s3kiskkn7nn'>Explore <LinkIcon /></a>
              </p>
            </section>
          </div>

          <hr className='event-break' />

          <div className='info-section'>
            <div className='small-circle-div'>
              <div className='camp-casual circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Campground Casual</h3>
              <p className='info-block'>Things you don't mind getting muddy</p>
              <p className='info-block'>Warm, comfy and soft</p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.llbean.com'>Explore <LinkIcon /></a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clothes;