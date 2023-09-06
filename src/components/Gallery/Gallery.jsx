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
          <h2 className='title pb-6 tablet:text-center tablet:pb-16 desktop:text-left desktop:pb-6'>
            Our <span className='font-medium'>gallery</span>
          </h2>
          {isTabletOrDesktop ? <TabletAndDesktopGallery /> : <MobileGallery />}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
