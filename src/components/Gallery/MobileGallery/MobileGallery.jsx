'use client';
import Image from 'next/image';
import forest from '../../../../public/gallery-forest.jpg';
import lake from '../../../../public/gallery-lake.jpg';
import mountain from '../../../../public/gallery-mountain.jpg';
import 'swiper/css';
import 'swiper/css/pagination';

const MobileGallery = () => {
  return (
    <ul className=' flex flex-col gap-6 items-center'>
      <li>
        <Image src={mountain} alt='Mountain' width={280} height={187} />
      </li>
      <li>
        <Image src={lake} alt='Lake' width={280} height={187} />
      </li>
      <li>
        <Image src={forest} alt='Forest' width={280} height={187} />
      </li>
    </ul>
  );
};
//  <Splide
//    options={{
//      perPage: 3,
//      rewind: true,
//      rewindSpeed: 200,
//      width: '280px',
//      height: '100%',
//      direction: 'ttb',
//      paginationDirection: 'ttb',
//      focus: 'center',
//      gap: '30px',
//    }}
//  >
//    <SplideSlide>
//      <Image src={mountain} alt='Mountain' width={280} height={187} />
//    </SplideSlide>
//    <SplideSlide>
//      <Image src={lake} alt='Lake' width={280} height={187} />
//    </SplideSlide>
//    <SplideSlide>
//      <Image src={forest} alt='Forest' width={280} height={187} />
//    </SplideSlide>
//  </Splide>;
export default MobileGallery;
