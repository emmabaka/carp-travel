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
      className='bg-cover bg-center transition-all ease-linear duration-300'
      style={{ backgroundImage: `url('/services-bg-0${activeSlide}.jpg')` }}
    >
      <div className='pb-14 pt-[54px] bg-backgroundSections tablet:pt-[65px] tablet:pb-16 desktop:py-[104px]'>
        <div className='content-container tablet:relative '>
          <h2 className='text-40 text-white font-thin leading-[56px] tracking-[-1.6px] uppercase pb-6 tablet:text-67 tablet:tracking-[-2.68px] tablet:leading-normal tablet:pb-9 desktop:text-98 desktop:tracking-[-3.92px] desktop:pb-[23px]'>
            We <span className='font-medium'>offer</span>
          </h2>
          <div className='text-43 text-white font-thin text-right leading-normal pb-4 tablet:text-67 tablet:leading-[78px] tablet:absolute tablet:top-[10px] tablet:right-[72px] desktop:text-98 desktop:top-[35px] tablet:pb-0 desktop:right-[398px] desktopL:right-[478px]'>
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
