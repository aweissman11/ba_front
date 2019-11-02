import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/scale-out-animation/scale-out-animation.scss';

// Imports
import { photoUrls } from './photoUrls';
import { hisStory, herStory } from './stories';

// CSS
import './OurStory.css';

const OurStory = () => {
  return (
    <div className='story-page'>
      <h1 className='our-story'>This is Our Story</h1>

      <div className='pic-div'>

        <AwesomeSlider cssModule={AwesomeSliderStyles} style={{ backgroundColor: '#0c1b23' }}>
          {photoUrls && photoUrls.map((item, i) => (

            <div className='li-0' key={i}>
              <div className='li-contents'>
                {item.type === 'image' ?
                  <img
                    className='slide-image'
                    aria-label='chelsey and aaron'
                    alt='chelsey and aaron'
                    src={item.photoUrl}
                  ></img>
                  :
                  <video
                    controls
                    autoPlay
                    muted
                    className='slide-image'
                    aria-label='chelsey and aaron'
                    src={item.photoUrl}
                    type="video/mp4"
                  ></video>
                }
              </div>
            </div>
          ))}
        </AwesomeSlider>
      </div>
      <div className='stories'>
        <section className='story'>
          <h1 className='story-time'>His Story: How it Started</h1>
          <article className='the-story'>
            {hisStory}
          </article>
        </section>
        <section className='story'>
          <h1 className='story-time'>Her Story: How it Happened</h1>
          <article className='the-story'>
            {herStory}
          </article>
        </section>
      </div>
    </div>
  );
}

export default OurStory;