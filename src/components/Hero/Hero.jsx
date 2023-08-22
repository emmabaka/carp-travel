import s from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={`${s.heroSection} bg-hero pt-[105px] pb-14`}>
      <div className="max-w-xs m-auto pr-5 pl-5">
        <div className="tex text-right">
          <h2 className="flex flex-col">
            <div className="text-37 font-medium text-white leading-tight">
              7
              <span className="text-37 font-thin text-white uppercase leading-tight tracking-[1.67px]">
                days
              </span>
            </div>
            <div className="text-12 font-light text-white uppercase leading-none tracking-[9.48px]">
              journey
            </div>
          </h2>
          <h1 className="text-40 font-thin text-left uppercase text-white leading-[56px] tracking-[-1.6px] pt-6">
            <span className="font-medium">Uncover</span> Carpathian’s Secrets
          </h1>
          <p className="text-10 font-extralight leading-4 text-white w-40 pt-6">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
          <p className="text-12 font-extralight leading-[20px] text-white text-left pt-6 pb-6">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <a
            href="#"
            className={`${s.joinButton} flex items-center justify-center relative text-18 text-white font-bold uppercase py-[18px] px-16 bg-backgroundDefault m-auto`}
          >
            Join now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
