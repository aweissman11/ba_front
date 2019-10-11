import React, { useState, useEffect } from 'react';

// CSS
import './BackgroundImage.css';

const BackgroundImage = () => {
  const [imageClass, setImageClass] = useState('full-size');
  const [atTheTop, setAtTheTop] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])

  const handleScroll = (e) => {
    // console.log('e:', window.scrollY);
    if (window.scrollY > 136) {
      setImageClass('small-size');
      console.log('made it down');
    } else {
      setImageClass('full-size');
      console.log('up and above');
    }
  }

  return (
    <div className={imageClass}>
    </div>
  );
}

export default BackgroundImage;