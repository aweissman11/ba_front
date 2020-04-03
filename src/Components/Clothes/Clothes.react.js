import React from 'react';

// CSS
import './Clothes.css';
import { LinkIcon } from '../NavButtons/LinkIcon.react';
import { OuterOutline, InnerOutline, BasicH3 } from '../Shared/Styles/Shared.styled';
import CaawLogo from '../Shared/Elements/CaawLogo.react';
import SpacerDots from '../Shared/Elements/SpacerDots.react';

const Clothes = () => {
  return (
    <div className='events-page'>
      <CaawLogo />
      <SpacerDots />
      <h1 className='invited'>You'll almost definitely need to wear some clothes</h1>
      <OuterOutline>
        <InnerOutline>
          <BasicH3>Average temperatures will be high <b>60s</b> during the day and in the <b>30s</b> at night</BasicH3>
          <BasicH3>Please pack warm clothes</BasicH3>
          <br />
          <br />

          <div className='info-section'>
            <div className='small-circle-div'>
              <div className='flower-boots circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Campground Formal</h3>
              <p className='info-block'>Anything you'd wear to a regular wedding except with boots</p>
              <p className='info-block'>Our colors are navy blues, grays, and shades of white if you need inspiration</p>
              <p className='info-block'>Please make sure to bring extra warm clothes along</p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://pin.it/nl2s3kiskkn7nn'>Explore <LinkIcon /></a>
              </p>
            </section>
          </div>

          <hr className='event-break' />

          <div className='info-section flex-switch'>
            <div className='small-circle-div'>
              <div className='camp-casual circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Campground Casual</h3>
              <p className='info-block'>Things you don't mind getting dusty</p>
              <p className='info-block'>Warm, comfy and soft</p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.llbean.com'>Explore <LinkIcon /></a>
              </p>
            </section>
          </div>
        </InnerOutline>
      </OuterOutline>
    </div>
  );
}

export default Clothes;