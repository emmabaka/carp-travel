import s from './Hero.module.css';

const Hero = () => {
  return (
    <section className=' bg-hero bg-center bg-cover'>
      <div className=' bg-backgroundSections pt-[105px] pb-14 tablet:pt-[124px] tablet:pb-16'>
        <div className='content-container'>
          <div className='relative'>
            <h2 className='flex flex-col text-right max-w-[120px] ml-auto tablet:absolute tablet:top-[29px] tablet:right-0 tablet:max-w-[230px] desktop:max-w-[315px]'>
              <div className='text-37 font-medium text-white leading-tight tablet:text-67 desktop:text-98'>
                7
                <span className='text-37 font-thin text-white uppercase leading-tight tracking-[1.67px] tablet:text-67 tablet:tracking-[8.71px] desktop:text-98'>
                  days
                </span>
              </div>
              <span className='text-12 font-light text-white uppercase leading-none tracking-[9.48px] tablet:text-14 tablet:tracking-[25.9px] desktop:text-16 desktop:tracking-[36.5px] desktop:text-right'>
                journey
              </span>
            </h2>
            <h1 className='text-40 font-thin text-left uppercase text-white leading-[56px] tracking-[-1.6px] pt-6 max-w-xs mobile2:text-center mobile2:m-auto tablet:text-67 tablet:text-left tablet:tracking-[-2.7px] tablet:leading-[1.4] tablet:m-0 tablet:pb-[68px] desktop:text-98 desktop:tracking-[-3.9px] desktop:pb-[148px]'>
              <span className='font-medium'>Uncover</span> Carpathian&#8242;s
              Secrets
            </h1>
            <p className='text-10 font-extralight leading-4 text-white w-40 pt-6 mobile2:text-center mobile2:m-auto tablet:text-left tablet:m-0 tablet:text-14 tablet:tracking-[1.26px] tablet:w-[265px] tablet:pt-0 desktop:leading-6 desktop:tracking-[1.44px] desktop:w-[608px]'>
              Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
              Bukovel
            </p>
            <div className='tablet:absolute tablet:bottom-0 tablet:right-0'>
              <p className='text-12 font-extralight leading-[20px] text-white text-justify py-6 max-w-[280px] mobile2:text-center mobile2:m-auto tablet:text-16 tablet:text-justify tablet:max-w-[230px] tablet:pt-0 desktop:text-18 desktop:leading-6 desktop:max-w-[295px]'>
                We offer you unforgettable trips to the most beautiful parts of
                the Carpathians. Enjoy stunning views, exciting expeditions, and
                the best service!
              </p>
              <a
                href='#contacts'
                className={`${s.joinButton} max-w-[280px] flex items-center justify-center relative text-18 text-white font-bold leading-normal uppercase py-[13px] px-16 bg-backgroundDefault m-auto tablet:max-w-[230px] tablet:py-[11.5px] desktop:text-32 desktop:max-w-[295px]`}
              >
                Join now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
