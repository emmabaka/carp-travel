const About = () => {
  return (
    <section id='about' className='bg-about bg-cover'>
      <div className='bg-backgroundSections pt-[55px] pb-[54px] tablet:pt-16 tablet:pb-0 desktop:pt-[106px]'>
        <div className='content-container '>
          <div className='tablet:relative tablet:flex tablet:justify-between tablet:items-start desktop:justify-start desktop:gap-7'>
            <h2 className='text-40 text-white font-medium tracking-[-1.6px] uppercase tablet:text-67 tablet:tracking-[2.68px] desktop:text-98 desktop:tracking-[-3.92px]'>
              <span className='font-thin'>Who</span> we are
            </h2>
            <div>
              <p className='text-14 text-white font-extralight leading-5 max-w-[180px] pb-5 tablet:ml-auto tablet:text-16 tablet:max-w-[220px] tablet:pb-4 tablet:pt-4 desktop:text-18 desktop:leading-6 desktop:pb-6 desktop:pt-8 desktop:max-w-[292px]'>
                <span className='font-normal'>a team of enthusiasts</span> who
                are fully committed to the mission of creating unforgettable and
                extraordinary trips to the most beautiful parts of the
                Carpathians. Our goal is not just to show you the natural
                wonders of the mountains, but to provide you with a deep
                immersion in their magical atmosphere.
              </p>
              <p className='text-14 text-white font-extralight leading-5 max-w-[180px] tablet:ml-auto tablet:pb-[181px] tablet:text-16 tablet:max-w-[220px] desktop:text-18 desktop:leading-6 desktop:max-w-[292px] desktop:pb-[248px]'>
                <span className='font-normal'>We believe</span> that nature has
                the power to inspire, strengthen character and provide new
                perspectives. Therefore, each of our tours is aimed at unlocking
                your potential, enriching your spiritual world and creating
                unforgettable memories.
              </p>
              <div className=' tablet:absolute tablet:left-0 tablet:bottom-[188px] desktop:right-0 desktop:bottom-[104px]'>
                <p className='flex flex-col items-end '>
                  <span className='text-14 text-white font-normal leading-5 uppercase w-[180px] tablet:text-16 tablet:w-[221px]'>
                    From vacationers
                  </span>
                  <span className='text-14 text-white font-normal leading-5 uppercase w-[180px] text-right tablet:text-16 tablet:w-[221px]'>
                    to active travelers
                  </span>
                </p>
                <p className='text-14 text-white font-extralight tracking-[-0.14px] leading-5 text-right pb-10 tablet:text-16 tablet:tracking-[0.32px] tablet:pb-0'>
                  we have a tour for everyone.
                </p>
              </div>
              <p className='text-14 text-white font-extralight leading-5 max-w-[280px] mobile2:max-w-[440px] tablet:text-16 tablet:max-w-[463px] tablet:w-[463px] tablet:absolute tablet:right-0 tablet:bottom-16 desktop:bottom-[104px] desktop:left-0'>
                <span className='font-normal'>We use methods</span> that are
                time-tested and proven. Our expert guides with in-depth
                knowledge of the Carpathian landscapes lead you safely through
                the mysteries of these mountains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
