'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { mobileGallery } from '@/data/data';
import s from './MobileGallery.module.css';

const MobileGallery = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) {
    return null;
  }

  return (
    <div className={s.embla}>
      <div className={s.emblaViewport} ref={emblaRef}>
        <div className={s.emblaContainer}>
          {mobileGallery.map(({ id, img, alt }) => (
            <div key={id} className={s.emblaSlide}>
              <Image
                className=' m-auto'
                src={img}
                alt={alt}
                width={280}
                height={187}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileGallery;
