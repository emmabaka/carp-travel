'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination } from 'swiper/modules';
import { sliderSections } from '@/data/data';
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css';

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
        spaceBetween={50}
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
            <div className='tablet:flex desktop:justify-between'>
              <Image
                className='m-auto mb-3 tablet:mb-0  tablet:w-[463px] tablet:h-[370px] tablet:m-0 desktop:w-[607px] desktop:h-[429px]'
                src={img}
                alt={subtitle}
                width={280}
                height={213}
              />
              <div className=' tablet:flex tablet:flex-col tablet:justify-between tablet:pl-5'>
                <div
                  className='text-12 text-white text-right font-extralight leading-6 tracking-[2.4px] pb-[224px] tablet:pt-[195px] tablet:pb-0 tablet:text-justify desktop:pt-0 desktop:relative desktop:top-[-10px] desktop:self-start '
                  data-swiper-parallax='-200'
                >
                  {subtitle}
                </div>
                <div
                  className='text-14 font-extralight text-white leading-5 max-w-[440px] tablet:text-13 tablet:text-justify desktop:max-w-[293px] desktop:self-end desktop:text-18 desktop:leading-6'
                  data-swiper-parallax='-100'
                >
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
