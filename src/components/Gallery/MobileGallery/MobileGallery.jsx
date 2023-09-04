'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import forest from '../../../../public/gallery-forest.jpg';
import lake from '../../../../public/gallery-lake.jpg';
import mountain from '../../../../public/gallery-mountain.jpg';
import fog from '../../../../public/gallery-fog.jpg';
import s from './MobileGallery.module.css';

const gallery = [
  { id: 1, img: forest, alt: 'Forest' },
  { id: 2, img: lake, alt: 'Lake' },
  { id: 3, img: mountain, alt: 'Mountain' },
  { id: 4, img: fog, alt: 'Forest' },
];

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
          {gallery.map(({ id, img, alt }) => (
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
