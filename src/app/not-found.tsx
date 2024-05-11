import Image from 'next/image';
import React from 'react';

import Button from '@/components/Button';

const notFound = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-[80vh]">
      <Image
        src="/not_found.svg"
        width={500}
        height={500}
        alt="nao-encontrado"
      />
      <h1>Página não encontrada</h1>
      <Button href="/">Voltar</Button>
    </div>
  );
};

export default notFound;
