import Image from 'next/image';
import React from 'react';

import styles from './LoadingSkeleton.module.css';
export const LoadingSkeleton = () => {
  return (
    <div className={styles.loadingSkeleton_content}>
      <Image src="/pokemon.svg" alt="logo" width={400} height={400} />
    </div>
  );
};

export const LoadingPikachu = () => {
  return (
    <div className={styles.loadingPikachu_content}>
      <Image
        src="/pikachu.webp"
        alt="logo"
        width={300}
        height={300}
        style={{
          filter: 'drop-shadow(5px 5px 5px black)',
        }}
      />
      <h2>Carregando pokemons</h2>
    </div>
  );
};
