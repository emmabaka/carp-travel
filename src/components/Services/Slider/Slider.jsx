'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination } from 'swiper/modules';
import slide1 from '../../../../public/services-1-mobile.jpg';
import slide2 from '../../../../public/services-2-mobile.jpg';
import slide3 from '../../../../public/services-3-mobile.jpg';
import slide4 from '../../../../public/services-4-mobile.jpg';
import slide5 from '../../../../public/services-5-mobile.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css';

const sliderSections = [
  {
    number: '01',
    img: slide1,
    subtitle: 'Feel the adrenaline rush',
    desc: 'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
    active: 'ATVs Traveling',
  },
  {
    number: '02',
    img: slide2,
    subtitle: 'Destroy your limitations',
    desc: 'Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.',
    active: 'Rock climbing',
  },
  {
    number: '03',
    img: slide3,
    subtitle: 'Get Inspired',
    desc: 'Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.',
    active: 'Hot air ballooning',
  },
  {
    number: '04',
    img: slide4,
    subtitle: 'Overcome your fears',
    desc: 'Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird`s eye view forever.',
    active: 'Skydiving',
  },
  {
    number: '05',
    img: slide5,
    subtitle: 'Trust the flow',
    desc: 'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
    active: 'Rafting',
  },
];

const Slider = ({ handleSlideChange }) => {
  useEffect(() => {
    const bullet = document.querySelectorAll('.swiper-pagination-bullet');

    sliderSections.forEach((section, index) => {
      bullet[index].textContent = section.active;
    });
  }, []);

  return (
    <>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        modules={[Parallax, Pagination]}
        className='mySwiper h-full'
        onSlideChange={handleSlideChange}
      >
        {sliderSections.map(({ number, img, subtitle, desc }) => (
          <SwiperSlide key={number}>
            <div
              className='text-43 text-white font-thin text-right'
              data-swiper-parallax='-300'
            >
              {number}/<span className='text-opacity-20 text-white'>05</span>
            </div>
            <Image
              className='m-auto mb-3'
              src={img}
              alt={subtitle}
              width={280}
              height={213}
            />
            <div
              className='text-12 text-white text-right font-extralight leading-6 tracking-[2.4px] pb-[224px]'
              data-swiper-parallax='-200'
            >
              {subtitle}
            </div>
            <div
              className='text-14 font-extralight text-white leading-5 max-w-[440px]'
              data-swiper-parallax='-100'
            >
              <p>{desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
