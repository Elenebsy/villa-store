import React, { useState, useEffect } from 'react';
import './slider.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    'https://i.imgur.com/ea7wKhc.jpg',
    'https://i.imgur.com/u2l9nBt.jpg',
    'https://i.imgur.com/S69Fbz7.jpg',
    // Add more image URLs as needed
  ];

  useEffect(() => {
    // Function to update the index and loop back to the first image
    const updateIndex = () => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    };

    // Set up an interval to change the image every 3 seconds (adjust as needed)
    const intervalId = setInterval(updateIndex, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length, isPaused]);

  const handlePauseToggle = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setIsPaused(true); // Pause the slideshow when navigating manually
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsPaused(true); // Pause the slideshow when navigating manually
  };

  return (
    <div className="slider-container">
      <button onClick={goToPreviousSlide}>&lt; Previous</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={goToNextSlide}>Next &gt;</button>
      <button onClick={handlePauseToggle}>{isPaused ? 'Resume' : 'Pause'}</button>
    </div>
  );
};

export default Slider;
