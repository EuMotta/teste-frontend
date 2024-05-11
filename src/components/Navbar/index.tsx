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
      name: 'Pokemons',
      href: '/pokemons',
    },
  ];
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
