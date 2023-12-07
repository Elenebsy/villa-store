import './slider.css';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const slideImages = [
    '../../Assets/a.jpg',
    '../../Assets/b.jpg',
    '../../Assets/c.jpg',
    '../../Assets/d.jpg',
    '../../Assets/f.jpg',
  ];
  const Slider = () => {
    return (
      <div className="slide-container">
        <Slide easing="ease">
          {slideImages.map((image, index) => (
            <div key={index} className="each-slide">
              <div style={{ backgroundImage: `url(${image})` }}>
                <span>Slide {index + 1}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    );
  };
  
  export default Slider;
  