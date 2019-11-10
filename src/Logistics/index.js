import React from 'react';

// CSS
import './Logistics.css';
import { LinkIcon } from '../NavButtons/LinkIcon';

const Logistics = () => {
  return (
    <div className='other-info'>
      <h1 className='ceremony-title'>Logistics</h1>
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


      <div className='name-outline'>
        <div className='inner-outline'>
          <div className='info-section'>
            <div className='small-circle-div'>
              <div className='shuttle-pic circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Transportation Options</h3>
              <article className='info-article'>
                <p className='info-detail'>Shuttle Service from the Denver Airport</p>
                <p className='info-block'>2.5 hour trip from the Airport to Dillon</p>
                <p className='info-block'>Picks up every 2 hours 9:30 am-9:30 pm</p>
                <p className='info-block'>$59 for 2 passengers one way</p>
                <p className='info-block'>Please let us know if you are planning to use the shuttle!  We will coordinate picking you up at the drop off in Dillon and getting you to the campground!</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.summitexpress.com/scheduled-shuttle-service/denver-airport-to-silverthorne-and-dillon-shuttle/?gclid=CjwKCAjw0vTtBRBREiwA3URt7sPkf4ysuTga-Q9SXdNEncjgQcyT978cQWQ3_jyl1jjSe4751-nE6xoCPj4QAvD_BwE'>Book transport <LinkIcon /></a>
                </p>
                <p className='info-block'>Book in advance to secure availability!</p>
              </article>
              <article className='info-article'>
                <p className='info-detail'>Rental Cars</p>
                <p className='info-block'>We reccomend you rent your car from the Denver Airport</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.flydenver.com/'>Denver International <LinkIcon /></a>
                </p>
              </article>



              <h3 className='event-event'></h3>

            </section>
          </div>

          <hr className='event-break' />

          <div className='info-section flex-switch'>
            <div className='small-circle-div'>
              <div className='tent-pack-pic circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Tent Reservation Block</h3>
              <p className='info-block'>We have reserved 25 two person camping packages from Outdoors Geek.  Two person camping packages include: One 3 person tent, two individual self inflating sleeping pads, and two individual sleeping bags.</p>
              <p className='info-block'>For your convenience, we will pick up camping equipment from Outdoors Geek on Thursday July 2 and return the equipment Monday July 6.  All you have to do is show up to the campground and set up your tent! (Don't worry, we'll help those who need it!)</p>
              <p className='info-block'>Two person camping packages will be $50 per package for the weekend, we have covered the 50% reservation deposit because we love you and would love for you to rough it with us!</p>
              <p className='info-block'>If you do not have your own tent to bring, please call Outdoors Geek to reserve a package.  Let them know if you'd like any extras (i.e., camp coolers, chairs, stoves, cooking utensils, or more days):</p>
              <p className='info-detail'><b>Point of Contact:</b></p>
              <p className='info-block'>Chelsea Morquedt - (303) 699-6944</p>
              <p className='info-block'>email - <a href="mailto:chelsea@outdoorsgeek.com?subject=Chelsey and Aaron's July 4th Wedding">chelsea@outdoorsgeek.com</a></p>
              <p className='info-block'>Please reference our reservation under Chelsey Anderson and Aaron Weissman</p>
              <p className='to-do-info'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.outdoorsgeek.com/product/basic-camping-packages/'>Outdoors Geek <LinkIcon /></a>
              </p>
              <p className='info-detail'>We hope you camp with us for the weekend!!</p>
            </section>
          </div>

          <hr className='event-break' />

          <div className='info-section'>
            <div className='small-circle-div'>
              <div className='other-tent circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Other Tent Camping Rental Options</h3>
              <article className='info-article'>
                <p className='info-detail'>Vital Outdoors</p>
                <p className='info-block'>$98 for tent camping packages, 1-3 days (Light backpacking equipment)</p>
                <p className='info-block'>Pickup located in downtown Denver</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.vitaloutdoors.com/rentals/camping-packages/'>Book here <LinkIcon /></a>
                </p>
              </article>
              <article className='info-article'>
                <p className='info-detail'>Rental Mountainside</p>
                <p className='info-block'>Tent camping kits $158 for tent and all equipment 1-3 days, 1 tent 2 sleeping bags and sleeping pads, stove and other equipment.</p>
                <p className='info-block'>Pickup located in Golden, CO</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.mountainsidegearrental.com/camping-rental-packages/'>Book here <LinkIcon /></a>
                </p>
              </article>
              <article className='info-article'>
                <p className='info-detail'>REI Rentals</p>
                <p className='info-block'>Miscellaneous camping equipment rental</p>
                <p className='info-block'>Pickup located in Boulder</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.rei.com/rentals?s_kwcid=PS_Rentals_Google%7C421_817%7C%2Btent%20%2Brental%20%2Brei%7CPB_Rentals%7C3169187b-82ae-4a0c-ab31-5366dab4542c%7Ckwd-787182122765&kclid=3169187b-82ae-4a0c-ab31-5366dab4542c&gclid=Cj0KCQjwgNXtBRC6ARIsAIPP7RtVxHCrGAyKVMsqisn2bbJad5mwK-lKez4XbmILDgnws8tFJwPRIpUaAhB6EALw_wcB'>Book here <LinkIcon /></a>
                </p>
              </article>
            </section>
          </div>
          <hr className='event-break' />

          <div className='info-section flex-switch'>
            <div className='small-circle-div'>
              <div className='rv-pic circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>RV Information</h3>

              <article className='info-article'>
                <p className='info-detail'>How to RV</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://learntorv.com/basics-of-rving/'>Essential Information <LinkIcon /></a>
                </p>
              </article>

              <article className='info-article'>
                <p className='info-detail'>RV rental B&B</p>
                <p className='info-block'>RESERVE ASAP IF YOU WOULD LIKE AN RV.  This is their busiest weekend and they go fast!</p>
                <p>8101 E 40th Ave, Denver, CO 80207</p>
                <p>25 minutes from airport</p>
                <p>From $295 per night, 3 night minimum</p>
                <p>$500 deposit, if you cancel this goes towards a future reservation with B&B</p>
                <p className='info-block'>All RVs are equipped to go completely dry camping, i.e. no hookups.  Generators would need to be used to power anything 110V inside the coach (i.e., microwave, TV/DVD, A/C, and anything you’d be plugging into a regular wall plug-in)</p>
                <p className='info-block'>Onboard 40 gallon water tank: use for the sinks, shower, and toilet. Separate holding tank for gray water: for toilet (black tank) and sinks and shower (gray tank). Onboard propane tank: for cooking, hot water, and heat.</p>
                <p className='info-block'>CARSEATS: As long as the car seat can be secured with a lap belt, car seats can be used in any of B&B coaches. They all have belts in at least the front facing dinette seats, as well as the sofa. The 2020 models have the lap belts in both the front and rear facing dinette seats.</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://bb-rv.com/rv-rental-denver/'>Book here <LinkIcon /></a>
                </p>
              </article>

              <article className='info-article'>
                <p className='info-detail'>RV Rental Apollo</p>
                <p className='info-block'>RESERVE ASAP IF YOU WOULD LIKE AN RV.  This is their busiest weekend and they go fast!</p>
                <p>3280 Chambers Rd, Aurora, CO 80011</p>
                <p>19 minutes from the airport</p>
                <p>Camper vans to RVs</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.apollorv.com/'>Book here <LinkIcon /></a>
                </p>
              </article>

              <article className='info-article'>
                <p className='info-detail'>RV Share</p>
                <p className='info-block'>Like airbnb except for RVs!</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://rvshare.com/'>Book here <LinkIcon /></a>
                </p>
              </article>

              <article className='info-article'>
                <p className='info-detail'>RV rental Cruise America</p>
                <p>8950 N Federal Blvd, Federal Heights, CO 80260</p>
                <p>32 minutes from the airport</p>
                <p>From $164 per night</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.cruiseamerica.com/'>Book here <LinkIcon /></a>
                </p>
              </article>
            </section>
          </div>

          <hr className='event-break' />

          <div className='info-section'>
            <div className='small-circle-div'>
              <div className='camper-van circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Campervan Information</h3>

              <article className='info-article'>
                <p className='info-detail'>Camper van rental Rocky Mountain Campervans</p>
                <p className='info-block'>RESERVE ASAP IF YOU WOULD LIKE AN RV.  This is their busiest weekend and they go fast!</p>
                <p>6101 W 11th Ave #1, Lakewood, CO 80214</p>
                <p>37 minutes from the airport</p>
                <p>VW vans and camper vans!</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.rockymountaincampervans.com/'>Book here <LinkIcon /></a>
                </p>
              </article>

              <article className='info-article'>
                <p className='info-detail'>Camper Van Rental Native Campervans</p>
                <p className='info-block'>RESERVE ASAP IF YOU WOULD LIKE AN RV.  This is their busiest weekend and they go fast!</p>
                <p>2919 E 42nd Ave, Denver, CO 80216</p>
                <p>27 minutes from the airport</p>
                <p>Vans from $129 per night</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.nativecampervans.com/'>Book here <LinkIcon /></a>
                </p>
              </article>

              <article className='info-article'>
                <p className='info-detail'>Camper Van Rental Escape</p>
                <p>3538 Peoria St Unit 504, Aurora, CO 80010</p>
                <p>23 minutes from the airport</p>
                <p>From $176 per night</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.escapecampervans.com/locations/denver-colorado/?utm_source=google&utm_medium=organic&utm_campaign=gmb&utm_term=website'>Book here <LinkIcon /></a>
                </p>
              </article>

            </section>
          </div>

          <hr className='event-break' />

          <div className='info-section flex-switch'>
            <div className='small-circle-div'>
              <div className='soviet-hotel circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>We hope as many of you as possible will camp with us</h3>
              <article className='info-article'>
                <p className='info-detail'>Hotels</p>
                <p className='info-block'>Hotels are not as fun as camping. But... if you're over the age of 50, or have young kids, we understand.</p>
                <p className='info-block'>Here's some nice lodging options ten minutes away (not an actual Motel 6):</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.keystoneresort.com/plan-your-trip/stay/keystone-lodging.aspx?code=keystone-lodge-hotel'>Check it out <LinkIcon /></a>
                </p>
              </article>

            </section>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Logistics;