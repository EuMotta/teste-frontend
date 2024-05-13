import Image from 'next/image';
import React from 'react';

type HeroProps = {
  src: string;
};
const Hero = ({ src }: HeroProps) => {
  return (
    <div className="bg-red-400 p-5 flex justify-center items-center">
      <Image
        className=""
        src={src}
        width={230}
        height={230}
        alt="pokedex"
        style={{
          filter: 'drop-shadow(5px 5px 5px black)',
        }}
      />
    </div>
  );
};
const HeroPage = ({ text }: { text: string }) => {
  return (
    <div className="p-5 my-5 border bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-red-500">
      <h1 className="text-center font-bold mb-4">{text}</h1>
    </div>
  );
};

export { Hero, HeroPage };
