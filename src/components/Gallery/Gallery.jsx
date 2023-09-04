'use client';
import { useMediaQuery } from 'react-responsive';
import MobileGallery from './MobileGallery/MobileGallery';
import TabletAndDesktopGallery from './TabletAndDesktopGallery/TabletAndDesktopGallery';

const Gallery = () => {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <section id='gallery' className='bg-gallery bg-cover bg-center'>
      <div className='py-14 bg-backgroundGallerySection tablet:py-16 desktop:py-[104px]'>
        <div className='content-container'>
          <h2 className='text-40 text-white font-thin leading-[56px] tracking-[-1.6px] uppercase pb-6 tablet:text-67 tablet:tracking-[-2.68px] tablet:text-center tablet:pb-16 desktop:text-98 desktop:tracking-[-3.92px] desktop:text-left desktop:pb-6 desktop:leading-normal'>
            Our <span className='font-medium'>gallery</span>
          </h2>
          {isTabletOrDesktop ? <TabletAndDesktopGallery /> : <MobileGallery />}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
