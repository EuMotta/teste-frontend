'use client';

import Image from 'next/image';

import Button from '@/components/Button';

interface ErrorStateProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorStateProps> = ({
  error,
  reset,
}: ErrorStateProps) => {
  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center h-[80vh]">
        <Image
          src="/crypikachu.png"
          width={350}
          height={350}
          alt="crypikachu"
        />
        <code className="text-center text-xl text-red-400">
          {error.message}
        </code>
        <div className="flex gap-5">
          <Button onClick={() => reset()}>Tente novamente</Button>
          <Button href="/">Voltar</Button>
        </div>
      </div>
    </div>
  );
};

export default Error;
