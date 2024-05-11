import Image from 'next/image';
import React from 'react';

const NoPokemons = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <Image src="/crypikachu.png" width={400} height={400} alt="crypikachu" />
      <h1>Não existem pokemons aqui, tente outra página</h1>
    </div>
  );
};

export default NoPokemons;
