import ContactUsForm from './ContactUsForm/ContactUsForm';
import { socialLinks } from '@/data/data';

const ContactUs = () => {
  return (
    <footer id='contacts' className='bg-contactUs bg-cover'>
      <div className='bg-backgroundSectionsDark pt-14 pb-[54px] tablet:py-16 desktop:py-[104px]'>
        <div className='content-container'>
          <h2 className='title pb-9 tablet:leading-[66px] desktop:pb-[71px]'>
            Contact <span className='font-medium'>us</span>
          </h2>
          <div className='tablet:relative desktop:flex desktop:justify-between'>
            <ul className='pb-3 max-w-[280px] ml-auto tablet:ml-0 tablet:pl-[34px] tablet:max-w-[325px] desktop:pl-[83px] desktop:max-w-[390px]'>
              <li className='flex items-baseline gap-5 justify-end pb-6 desktop:pb-16'>
                <div className='flex flex-col'>
                  <a
                    className='link-hover relative text-14 text-white leading-6 tablet:text-16 tablet:pl-5 desktop:text-18'
                    href='tel:+380981234567'
                  >
                    +38 (098) 12 34 567
                  </a>
                  <a
                    className='link-hover relative text-14 text-white leading-6 tablet:text-16 tablet:pl-5 desktop:text-18'
                    href='tel:+380731234567'
                  >
                    +38 (073) 12 34 567
                  </a>
                </div>
                <span className='text-12 text-white font-extralight leading-5 tablet:pr-1 desktop:pr-0'>
                  Phone number
                </span>
              </li>
              <li className='flex items-baseline gap-5 pl-4 pb-[26px] tablet:pl-0 desktop:pb-[124px]'>
                <a
                  className='link-hover relative text-14 text-white leading-6 tablet:text-16 desktop:text-18'
                  href='mailto:support@carptravel.com'
                >
                  support@carptravel.com
                </a>
                <span className='text-12 text-white font-extralight leading-5'>
                  E-mail
                </span>
              </li>
              <li className='flex flex-row-reverse items-baseline gap-5 pr-[15px] tablet:absolute tablet:top-0 tablet:right-[145px] tablet:pr-0 desktop:static desktop:flex-row desktop:justify-end desktop:pr-6'>
                <div className='flex flex-col'>
                  {socialLinks.map((item) => (
                    <a
                      key={item.id}
                      className='link-hover relative text-14 text-white leading-6 tablet:text-16 desktop:text-18 desktop:text-right'
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
    </footer>
  );
};

export default ContactUs;
