import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-red-400 p-5 flex justify-center items-center">
      <Image
        className=""
        src="/Pokedex_logo.png"
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
