import React from 'react';

// CSS
import '../Logistics/Logistics.css';
import { LinkIcon } from '../NavButtons/LinkIcon.react';
import { OuterOutline, InnerOutline, PageWrapper } from '../Shared/Styles/Shared.styled';

const Lodging = () => {
  return (
    <PageWrapper className='other-info'>
      <h1 className='ceremony-title'>Lodging</h1>
      <div className='circle-div'>
        <div className='tent-pic tent-out'></div>
      </div>

      <OuterOutline>
        <InnerOutline>
          <div className='info-section flex-switch'>
            <div className='small-circle-div'>
              <div className='tent-pack-pic circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Tent Reservation Block (Recommended)</h3>
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
        </InnerOutline>
      </OuterOutline>

    </PageWrapper>
  );
}

export default Lodging;