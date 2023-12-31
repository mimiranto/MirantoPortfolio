import './index.css'
import React, { useRef, useState } from 'react';
import img1 from './Asset/TooLate.png';
import img2 from './Asset/LittleItalia.png';
import img3 from './Asset/XianPass.png';

const Slider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    const newPosition = -index * 50 + '%';
    sliderRef.current.style.transform = 'translateX(' + newPosition + ')';
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slideCount);
    showSlide(currentIndex);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slideCount) % slideCount);
    showSlide(currentIndex);
  };

  const slideCount = 2; // Nombre total d'images

  return (
    <div className='slider'>
      <ul className="trends__content" ref={sliderRef}>
        <li className="trends__card">
          <a href='https://github.com/mimiranto/TooLate' target='blank'>
            <img src={img1} alt="Too Late" />
            <h1>Projet Unity : Too Late</h1>
          </a>
        </li>
        <li className="trends__card" id='img2'>
          <a href='https://little-italia.vercel.app/' target='blank'>
            <img src={img2} alt="Little Italia" />
            <h1>Little Italia</h1>
          </a>
        </li>

  
      </ul> 

      <button className='arrow left' onClick={prevSlide}>{'<'}</button>
      <button className='arrow right' onClick={nextSlide}>{'>'}</button>
    </div>
  );
};

export default Slider;