'use client';

import Image from 'next/image';
import logo from '../../../public/logo.svg';
import Link from 'next/link';
import { Karantina } from 'next/font/google';
import { useState } from 'react';

const karantina = Karantina({ subsets: ['latin'], weight: '400' });

const menuLinks = [
  { href: '#about', name: 'About' },
  { href: '#services', name: 'Services' },
  { href: '#career', name: 'Career' },
  { href: '#gallery', name: 'Gallery' },
  { href: '#contacts', name: 'Contacts' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  return (
    <header className='absolute pt-9 w-full tablet:pt-[25px] desktop:pt-6'>
      <div className='content-container flex justify-between items-center'>
        <Link href='/' className='flex flex-col items-center justify-center'>
          <Image
            className=' w-[59px] h-[21px] desktop:w-[61px] desktop:h-[22px]'
            src={logo}
            alt='Logo'
            width={59}
            height={21}
          />
          <span
            className={`${karantina.className} text-14 text-white tracking-[2.6px]`}
          >
            CarpTravel
          </span>
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
            {menuLinks.map(({ href, name }) => (
              <li
                key={name}
                onClick={() => {
                  if (menuOpen) {
                    setMenuOpen(false);
                  }
                }}
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
