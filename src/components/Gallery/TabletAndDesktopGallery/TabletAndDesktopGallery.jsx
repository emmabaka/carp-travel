'use client';
import Image from 'next/image';
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import forest from '../../../../public/gallery-forest.jpg';
import lake from '../../../../public/gallery-lake.jpg';
import mountain from '../../../../public/gallery-mountain.jpg';
import s from './TabletAndDesktop.module.css';

const TabletAndDesktopGallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={s.embla}>
      <div className={s.emblaViewport} ref={emblaRef}>
        <div className={s.emblaContainer}>
          <div className={`${s.emblaSlide}`}>
            <Image
              className=' m-auto'
              src={lake}
              alt='Lake'
              width={415}
              height={294}
            />
          </div>
          <div className={`${s.emblaSlide} ${s.emblaClassNames}`}>
            <Image
              className=' m-auto'
              src={forest}
              alt='Forest'
              width={415}
              height={294}
            />
          </div>
          <div className={`${s.emblaSlide} ${s.emblaClassNames}`}>
            <Image
              className=' m-auto'
              src={mountain}
              alt='Mountain'
              width={415}
              height={294}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-between pt-3'>
        <button
          className='text-33 font-thin text-white uppercase'
          onClick={scrollPrev}
        >
          Back
        </button>
        <button
          className='text-33 font-thin text-white uppercase'
          onClick={scrollNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TabletAndDesktopGallery;
