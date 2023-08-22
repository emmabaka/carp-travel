const About = () => {
  return (
    <section className=" bg-about bg-backgroundSections pt-[55px] pb-[54px]">
      <div className="m-auto pr-5 pl-5 pb-2">
        <h2 className="text-40 text-white font-medium tracking-[-1.6px]">
          <span className="font-thin">Who</span> we are
        </h2>
        <p className="text-14 text-white font-extralight leading-5 max-w-[180px] pb-5">
          <span className="font-medium">a team of enthusiasts</span> who are
          fully committed to the mission of creating unforgettable and
          extraordinary trips to the most beautiful parts of the Carpathians.
          Our goal is not just to show you the natural wonders of the mountains,
          but to provide you with a deep immersion in their magical atmosphere.
        </p>
        <p className="text-14 text-white font-extralight leading-5  max-w-[180px]">
          <span className="font-medium">We believe</span> that nature has the
          power to inspire, strengthen character and provide new perspectives.
          Therefore, each of our tours is aimed at unlocking your potential,
          enriching your spiritual world and creating unforgettable memories.
        </p>
        <p className="flex flex-col items-end">
          <span className="text-14 text-white font-normal leading-5 uppercase w-[180px]">
            From vacationers
          </span>
          <span className="text-14 text-white font-normal leading-5 uppercase w-[180px] text-right">
            to active travelers
          </span>
        </p>
        <p className="text-14 text-white font-extralight tracking-[-0.14px] leading-5 text-right pb-10">
          we have a tour for everyone.
        </p>
        <p className="text-14 text-white font-extralight leading-5 max-w-[280px] mobile2:max-w-[440px]">
          <span className="font-normal">We use methods</span> that are
          time-tested and proven. Our expert guides with in-depth knowledge of
          the Carpathian landscapes lead you safely through the mysteries of
          these mountains.
        </p>
      </div>
    </section>
  );
};

export default About;
