import Image from 'next/image';
import React from 'react';
const LoadingSkeleton = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <Image src="/pokemon.svg" alt="logo" width={400} height={400} />
    </div>
  );
};

export default LoadingSkeleton;
