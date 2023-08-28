import ContactUsForm from './ContactUsForm/ContactUsForm';

const socialLinks = [
  { id: 1, name: 'facebook', href: '#' },
  { id: 2, name: 'instagram', href: '#' },
  { id: 3, name: 'youtube', href: '#' },
  { id: 4, name: 'tiktok', href: '#' },
];

const ContactUs = () => {
  return (
    <section id='contacts' className='bg-backgroundSections pt-14 pb-[54px]'>
      <div className='content-container'>
        <h2 className='text-40 text-white font-thin leading-[56px] tracking-[-1.6px] uppercase pb-9'>
          Contact <span className='font-medium'>us</span>
        </h2>
        <ul className='pb-3 max-w-[280px] ml-auto'>
          <li className='flex items-baseline gap-5 justify-end pb-6'>
            <div className='flex flex-col'>
              <a
                className='text-14 text-white leading-6'
                href='tel:+380981234567'
              >
                +38 (098) 12 34 567
              </a>
              <a
                className='text-14 text-white leading-6'
                href='tel:+380731234567'
              >
                +38 (073) 12 34 567
              </a>
            </div>
            <span className='text-12 text-white font-extralight leading-5'>
              Phone number
            </span>
          </li>
          <li className='flex items-baseline gap-5 pl-4 pb-[26px]'>
            <a
              className='text-14 text-white leading-6'
              href='mailto:support@carptravel.com'
            >
              support@carptravel.com
            </a>
            <span className='text-12 text-white font-extralight leading-5'>
              E-mail
            </span>
          </li>
          <li className='flex flex-row-reverse items-baseline gap-5 pr-[15px]'>
            <div className='flex flex-col'>
              {socialLinks.map((item) => (
                <a
                  key={item.id}
                  className='text-14 text-white leading-6'
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
    </section>
  );
};

export default ContactUs;
