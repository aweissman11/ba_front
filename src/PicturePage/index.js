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
          It was to be my first real job, so I was, understandably, pretty pumped up about it.
          So I hit up Nina and said "let's celebrate!".
          That night, she hit was hanging out with Helen, a friend of hers and a fellow Rindge grad, so she invited me to tag along.
          I guess Helen reached out to her friend, Jen Bogle, who brought along her roommate.
          So the five of us started the night at Miracle of Science, a bar located in the sweet sweet Coast (Central Square, Cambridge for the uninitiated).
          We were having some drinks and I guess I just couldn't bring myself to leave the roommate alone.
          What can I say but I was in a good mood and thought this girl was pretty cute.
          I started chatting her up and thought we had a bit of a connection, but suddenly, the bartender started offering her FREE DRINKS!
          Needless to say, I knew I had to get us all out of there before someone else swooped in.
          So I gathered the other girls and offered up something I knew no one would be able to resist, free ice cream.
          We were gonna head to this house party across town anyway and didn't have any beers so I said, let's just bring some ice cream.
          Given my new job offer, I figured this gravy train wouldn't last forever anyway.
          So, just as this roommate lady got offered a brand new, full to the brim, free beer from the bartender, we dragged her out of the bar and headed over to Toscis.
          There we grabbed a few pints before heading over to what we've now dubbed the "moon and stars party" in North Cambridge.
          After arriving at the party, I spent the rest of the evening harranging this cute roommate of Jen's.
          As it has since been described, I was like a puppy dog, following her around asking her questions and doing everything I could to make her laugh.
          We had a bit of a connection, especially when talking about biking around the city going full speed on our road bikes.
          There was a brief tense moment when she found out I didn't wear a helmet at the time, but I thought she seemed pretty great.
          As the night wore on, I knew I had to ask for her phone number, but wanted to find the right moment when we weren't surrounded by everyone else.
          Then, suddenly, Jen came by and said "our ride is here," and the two of them hightailed it outta there!
          I was stunned and upset at myself for missing my chance.
          I left the party a little while later, having enjoyed myself, but ultimately disapointed that I hadn't gotten this girl's number.
          The next day though, I had a thought.
          Since Nina knows Helen, and Helen knows Jen, and Jen lives with this girl, maybe I could track down her number.
          So I hit up Nina and asked if she thought she could give it a shot.
          Nina texted Helen, who reached out to Jen who asked her roommate.
          I guess she said it was ok to pass along her number, so Jen sent it to Helen who sent it over to Nina who sent it over to me!
          I was pumped, but the hard part was yet to come.
          I still had to craft the ultimate openning text in order to both capture the fun we'd had the night before and get this girl on board with going out for drinks with me.
          I pained over the task running through idea after idea until I realized what leverage I had.
          So I sent her a text promising to always wear my helmet from now until forever if she'd agree to go out for a few drinks with me.
          Little did I realize what I'd started as the initial response was just a photo of a bloody face with the caption: "This is what happens when you don't wear your helmet!"
          I was sure I'd made a huge mistake.
          But, holding onto that feeling from the night before, I pushed on and we agreed to grab dinner and drinks at East Coast Grill the following Thursday.
          The roommate's name is Chelsey and the story of the first date will have to wait for another time.
        </article>
      </div>
    </div>
  );
}

export default PicturePage;