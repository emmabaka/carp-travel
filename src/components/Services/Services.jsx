import Slider from './Slider/Slider';

const Services = () => {
  return (
    <section id='services' className='bg-backgroundSections pb-14 pt-[54px]'>
      <div className='content-container'>
        <h2 className='text-40 text-white font-thin leading-[56px] tracking-[-1.6px] uppercase'>
          We <span className='font-medium'>offer</span>
        </h2>
        <Slider />
      </div>
    </section>
  );
};

export default Services;
