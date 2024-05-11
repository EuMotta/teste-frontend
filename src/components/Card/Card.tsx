import Image from 'next/image';
import React from 'react';

import { PokemonListProps } from '../../../@Types/global';
import Button from '../Button';

type Props = {
  pokemon: PokemonListProps;
};
const typeColors = {
  electric: '#FFD700',
  fire: '#FF4500',
  water: '#1E90FF',
  grass: '#32CD32',
  psychic: '#FF69B4',
  rock: '#A9A9A9',
  ground: '#D2B48C',
  ice: '#87CEEB',
  ghost: '#483D8B',
  dark: '#2F4F4F',
  dragon: '#9932CC',
  fairy: '#FFB6C1',
  steel: '#708090',
  fighting: '#B22222',
  flying: '#87CEEB',
  poison: '#D196FC',
  bug: '#008000',
};
const PokemonCard = ({ pokemon }: Props) => {
  return (
    <div
      key={pokemon.name}
      className="max-w-72 border-4 bg-white hover:shadow-xl transition-all mx-auto"
      style={{
        borderColor: typeColors[pokemon.types[0] as keyof typeof typeColors],
      }}
    >
      <Button unstyled href={`/pokemon/${pokemon.name}`}>
        <div className="rounded overflow-hidden shadow-lg">
          <Image
            className="w-full"
            src={pokemon.imageUrl}
            width={530}
            height={530}
            alt={pokemon.name}
          />
          <div className="px-6 py-4">
            <h3 className="font-bold text-center mb-2">{pokemon.name}</h3>
            <p className="text-center">
              {pokemon?.types?.map((type) => {
                return (
                  <span
                    key={type}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    style={{
                      backgroundColor:
                        typeColors[pokemon.types[0] as keyof typeof typeColors],
                    }}
                  >
                    {type}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </Button>
    </div>
  );
};

export default PokemonCard;
