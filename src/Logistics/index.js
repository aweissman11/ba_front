import React from 'react';

// CSS
import './Logistics.css';

const Logistics = () => {
  return (
    <div className='other-info'>
      <h1 className='ceremony-title'>Logistics</h1>
      <div className='circle-div'>
        <div className='tent-pic'></div>
      </div>
      <div className='name-outline'>
        <div className='inner-outline'>
          <div>
            We have reserved 25 two person camping packages from Outdoors Geek.  Two person camping packages include: One 3 person tent, two individual self inflating sleeping pads, and two individual sleeping bags.
          </div>
          <div>
            As a compliment to those who are excited to camp with us, we will pick up camping equipment from Outdoors Geek on Thursday July 2 and return the equipment Monday July 6.  All you have to do is show up to the campground and set up your tent! (Don't worry, we'll help those who need it!)
          </div>
          <div>
            Two person camping packages will be $50 per package for the weekend, we have covered the 50% reservation deposit because we love you and would love for you to rough it with us!
          </div>
          <div>
            If you do not have your own tent to bring, please call Outdoors Geek to reserve a package.  Let them know if you'd like any extras (i.e., camp coolers, chairs, stoves, cooking utensils, or more days):
            Point of Contact:  Chelsea Marquedt, (303)699-6944, chelsea@outdoorsgeek.com
            Please reference our reservation under Chelsey Anderson and Aaron Weissman
          </div>
          <div>
            We hope you camp with us for the weekend!
          </div>
          <div className='kit-circle'>
            <h1 className='resource-title'>Camping Resources</h1>
            <h3>Kit Rental Links:</h3>
            <p className='kit-link'>
              <a
                target='_blank'
                rel="noopener noreferrer"
                href='www.rei.com'
              >REI</a>
            </p>
            <p className='kit-link'>
              <a
                target='_blank'
                rel="noopener noreferrer"
                href='www.mountainsidegearrental.com'
              >Mountain Side Gear Rental</a>
            </p>
            <p className='kit-link'>
              <a
                target='_blank'
                rel="noopener noreferrer"
                href='www.vitaloutdoors.com'
              >Vital Outdoors</a>
            </p>
            <p className='kit-link'>
              <a
                target='_blank'
                rel="noopener noreferrer"
                href='https://www.outdoorsgeek.com/product-category/camping-packages/'
              >Outdoors Geek</a>
            </p>
          </div>
        </div>
      </div>
      <div className='ceremony-container'>
        <h1 className='ceremony-title'>The Campground</h1>
        <p className='ceremony-info'>The ceremony will be held on July 4th at <a href='https://www.google.com/maps/place/Windy+Point+Group+Campground/@39.6078137,-106.0454653,15z/data=!4m2!3m1!1s0x0:0xb5c6b7ae8c358e23?sa=X&ved=2ahUKEwjtnM_Aq5XlAhXMsJ4KHQmpA6kQ_BIwDHoECA0QCA' target='_blank' rel="noopener noreferrer">Windy Point Campground</a> in Dillon, CO</p>
        <iframe
          title='windy-point-map'
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12295.443977324252!2d-106.0454653!3d39.6078137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb5c6b7ae8c358e23!2sWindy%20Point%20Group%20Campground!5e0!3m2!1sen!2sus!4v1570987965673!5m2!1sen!2sus"
          frameBorder="0"
          className='windy-map'
          style={{
            border: 0,
            height: '600px',
            width: window.innerWidth < 768 ? '90%' : '75%',
            borderRadius: '12px'
          }}
          allowFullScreen=""
        >
        </iframe>
      </div>
    </div >
  );
}

export default Logistics;