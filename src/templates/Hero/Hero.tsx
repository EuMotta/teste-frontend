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

export default Hero;
