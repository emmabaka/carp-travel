'use client';
import Image from 'next/image';
import { useCallback, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { gallery } from '@/data/data';
import s from './TabletAndDesktop.module.css';

const TabletAndDesktopGallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!mounted) {
    return null;
  }

  return (
    <div className={s.embla}>
      <div className={s.emblaViewport} ref={emblaRef}>
        <div className={s.emblaContainer}>
          {gallery.map(({ id, img, alt }) => (
            <div key={id} className={`${s.emblaSlide}`}>
              <Image
                className='m-auto desktop:w-[606px] desktop:h-[429px]'
                src={img}
                alt={alt}
                width={415}
                height={294}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between pt-3'>
        <button
          className='link-hover relative text-33 font-thin text-white uppercase'
          onClick={scrollPrev}
        >
          Back
        </button>
        <button
          className='link-hover relative text-33 font-thin text-white uppercase'
          onClick={scrollNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TabletAndDesktopGallery;
