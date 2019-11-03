import React, { useState, useEffect } from 'react';

// Imports
import { photoUrls } from './photoUrls';
import { hisStory, herStory } from './stories';

// CSS
import './OurStory.css';
import { NextIcon } from './NextIcon';
import { PrevIcon } from './PrevIcon';

const OurStory = () => {
  let [currentPosition, setPosition] = useState(0);
  let [sliderWidth, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', setSliderWidth);
    setWidth(window.innerWidth);
  }, []);

  const setSliderWidth = () => {
    setWidth(window.innerWidth);
  }

  const nextPosition = () => {
    if (currentPosition === (photoUrls.length - 1) * sliderWidth) {
      setPosition(0);
    } else {
      setPosition(currentPosition += sliderWidth);
    }
  }

  const prevPosition = () => {
    if (currentPosition === 0) {
      setPosition((photoUrls.length - 1) * sliderWidth);
    } else {
      setPosition(currentPosition -= sliderWidth);
    }
  }

  return (
    <div className='story-page'>
      <h1 className='our-story'>This is Our Story</h1>
      <div className='slider-box'>
        <div className='slide-btn-box right-side' onClick={nextPosition} >
          <NextIcon className='slide-btn next' />
        </div>
        <div className='slide-btn-box left-side' onClick={prevPosition} >
          <PrevIcon className='slide-btn prev' />
        </div>
        <div className="slider" width={photoUrls.length * sliderWidth + 'px'} style={{ right: currentPosition + 'px' }}>
          {photoUrls.map((photo, i) => (
            <div key={i} className='one-slide'>
              <div className='photo-box'>
                {photo.type === 'image' ?
                  <img
                    className='image-itself'
                    aria-label='chelsey and aaron'
                    alt='chelsey and aaron'
                    src={photo.photoUrl}
                  ></img>
                  :
                  <video
                    controls
                    autoPlay
                    muted
                    className='slide-image'
                    aria-label='chelsey and aaron'
                    src={photo.photoUrl}
                    type="video/mp4"
                  ></video>
                }
              </div>
            </div>
          ))}
        </div>
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