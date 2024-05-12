import Image from 'next/image';
import React from 'react';

import Button from '../Button';

const Navbar = () => {
  const navLinks = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Pokebag',
      href: '/pokebag',
    },
  ];
  return (
    <nav className="bg-white/80 shadow-sm">
      <div className=" flex flex-wrap items-center justify-center sm:justify-between mx-auto p-4">
        <Button
          href="/"
          unstyled
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/pokemon.svg"
            className="h-7"
            alt="Pokemon"
            width={100}
            height={100}
          />
        </Button>

        <div className="items-center flex">
          <ul className="flex gap-5 font-medium p-4 mt-4  rounded-lg   ">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Button href={link.href}>{link.name}</Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
