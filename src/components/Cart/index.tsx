/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { useData } from '@/Hooks';

import Button from '../Button';

const Cart = () => {
  const { fetchData, loading, data } = useData({
    url: '/api/compare',
    reverse: true,
  });
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  if (loading) {
    return <div>Carregando...</div>;
  }
  const handleRemove = async (pokemon: any) => {
    try {
      const response = await fetch('/api/compare', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pokemon: pokemon, type: 'del' }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }
      const responseData = await response.text();
      if (fetchData) {
        fetchData();
      }
      toast.success(responseData);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Erro desconhecido');
      }
    }
  };

  const handleCompare = async () => {
    if (data.length === 0) {
      toast.error('Adicione Pokémon à lista de comparação antes de comparar');
      return;
    }

    const names = data.map((pokemon: any) => pokemon.name);

    const compareUrl = `/compare/${names.join('/')}`;

    router.push(compareUrl);
  };
  return (
    <div>
      <Button
        unstyled
        onClick={() => {
          toggleDropdown();
          fetchData();
        }}
      >
        <Image
          src="/VS.webp"
          alt="comparar"
          width={50}
          height={50}
          style={{
            filter: 'drop-shadow(10px 10px 10px black)',
          }}
        />
      </Button>

      {dropdownOpen && (
        <div className="flex items-center justify-between bg-white border border-gray-300 absolute top-full left-0 w-full">
          <div className="pokemon-list flex flex-wrap justify-start  w-full p-4">
            {data.map((pokemon: any) => (
              <>
                <Image
                  key={pokemon.name}
                  src={pokemon.imageUrl}
                  alt={pokemon.name}
                  width={60}
                  height={60}
                  title={pokemon.name}
                  className="rounded-full"
                />
                <div className="relative top-0 ">
                  <Button unstyled onClick={() => handleRemove(pokemon)}>
                    X
                  </Button>
                </div>
              </>
            ))}
          </div>
          <Button onClick={() => handleCompare()}>Comparar</Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
