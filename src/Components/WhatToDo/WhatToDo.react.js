import React from 'react';

// STYLE
import './WhatToDo.css';
import { LinkIcon } from '../NavButtons/LinkIcon.react';
import { OuterOutline, InnerOutline } from '../Shared/Styles/Shared.styled';
import CaawLogo from '../Shared/Elements/CaawLogo.react';
import SpacerDots from '../Shared/Elements/SpacerDots.react';

const WhatToDo = () => {
  return (
    <div className='events-page'>
      <CaawLogo />
      <SpacerDots />
      <h1 className='invited'>There's lots to do!</h1>
      <OuterOutline>
        <InnerOutline className='the-things'>
          <div className='info-section'>
            <div className='small-circle-div'>
              <div className='paddle-boarders circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Boating from Dillon or Frisco Marina</h3>
              <p className='info-detail'>Kayak, Canoe, Paddleboard, Pontoon Boat rentals:</p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.townofdillon.com/marina'>Dillon Marina <LinkIcon /></a>
              </p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.townoffrisco.com/play/frisco-bay-marina/general-info/'>Frisco Marina <LinkIcon /></a>
              </p>
              <p>Rent in advance to secure availability!</p>
            </section>
          </div>

          <hr className='event-break' />

          <div className='info-section flex-switch'>
            <div className='small-circle-div'>
              <div className='sapphire-point circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Scenic ViewPoints and Drives</h3>
              <article className='info-article'>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.keystoneresort.com/explore-the-resort/activities-and-events/summer-activities/scenic-lift-rides.aspx'>Keystone Gondola Rides - $17 <LinkIcon /></a>
                </p>
              </article>
              <article className='info-article'>
                <p className='info-detail'>Sapphire Point</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.google.com/maps/place/Sapphire+Point+Overlook/@39.5880556,-106.0457998,17z/data=!3m1!4b1!4m5!3m4!1s0x876a595c3486159b:0xcf1ada39b148e108!8m2!3d39.5880556!4d-106.0436111'>Google Maps Link <LinkIcon /></a>
                </p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.alltrails.com/trail/us/colorado/sapphire-point-overlook-trail'>All Trails <LinkIcon /></a>
                </p>
                <p>Elevation 9,500 ft - 2.2 miles from the campground,  0.6 miles walk from parking to excellent views of Dillon Reservoir.</p>
              </article>
              <article className='info-article'>
                <p className='info-detail'>Loveland Pass Scenic Drive</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.google.com/maps/place/Loveland+Pass/@39.663596,-105.8966879,14z/data=!3m1!4b1!4m5!3m4!1s0x876a5186de59a52d:0x279da6a2fcfa5d07!8m2!3d39.6635979!4d-105.8791783'>Google Maps Link <LinkIcon /></a>
                </p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://atravelfortaste.com/wpblog/2018/10/04/loveland-pass-colorado-2/'>Info Link <LinkIcon /></a>
                </p>
                <p>Elevation 11,991 - 14 miles from the campground.  Scenic mini hikes from the summit.</p>
              </article>
              <article className='info-article'>
                <p className='info-detail'>Hoosier Pass</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.google.com/maps/place/Hoosier+Pass/@39.3616544,-106.0712738,15z/data=!3m1!4b1!4m5!3m4!1s0x876af1f7b585930f:0x505288f57e791dd8!8m2!3d39.3616552!4d-106.062519'>Google Maps Link <LinkIcon /></a>
                </p>
                <p>Elevation 11,595 ft - 20 miles from campground, plenty of short or long hikes off the summit!</p>
              </article>
              <article className='info-article'>
                <p className='info-detail'>Independence Pass</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.google.com/maps/place/Independence+Pass/@39.1085503,-106.5814893,14z/data=!3m1!4b1!4m5!3m4!1s0x87401f8c23d42d71:0x1431b65d1e91437f!8m2!3d39.1085522!4d-106.5639797'>Google Maps Link <LinkIcon /></a>
                </p>
                <p>Elevation 12,095 - 75 mile drive from the campground but well worth it!</p>
              </article>
              <article className='info-article'>
                <p className='info-detail'>Other views in Summit County</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.friscolodge.com/blog/10-epic-views-you-will-only-find-summit-county-colorado/#.XbWvvuhKhPY'>Blog <LinkIcon /></a>
                </p>
                <p></p>
              </article>
            </section>
          </div>

          <hr className='event-break' />

          <div className='info-section'>
            <div className='small-circle-div'>
              <div className='fishing-pic circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Fishing</h3>
              <p className='info-detail'>1 day fishing license - $17 for non resident:</p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.cpwshop.com/licensing.page'>Get a license <LinkIcon /></a>
              </p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.townoffrisco.com/play/dillon-reservoir/fishing/'>Fishing pole rentals <LinkIcon /></a>
              </p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://bigedsfishing.com'>Fishing tour <LinkIcon /></a>
              </p>
            </section>
          </div>

          <hr className='event-break' />

          <div className='info-section flex-switch'>
            <div className='small-circle-div'>
              <div className='mountain-hiking circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Hiking - Welcome to Colorado!</h3>
              <p className='info-detail'>Everywhere nearby is a beautiful hike</p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.alltrails.com/us/colorado/dillon'>All Trails <LinkIcon /></a>
              </p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.hikingproject.com/directory/8017985/silverthorne-dillon'>Hiking Project <LinkIcon /></a>
              </p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://cpw.state.co.us/CTS'>CoTrex <LinkIcon /></a>
              </p>
            </section>
          </div>

          <hr className='event-break' />

          <div className='info-section'>
            <div className='small-circle-div'>
              <div className='mountain-biking circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Electric Bikes, Street Bikes, Mountain Bikes</h3>
              <p className='info-detail'>Frisco Paved Bike Paths</p>
              <ul className='info-list'>
                <li>
                  <b>Summit County Recreational Pathway:</b>
                  <p>A 55-mile long network of paved paths weaving through Summit County to the adjacent towns of Breckenridge, Dillon, and Silverthorne.</p>
                </li>
                <li>
                  <b>Loop Around Dillon Reservoir:</b>
                  <p>A loop on Summit County’s dedicated paved pathway with just a single section shared with motor vehicles. A significant climb up Swan Mountain Road opens up to a breathtaking view at Sapphire Point.</p>
                </li>
                <li>
                  <b>Copper Triangle:</b>
                  <p>A 79-mile route with 5,900 feet of climbing, this road ride offers beautiful views and can be ridden in either direction. Check out this ride in mid-late September to experience the changing Aspens.</p>
                </li>
              </ul>
              <p className='info-detail'>Frisco Mountain Bike Trails</p>
              <ul className='info-list'>
                <li>
                  <b>Peaks Trail:</b>
                  <p>This moderately difficult trail can be ridden from Breckenridge or Frisco, with an out and back from Frisco clocking in at 18 miles.</p>
                </li>
                <li>
                  <b>Frisco Peninsula:</b>
                  <p>This 6-mile ride scales Dillon Reservoir and is the perfect choice for an easier ride to warm up your legs. Many trails head off from the peninsula trail for exploring.</p>
                </li>
              </ul>
              <p className='info-detail'>Frisco Bike Park</p>
              <ul className='info-list'>
                <li>
                  <p className='to-do-info'>
                    <a target='_blank' rel="noopener noreferrer" href='https://www.townoffrisco.com/play/biking/bike-park/'>Frisco Bike Park <LinkIcon /></a>
                  </p>
                </li>
              </ul>
              <p className='info-detail'>Rentals</p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.pioneersportscolorado.com/rentals/bikes/frisco-bike-rentals/'>Pioneer Sports <LinkIcon /></a>
              </p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://christysports.com/bike/frisco-bike-shop.html'>Christy Sports <LinkIcon /></a>
              </p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='http://rebelskiandbike.com/frisco-main-bike/'>Rebel Ski and Bike <LinkIcon /></a>
              </p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.bluevalleyski.com/e-bike-rentals/'>Blue Valley Ski <LinkIcon /></a>
              </p>
              <p>Rent in advance to secure availability!</p>
            </section>
          </div>

          <hr className='event-break' />

          <div className='info-section flex-switch'>
            <div className='small-circle-div'>
              <div className='frisco-co circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Town Activities</h3>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.townoffrisco.com/'>Frisco July 4th Festivities <LinkIcon /></a>
              </p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.townofdillon.com/'>Town of Dillon <LinkIcon /></a>
              </p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.townoffrisco.com/play/concert-in-the-park-series/'>Concerts in the Park <LinkIcon /></a>
              </p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.gobreck.com/'>Breckenridge <LinkIcon /></a>
              </p>
            </section>
          </div>

          <hr className='event-break' />

          <div className='info-section'>
            <div className='small-circle-div'>
              <div className='frisco-food circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Food</h3>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.tripadvisor.com/Restaurants-g33389-Dillon_Colorado.html'>Dillon <LinkIcon /></a>
              </p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.tripadvisor.com/Restaurants-g33433-Frisco_Colorado.html'>Frisco <LinkIcon /></a>
              </p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.tripadvisor.com/Restaurants-g33645-Silverthorne_Colorado.html'>Silverthorne <LinkIcon /></a>
              </p>
            </section>
          </div>

          <hr className='event-break' />

          <div className='info-section flex-switch'>
            <div className='small-circle-div'>
              <div className='croquet circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Campground Games!!!</h3>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.woodmallets.com/how-to-play-croquet/'>Croquet <LinkIcon /></a>
              </p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.cornholeworldwide.com/cornhole-rules/'>Cornhole <LinkIcon /></a>
              </p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.youtube.com/watch?v=2hhN6S-1urM'>Bocce <LinkIcon /></a>
              </p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.bucketball.com/blogs/news/life-size-beer-pong'>Life Sized Beirut <LinkIcon /></a>
              </p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.dickssportinggoods.com/c/outdoor-games'>Hopefully much more... <LinkIcon /></a>
              </p>
            </section>
          </div>

        </InnerOutline>
      </OuterOutline>
    </div>
  );
}

export default WhatToDo;