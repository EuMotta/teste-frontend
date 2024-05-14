import Image from 'next/image';
import React from 'react';

import Button from '../Button';
import Cart from '../Cart/Cart';
import styles from './Navbar.module.css';
const Navbar = () => {
  const navLinks = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Lista',
      href: '/pokemons/1',
    },
    {
      name: 'Pokebag',
      href: '/pokebag',
    },
  ];
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_content}>
        <Button href="/" unstyled className={styles.nav_img_button}>
          <Image
            src="/pokemon.svg"
            className="h-7"
            alt="Pokemon"
            width={100}
            height={100}
          />
        </Button>

        <div className={styles.nav_links}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Button href={link.href}>{link.name}</Button>
              </li>
            ))}
          </ul>
        </div>
        <Cart />
      </div>
    </nav>
  );
};

export default Navbar;
