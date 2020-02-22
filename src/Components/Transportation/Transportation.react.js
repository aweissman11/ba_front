import React from 'react';

// CSS
import { LinkIcon } from '../NavButtons/LinkIcon.react';
import { OuterOutline, InnerOutline } from '../Shared/Styles/Shared.styled';
import CaawLogo from '../Shared/Elements/CaawLogo.react';
import SpacerDots from '../Shared/Elements/SpacerDots.react';

const Transportation = () => {
  return (
    <div className='other-info'>
      <CaawLogo />
      <SpacerDots />
      <h1 className='ceremony-title'>Transportation</h1>
      <div className='circle-div'>
        <div className='tent-pic hitchhiker'></div>
      </div>

      <OuterOutline>
        <InnerOutline>

          <br />
          <h3>We have a limited number of parking spaces onsite with more a mile away from the campground.</h3>
          <h3>If at all possible, please try to either use the Airport Shuttle or Carpool.</h3>

          <hr className='event-break' />

          <div className='info-section'>
            <div className='small-circle-div'>
              <div className='shuttle-pic circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Airport Shuttle</h3>
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
            </section>
          </div>

          <hr className='event-break' />

          <div className='info-section flex-switch'>
            <div className='small-circle-div'>
              <div className='rental-cars circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Rental Cars</h3>
              <article className='info-article'>
                <p className='info-detail'>Rental Cars</p>
                <p className='info-block'>We reccomend you rent your car from the Denver Airport</p>
                <p className='info-block'>If you have extra seats in your car and are willing to give someone a ride, please try to coordinate with someone or let us know.</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.flydenver.com/'>Denver International <LinkIcon /></a>
                </p>
              </article>
            </section>
          </div>

          <hr className='event-break' />

          <div className='info-section'>
            <div className='small-circle-div'>
              <div className='carpool circle-pic'></div>
            </div>
            <section className='to-do-event-box'>
              <h3 className='event-event'>Carpool</h3>
              <article className='info-article'>
                <p className='info-detail'>Make a new friend</p>
                <p className='info-block'>If you would like to hitch a ride with someone and want help finding them, please let us know</p>
                <p className='info-block'>We will do our best to put people in touch with other folks that are offering a spot in their cars</p>
                <p className='to-do-info'>
                  <a target='_blank' rel="noopener noreferrer" href='https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy'>Hitchhiking <LinkIcon /></a>
                </p>
              </article>
            </section>
          </div>

        </InnerOutline>
      </OuterOutline>

    </div>
  );
}

export default Transportation;