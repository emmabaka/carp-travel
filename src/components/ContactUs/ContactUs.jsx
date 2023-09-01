import ContactUsForm from './ContactUsForm/ContactUsForm';

const socialLinks = [
  { id: 1, name: 'facebook', href: '#' },
  { id: 2, name: 'instagram', href: '#' },
  { id: 3, name: 'youtube', href: '#' },
  { id: 4, name: 'tiktok', href: '#' },
];

const ContactUs = () => {
  return (
    <section id='contacts' className='bg-contactUs bg-cover'>
      <div className='bg-backgroundSectionsDark pt-14 pb-[54px] tablet:py-16'>
        <div className='content-container'>
          <h2 className='text-40 text-white font-thin leading-[56px] tracking-[-1.6px] uppercase pb-9 tablet:text-67 tablet:tracking-[-2.68px] tablet:leading-[66px]'>
            Contact <span className='font-medium'>us</span>
          </h2>
          <div className=' tablet:relative'>
            <ul className='pb-3 max-w-[280px] ml-auto tablet:ml-0 tablet:pl-[34px] tablet:max-w-[314px]'>
              <li className='flex items-baseline gap-5 justify-end pb-6'>
                <div className='flex flex-col'>
                  <a
                    className='text-14 text-white leading-6 tablet:text-16 tablet:pl-5'
                    href='tel:+380981234567'
                  >
                    +38 (098) 12 34 567
                  </a>
                  <a
                    className='text-14 text-white leading-6 tablet:text-16 tablet:pl-5'
                    href='tel:+380731234567'
                  >
                    +38 (073) 12 34 567
                  </a>
                </div>
                <span className='text-12 text-white font-extralight leading-5'>
                  Phone number
                </span>
              </li>
              <li className='flex items-baseline gap-5 pl-4 pb-[26px] tablet:pl-0'>
                <a
                  className='text-14 text-white leading-6 tablet:text-16'
                  href='mailto:support@carptravel.com'
                >
                  support@carptravel.com
                </a>
                <span className='text-12 text-white font-extralight leading-5'>
                  E-mail
                </span>
              </li>
              <li className='flex flex-row-reverse items-baseline gap-5 pr-[15px] tablet:absolute tablet:top-0 tablet:right-[145px] tablet:pr-0'>
                <div className='flex flex-col'>
                  {socialLinks.map((item) => (
                    <a
                      key={item.id}
                      className='text-14 text-white leading-6 tablet:text-16'
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <span className='text-12 text-white font-extralight leading-5'>
                  Follow us
                </span>
              </li>
            </ul>
            <ContactUsForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
