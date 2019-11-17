import React from 'react';

// CSS
import { LinkIcon } from '../NavButtons/LinkIcon';

const Transportation = () => {
  return (
    <div className='other-info'>
      <h1 className='ceremony-title'>Transportation</h1>
      <div className='circle-div'>
        <div className='tent-pic hitchhiker'></div>
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
            </section>
          </div>

          <hr className='event-break' />

        </div>
      </div>

    </div>
  );
}

export default Transportation;