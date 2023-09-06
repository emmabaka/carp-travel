'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { headerMenuLinks } from '@/data/data';
import logo from '/public/svgs/logo.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
    menuOpen
      ? (document.body.style.overflow = 'visible')
      : (document.body.style.overflow = 'hidden');
  };

  const handleLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
      document.body.style.overflow = 'visible';
    }
  };

  return (
    <header className='absolute pt-9 w-full tablet:pt-[25px] desktop:pt-6'>
      <div className='content-container flex justify-between items-center'>
        <Link href='/' className='flex flex-col items-center justify-center'>
          <Image src={logo} alt='Logo' width={61} height={33} />
        </Link>
        <nav
          className={`absolute ${
            menuOpen
              ? 'top-0 left-0 h-[100vh]  flex flex-col items-center justify-center z-10'
              : 'top-[-100vh] left-0'
          } w-[100vw] transition-all bg-menuBackground backdrop-blur-xl tablet:static tablet:w-auto tablet:bg-transparent`}
        >
          <div className='absolute top-[43px] right-[20px] w-full text-right'>
            <button
              className='text-14 text-white font-normal uppercase tablet:hidden'
              onClick={toggleMenu}
            >
              Close
            </button>
          </div>
          <ul className='text-center flex flex-col gap-12 tablet:flex-row tablet:gap-6 desktop:gap-14'>
            {headerMenuLinks.map(({ href, name }) => (
              <li
                key={name}
                className='link-hover relative'
                onClick={handleLinkClick}
              >
                <a
                  href={href}
                  className='text-18 text-white tracking-[1.8px] tablet:text-14 tablet:tracking-[1.4px]'
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className='text-14 text-white font-normal uppercase tablet:hidden'
          onClick={toggleMenu}
        >
          Menu
        </button>
      </div>
    </header>
  );
};

export default Header;
