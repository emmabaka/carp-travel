import MobileGallery from './MobileGallery/MobileGallery';

const Gallery = () => {
  return (
    <section id='gallery' className='bg-gallery bg-cover bg-center'>
      <div className='py-14 bg-backgroundGallerySection'>
        <div className='content-container'>
          <h2 className='text-40 text-white font-thin leading-[56px] tracking-[-1.6px] uppercase pb-6'>
            Our <span className='font-medium'>gallery</span>
          </h2>
          <MobileGallery />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
