'use client';
import { useState } from 'react';
import Slider from './Slider/Slider';

const Services = () => {
  const [activeSlide, setActiveSlide] = useState('1');

  const handleSlideChange = (e) => {
    setActiveSlide(String(e.activeIndex + 1));
  };

  return (
    <section
      id='services'
      className={`bg-services${activeSlide} bg-cover transition-colors ease-linear duration-1000`}
    >
      <div className='pb-14 pt-[54px] bg-backgroundSections'>
        <div className='content-container'>
          <h2 className='text-40 text-white font-thin leading-[56px] tracking-[-1.6px] uppercase'>
            We <span className='font-medium'>offer</span>
          </h2>
          <Slider handleSlideChange={handleSlideChange} />
        </div>
      </div>
    </section>
  );
};

export default Services;
