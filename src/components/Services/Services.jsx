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
      <div className='pb-14 pt-[54px] bg-backgroundSections tablet:pt-[65px] tablet:pb-16'>
        <div className='content-container tablet:relative '>
          <h2 className='text-40 text-white font-thin leading-[56px] tracking-[-1.6px] uppercase pb-6 tablet:text-67 tablet:tracking-[-2.68px] tablet:pb-9'>
            We <span className='font-medium'>offer</span>
          </h2>
          <div className='text-43 text-white font-thin text-right leading-normal pb-4 tablet:text-67 tablet:leading-[78px] tablet:absolute tablet:top-[-15px] tablet:right-[72px]'>
            {`0${activeSlide}`}/
            <span className='text-opacity-20 text-white'>05</span>
          </div>
          <Slider handleSlideChange={handleSlideChange} />
        </div>
      </div>
    </section>
  );
};

export default Services;
