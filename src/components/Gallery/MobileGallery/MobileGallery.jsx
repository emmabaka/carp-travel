'use client';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import forest from '../../../../public/gallery-forest.jpg';
import lake from '../../../../public/gallery-lake.jpg';
import mountain from '../../../../public/gallery-mountain.jpg';
import fog from '../../../../public/gallery-fog.jpg';
import s from './MobileGallery.module.css';

const MobileGallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: 'y',
    loop: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    containScroll: 'keepSnaps',
    watchSlides: false,
    watchResize: false,
    dragFree: true,
  });

  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev();
  // }, [emblaApi]);

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext();
  // }, [emblaApi]);

  return (
    <div className={s.embla}>
      <div className={s.emblaViewport} ref={emblaRef}>
        <div className={s.emblaContainer}>
          <div className={s.emblaSlide}>
            <Image
              className=' m-auto'
              src={lake}
              alt='Lake'
              width={280}
              height={187}
            />
          </div>
          <div className={s.emblaSlide}>
            <Image
              className=' m-auto'
              src={forest}
              alt='Forest'
              width={280}
              height={187}
            />
          </div>
          <div className={s.emblaSlide}>
            <Image
              className=' m-auto'
              src={fog}
              alt='Forest'
              width={280}
              height={187}
            />
          </div>
          <div className={s.emblaSlide}>
            <Image
              className=' m-auto'
              src={mountain}
              alt='Mountain'
              width={280}
              height={187}
            />
          </div>
        </div>
      </div>
      {/* <button className='embla__prev' onClick={scrollPrev}>
        Prev
      </button>
      <button className='embla__next' onClick={scrollNext}>
        Next
      </button> */}
    </div>
  );
};

export default MobileGallery;
