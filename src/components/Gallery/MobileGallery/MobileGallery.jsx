import Image from 'next/image';
import forest from '../../../../public/gallery-forest.jpg';
import lake from '../../../../public/gallery-lake.jpg';
import mountain from '../../../../public/gallery-mountain.jpg';

const MobileGallery = () => {
  return (
    <ul className=' flex flex-col gap-6 items-center'>
      <li>
        <Image src={mountain} alt='Mountain' width='auto' height='auto' />
      </li>
      <li>
        <Image src={lake} alt='Lake' width='auto' height='auto' />
      </li>
      <li>
        <Image src={forest} alt='Forest' width='auto' height='auto' />
      </li>
    </ul>
  );
};

export default MobileGallery;
