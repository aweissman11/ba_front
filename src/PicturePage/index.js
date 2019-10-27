import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/scale-out-animation/scale-out-animation.scss';

// URLS
import { photoUrls } from './photoUrls';

// CSS
import './PicturePage.css';

const PicturePage = () => {
  return (
    <div className='picture-page'>
      <h1 className='our-story'>This is Our Story</h1>

      <div className='test-pic-div'>

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
        <article className='his-story'>
          It was quite a Friday. That afternoon, while delivering ice cream for Toscanini's, I got the call from EF offering me a job as an Educational Tour Consultant.
          It was to be my first real job, so I was, understandably, pretty pumped up about it. So I hit up Nina and said "let's celebrate!".
          That night, she hit was hanging out with Helen, a friend of hers and a fellow Rindge grad, so she invited me to tag along.
          I guess Helen reached out to Jen Bogle, who brought along her roommate. So the five of us started the night at Miracle of Science,
          a bar located in the sweet sweet Coast (Central Square, Cambridge for the uninitiated). We were having some drinks and I guess I just
          couldn't bring myself to leave the roommate alone. What can I say but I was in a good mood and thought this girl was pretty cute.
          I started chatting her up and thought we had a bit of a connection, but suddenly, the bartender started offering her FREE DRINKS! Needless to say,
          I knew I had to get us all out of there before someone else swooped in. So I gathered the other girls and offered up something I
          knew no one would be able to resist, free ice cream. We were gonna head to this house party across town anyway and didn't have any beers
          so I said, let's just bring some ice cream. Given my new job offer, I figured this gravy train wouldn't last forever anyway.
          So, just as this roommate lady got offered a brand new, full to the brim, free beer from the bartender, we dragged her out of the bar and
          headed over to Toscis. There we grabbed a few pints and hopped in an uber.
        </article>
      </div>
    </div>
  );
}

export default PicturePage;