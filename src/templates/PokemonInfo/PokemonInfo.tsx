/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import React from 'react';

import { typeColors } from '@/components/Card/Card';
import { StatProgressBar } from '@/components/ProgressBar';
type ParamsProps = {
  name: string;
};

type Props = {
  data: any;
  params: ParamsProps;
};
type Type = {
  type: {
    name: string;
  };
};
type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
};
const PokemonInfo = ({ data, params }: Props) => {
  return (
    <div className="grid lg:grid-cols-2  mx-auto">
      <div
        className="flex justify-center lg:w-3/4 w-full mx-auto rounded-xl overflow-hidden  items-center"
        style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: `url('/type/${
            data.types[0].type.name === 'normal' && data?.types[1]?.type?.name
              ? data.types[1].type.name
              : data.types[0].type.name
          }.jpg')`,
        }}
      >
        <Image
          src={data.imageUrl}
          alt={params.name}
          width={400}
          height={400}
          className="transition-all duration-1000 ease-in-out translate-y-10 hover:scale-125"
          style={{
            filter: 'drop-shadow(10px 10px 10px black)',
          }}
        />
      </div>
      <div className="p-5 lg:w-3/4 mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800">{params.name}</h1>
          <div className="flex flex-col gap-5 justify-center mt-4">
            <div className="flex gap-5">
              {data.types.map((type: Type) => (
                <div
                  key={type.type.name}
                  className="w-full p-2 transform -skew-x-12"
                  style={{
                    backgroundColor: typeColors[type.type.name.toLowerCase()],
                  }}
                >
                  <p className="text-center">{type.type.name}</p>
                </div>
              ))}
            </div>
            <div className="text-gray-600 mr-2">
              <StatProgressBar baseStat={data.height} statName="Altura" />
            </div>
            <div className="text-gray-600">
              <StatProgressBar baseStat={data.weight} statName="Peso" />
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Habilidades:
            </h2>
            <ul className="flex flex-wrap gap-5">
              {data.abilities.map((ability: any, index: number) => (
                <div
                  className="bg-orange-600 text-white p-2 rounded-full"
                  key={index}
                >
                  {ability.ability.name}
                </div>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Status:</h2>
            <div className="text-gray-600">
              {data.stats.map((stat: Stat) => (
                <StatProgressBar
                  key={stat.stat.name}
                  baseStat={stat.base_stat}
                  statName={stat.stat.name}
                />
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Moves:</h2>
            <div className="flex gap-5 flex-wrap overflow-y-scroll max-h-72">
              {data.moves.map((move: any, index: number) => (
                <div
                  className="bg-indigo-600 text-white p-2 rounded-full"
                  key={index}
                >
                  {move.move.name}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Sprites:</h2>
            <div className="flex flex-wrap">
              {Object.keys(data.sprites).map(
                (sprite: string, index: number) => {
                  if (typeof data.sprites[sprite] !== 'string') {
                    return null;
                  }
                  return (
                    <img
                      key={index}
                      src={data.sprites[sprite]}
                      alt={`${params.name}-${sprite}`}
                      className="w-16 h-16 mr-2 mb-2"
                    />
                  );
                },
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
