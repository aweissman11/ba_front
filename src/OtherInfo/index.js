import React from 'react';

// CSS
import './OtherInfo.css';

const OtherInfo = () => {
  return (
    <div className='other-info'>
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
      <div className='circle-div'>
        <div className='tent-pic'></div>
      </div>
      <div className='name-outline'>
        <div className='inner-outline'>
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
    </div>
  );
}

export default OtherInfo;