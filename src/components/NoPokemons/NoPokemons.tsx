import Image from 'next/image';
import React from 'react';

import styles from './NoPokemons.module.css';
type NoPokemonsProps = {
  src: string;
  text: string;
};
const NoPokemons = ({ src, text }: NoPokemonsProps) => {
  return (
    <div className={styles.no_pokemons_content}>
      <Image src={src} width={350} height={350} alt="crypikachu" />
      <h1 className="text-center">{text}</h1>
    </div>
  );
};

export default NoPokemons;
