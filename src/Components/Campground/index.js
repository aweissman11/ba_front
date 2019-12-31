import React from 'react';

// CSS
import { LinkIcon } from '../NavButtons/LinkIcon';

const Campground = () => {
  return (
    <div className='other-info'>
      <h1 className='ceremony-title'>Campground</h1>
      <div className='circle-div'>
        <div className='tent-pic'></div>
      </div>
      <div className='ceremony-container'>
        <h1 className='ceremony-title'>The Campground</h1>
        <p className='ceremony-info'>The ceremony will be held on July 4th at <a href='https://www.google.com/maps/place/Windy+Point+Group+Campground/@39.6078137,-106.0454653,15z/data=!4m2!3m1!1s0x0:0xb5c6b7ae8c358e23?sa=X&ved=2ahUKEwjtnM_Aq5XlAhXMsJ4KHQmpA6kQ_BIwDHoECA0QCA' target='_blank' rel="noopener noreferrer">Windy Point Campground</a> in Dillon, CO</p>

        <div className='campground-info'>
          <h2>Overview</h2>
          <p>Windy Point is located near Dillon Reservoir at an elevation of 9,000 feet in the White River National Forest. The site consists of a group camp and a group picnic shelter that can accommodate up to 100 people each. With views to Dillon Reservoir and several mountain ranges, Windy Point is ideal for larger groups seeking recreation and relaxation. Due to the pine beetle infestation and removal of hazard trees, there is little or no shade at Windy Point.</p>
          <hr className='campground-hr' />
          <h2>Facilities</h2>
          <p>Windy Point Group Campground has two group campsites available for the use; the Lake Loop and the Forest Loop. Both loops are able to accommodate tents, trailers and RV's. Electrical hook-ups are not available. Each loop is equipped with picnic tables, campfire rings, and vault toilets and both are pet friendly. Additionally, the Lake Loop has a handicap-accessible group picnic shelter available for use. Boat ramp access is available in the marinas located in the nearby towns of Frisco and Dillion.</p>
          <hr className='campground-hr' />
          <h2> <a target='_blank' rel="noopener noreferrer" href='https://www.silverthorne.org/town-services/recreation-center'>Showers <LinkIcon /></a></h2>
          <p>Showers can be accessed at Sliverthorne Rec Center. $12 daily admission.</p>
          <hr className='campground-hr' />
          <h2>Natural Features</h2>
          <p>In the heart of the Rocky Mountains, the 2.3 million acre White River National Forest is a place of serenity and adventure, boasting 8 wilderness areas, 4 defined seasons, and 10 peaks surpassing 14,000 feet in elevation. Described as being more vertical than horizontal, the nearby Eagles Nest Wilderness, designated in 1976, is a playground of craggy cliffs, sheer rock faces, alpine lakes, and deep, forested valleys. Visitors will find foot travel across this pristine area challenging and often strenuous, but will be rewarded with spectacular scenery. Wildlife in the area abounds. Bighorn sheep navigate rocky ridges and bull elk bugle at dusk. Scenic rivers sustain populations of cutthroat, rainbow, and brown trout. Alpine regions provide habitat for pika and ptarmigan. These species, along with many others, depend on surrounding undeveloped wilderness, clean streams, and diverse forests to live.</p>
          <hr className='campground-hr' />
          <h2>Recreation</h2>
          <p>Dillon Reservoir, often referred to as Lake Dillon, is the greatest draw to Windy Point and an ideal spot for fishing, boating, and sailing. Anglers will find that the reservoir supports a healthy population of rainbow and brown trout, with an occasional cutthroat trout finding its way into the lake from feeder streams. Opportunities for hiking and biking include more than 7 paved miles of the 50-mile Summit County trail system. From the reservoir, the Old Dillon Reservoir Trail is a favorite. This short, easy trail has spectacular views of the Tenmile Range and the Continental Divide. The Old Dillon Reservoir was built in the 1930s to supply water to the original town of Dillon, which is now covered by the new Dillon Reservoir.</p>
        </div>

        <iframe
          title='windy-point-map'
          src="https://maps.google.com/maps?q=windy%20point%20campground%20co&t=k&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          className='windy-map'
          style={{
            border: 0,
            height: '600px',
            width: window.innerWidth < 970 ? '90%' : '75%',
            borderRadius: '12px'
          }}
          allowFullScreen=""
        >
        </iframe>
      </div>
    </div>
  );
}

export default Campground;