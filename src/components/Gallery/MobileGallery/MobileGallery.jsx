import Image from 'next/image';
import forest from '../../../../public/gallery-forest.jpg';
import lake from '../../../../public/gallery-lake.jpg';
import mountain from '../../../../public/gallery-mountain.jpg';

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

export default MobileGallery;
