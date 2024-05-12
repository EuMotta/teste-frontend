import Image from 'next/image';
import React from 'react';
type NoPokemonsProps = {
  src: string;
  text: string;
};
const NoPokemons = ({ src, text }: NoPokemonsProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <Image src={src} width={350} height={350} alt="crypikachu" />
      <h1 className="text-center">{text}</h1>
    </div>
  );
};

export default NoPokemons;
