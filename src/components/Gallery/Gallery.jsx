import MobileGallery from './MobileGallery/MobileGallery';
import TabletAndDesktopGallery from './TabletAndDesktopGallery/TabletAndDesktopGallery';

const Gallery = () => {
  return (
    <section id='gallery' className='bg-gallery bg-cover bg-center'>
      <div className='py-14 bg-backgroundGallerySection tablet:py-16'>
        <div className='content-container'>
          <h2 className='text-40 text-white font-thin leading-[56px] tracking-[-1.6px] uppercase pb-6 tablet:text-67 tablet:tracking-[-2.68px] tablet:text-center tablet:pb-16'>
            Our <span className='font-medium'>gallery</span>
          </h2>
          {/* <MobileGallery /> */}
          <TabletAndDesktopGallery />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
