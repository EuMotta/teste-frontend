import Image from 'next/image';
import React from 'react';
import { toast } from 'react-toastify';

import { PokemonListProps } from '../../../@Types/global';
import Button from '../Button';

type Props = {
  pokemon: PokemonListProps;
  type?: 'add' | 'del';
  fetchData?: () => void;
};
type TypeColors = {
  [key: string]: string;
};
export const typeColors: TypeColors = {
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
const PokemonCard = ({ pokemon, type, fetchData }: Props) => {
  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/pokebag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pokemon: pokemon, type: type }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }
      const responseData = await response.text();
      console.log(responseData);
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
  return (
    <div
      key={pokemon.name}
      className="w-56 border-2 group  bg-slate-100 hover:shadow-xl hover:shadow-slate-400 transition-all mx-auto"
      style={{
        borderColor: typeColors[pokemon.types[0] as keyof typeof typeColors],
      }}
    >
      <div className="rounded overflow-hidden shadow-lg">
        <Button unstyled href={`/pokemon/${pokemon.name}`}>
          <div
            className=" shadow-md"
            style={{
              backgroundColor:
                typeColors[pokemon.types[0] as keyof typeof typeColors],
            }}
          >
            <Image
              className="w-full group-hover:scale-105 transition-all"
              src={pokemon.imageUrl}
              width={530}
              height={530}
              alt={pokemon.name}
              style={{
                filter: 'drop-shadow(5px 5px 5px black)',
              }}
            />
          </div>

          <div className="px-6 py-4">
            <h3 className="font-bold text-center mb-2">{pokemon.name}</h3>
            <p className="text-center">
              {pokemon?.types?.map((type, index) => {
                return (
                  <span
                    key={type}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    style={{
                      backgroundColor:
                        typeColors[
                          pokemon.types[index] as keyof typeof typeColors
                        ],
                    }}
                  >
                    {type}
                  </span>
                );
              })}
            </p>

            {pokemon?.stats?.map((stat) => {
              return (
                <p key={stat.name}>
                  {stat.name}: {stat.base_stat}
                </p>
              );
            })}
          </div>
        </Button>
        <div className="flex justify-center items-center p-2">
          {type === 'add' && (
            <Button onClick={handleSubmit} className="w-full">
              +
            </Button>
          )}
          {type === 'del' && (
            <Button onClick={handleSubmit} className="w-full">
              -
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
