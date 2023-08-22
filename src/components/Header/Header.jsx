"use client";

import Image from "next/image";
import logo from "../../../public/logo.svg";
import Link from "next/link";
import { Karantina } from "next/font/google";
import { useState } from "react";

const karantina = Karantina({ subsets: ["latin"], weight: "400" });

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  return (
    <header className="absolute pt-9 w-full">
      <div className="m-auto pr-5 pl-5 flex justify-between items-center">
        <Link href="/" className="flex flex-col items-center justify-center">
          <Image src={logo} alt="Logo" width={59} height={21}></Image>
          <span
            className={`${karantina.className} text-14 text-white tr tracking-[2.6px]`}
          >
            CarpTravel
          </span>
        </Link>
        <nav
          className={`absolute ${
            menuOpen
              ? "top-0 left-0 h-[100vh]  flex flex-col items-center justify-center z-10"
              : "top-[-100vh] left-0"
          } w-[100vw] transition-all bg-menuBackground backdrop-blur-xl tablet:static"`}
        >
          <div className="absolute top-[43px] right-[20px] w-full text-right">
            <button
              className="text-14 text-white font-normal uppercase tablet:hidden"
              onClick={toggleMenu}
            >
              Close
            </button>
          </div>
          <ul className="text-center flex flex-col gap-12">
            <li>
              <a href="#" className="text-18 text-white tracking-[1.8px]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-18 text-white tracking-[1.8px]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-18 text-white tracking-[1.8px]">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="text-18 text-white tracking-[1.8px]">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="text-18 text-white tracking-[1.8px]">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="text-14 text-white font-normal uppercase tablet:hidden"
          onClick={toggleMenu}
        >
          Menu
        </button>
      </div>
    </header>
  );
};

export default Header;
