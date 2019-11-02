import React, { useState, useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/scale-out-animation/scale-out-animation.scss';

// Imports
import { photoUrls } from './photoUrls';
import { hisStory, herStory } from './stories';

// CSS
import './OurStory.css';
import { NextIcon } from './NextIcon';
import { PrevIcon } from './PrevIcon';

const OurStory = () => {
  let [currentPosition, setPosition] = useState(0);
  let [sliderWidth, setWidth] = useState(document.body.clientWidth);

  useEffect(() => {
    window.addEventListener('resize', setSliderWidth);
    setWidth(document.body.clientWidth);
  }, []);

  const setSliderWidth = () => {
    setWidth(document.body.clientWidth);
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




      <div className='pic-div'>

        {/* <AwesomeSlider cssModule={AwesomeSliderStyles} style={{ backgroundColor: '#0c1b23' }}>
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
        </AwesomeSlider> */}
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