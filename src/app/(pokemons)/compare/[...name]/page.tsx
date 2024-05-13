/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';

import Container from '@/components/Container';
import { StatProgressBarCompare } from '@/components/ProgressBar';
import Section from '@/components/Section';
import { useCompareData } from '@/Hooks';
import { Hero, HeroPage } from '@/templates/Hero/Hero';

type StatProps = {
  stat: {
    name: string;
  };
};

type PageProps = {
  params: {
    name: string[];
  };
};

export default function Page({ params }: PageProps) {
  const { loading, data } = useCompareData({ params: params, reverse: true });
  const statsList = [
    { stat: 'hp', name: 'Vida' },
    { stat: 'attack', name: 'Ataque' },
    { stat: 'defense', name: 'Defesa' },
    { stat: 'special-attack', name: 'Ataque Especial' },
    { stat: 'special-defense', name: 'Defesa Especial' },
    { stat: 'speed', name: 'Velocidade' },
  ];
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data);

  const renderStats = (data: any, statName: string) => {
    if (!data || !Array.isArray(data) || data.length === 0) {
      return null;
    }

    let maxStat = 0;
    let maxPokemonName = '';
    let maxPokemonImg = '';

    const baseStats = data.map((pokemon: any) => {
      const stat = pokemon.stats.find(
        (stat: StatProps) =>
          stat.stat.name.toLowerCase() === statName.toLowerCase(),
      );
      if (stat) {
        if (stat.base_stat > maxStat) {
          maxStat = stat.base_stat;
          maxPokemonName = pokemon.name;
          maxPokemonImg = pokemon.sprites.front_default;
        }
        return {
          stat: stat.base_stat,
          img: pokemon.sprites.front_default,
          name: pokemon.name,
        };
      } else {
        return null;
      }
    });

    return (
      <div className="flex flex-col gap-2">
        {baseStats.map((baseStat, index) => (
          <div key={index} className="flex  items-center">
            <Image
              src={baseStat?.img}
              width={50}
              height={50}
              alt={baseStat?.name}
              title={baseStat?.name}
            />
            <div className="w-full">
              <StatProgressBarCompare baseStat={baseStat?.stat} />
            </div>
          </div>
        ))}
        <div>
          <h3 className="flex items-center">
            Vencedor:
            <Image
              src={maxPokemonImg}
              width={50}
              height={50}
              alt={maxPokemonName}
              title={maxPokemonName}
            />
            {maxPokemonName}
          </h3>
        </div>
      </div>
    );
  };

  return (
    <>
      <Hero src="/VS.webp" />
      <HeroPage text="Comparação de pokemons" />
      <Section>
        <Container>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-5">
            {statsList.map((stat) => (
              <div
                key={stat.stat}
                className="p-5 flex flex-col gap-5 border rounded-xl bg-slate-50"
              >
                <h3>{stat.name}</h3>
                {renderStats(data, stat.stat)}
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
