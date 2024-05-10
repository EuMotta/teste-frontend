import Image from 'next/image';
import React from 'react';

import Button from '@/components/Button';
import Container from '@/components/Container';
import { useData } from '@/providers/DataProvider';

import { PokemonListProps } from '../../@Types/global';

const PokemonList = () => {
  const { loading, fetchData, data } = useData();
  if (loading) {
    return <div>Carregando pokemons...</div>;
  }
  return (
    <Container>
      <Button onClick={fetchData}>Atualizar</Button>
      <div className="grid grid-cols-4 gap-10">
        {data.results.map((pokemon: PokemonListProps) => (
          <Button key={pokemon.name} unstyled href={`/pokemon/${pokemon.name}`}>
            <div className="max-w-72 bg-white shadow-xl">
              <div className="rounded overflow-hidden shadow-lg">
                <Image
                  className="w-full"
                  src={pokemon.imageUrl}
                  width={530}
                  height={530}
                  alt={pokemon.name}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl text-center mb-2">
                    {pokemon.name}
                  </div>
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default PokemonList;
