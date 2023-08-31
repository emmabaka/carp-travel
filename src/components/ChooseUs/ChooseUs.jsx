'use client';
import { useMediaQuery } from 'react-responsive';
import ChooseUsForm from './ChooseUsForm/ChooseUsForm';

const advantages = [
  {
    id: 1,
    title: 'Professional development',
    desc: 'We offer growth opportunities and a creative environment to nurture your talents.',
  },
  {
    id: 2,
    title: 'Teamwork',
    desc: 'Join our close-knit family, where support and inspiration abound.',
  },
  {
    id: 3,
    title: 'Stimulating work environment',
    desc: 'Flexibility and remote options for a comfortable experience.',
  },
  {
    id: 4,
    title: 'Exciting challenges',
    desc: 'Unleash your potential through unforgettable projects showcasing Carpathian beauty.Flexibility and remote options for a comfortable experience.',
  },
];

const ChooseUs = () => {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <>
      <section id='career' className='bg-chooseUs bg-cover'>
        <div className='bg-backgroundSections py-[56px] tablet:py-16'>
          <div className='content-container'>
            <div className='pb-9 tablet:flex tablet:justify-between tablet:pb-[5px]'>
              <h2 className='text-40 text-white font-thin leading-[56px] tracking-[-1.6px] uppercase pb-6 tablet:text-67 tablet:tracking-[-2.68px] tablet:pb-0'>
                Choose <span className='font-medium'>us</span>
              </h2>
              <p className='text-14 text-white font-extralight leading-5 max-w-[180px] ml-auto tablet:max-w-[221px] tablet:text-justify tablet:text-13'>
                Your chance to join our passionate team in Carpathian tourism.
                Seeking talented professionals to share our common mission.
              </p>
            </div>
            <h3 className='text-30 text-white font-extralight text-right uppercase pr-[39px] pb-9 tablet:text-left tablet:pl-[80px] tablet:pb-14'>
              Why us ?
            </h3>
            <div className=' tablet:flex tablet:items-start'>
              <ul className=' flex flex-col gap-4 max-w-[180px] tablet:max-w-[221px]'>
                {advantages.map((item) => (
                  <li key={item.id}>
                    <h3 className='text-14 text-white text-right leading-5 pb-2 tablet:text-16'>
                      {item.title}
                    </h3>
                    <p className='text-12 font-extralight text-white text-right leading-5'>
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
              {isTabletOrDesktop && <ChooseUsForm />}
            </div>
          </div>
        </div>
      </section>
      {!isTabletOrDesktop && <ChooseUsForm />}
    </>
  );
};

export default ChooseUs;
