'use client';

import { LoadingPokeBag } from '@/components/LoadingSkeleton';
import NoPokemons from '@/components/NoPokemons';
import Section from '@/components/Section';
import { useData } from '@/Hooks';
import { DataProvider } from '@/providers/DataProvider';
import Hero from '@/templates/Hero/Hero';
import PokeBagList from '@/templates/PokemonList/PokeBagList';

import { sumBaseStats } from '@/utils/pokeBagCalc';

const Page = () => {
  const { loading, data, fetchData } = useData({
    reverse: false,
    url: '/api/pokebag',
  });
  if (loading) {
    return <LoadingPokeBag />;
  }
  if (data?.length < 1 || !data) {
    return (
      <div>
        <NoPokemons
          src="/togepicrying.png"
          text="Não existem pokémons na sua pokébag"
        />
      </div>
    );
  }
  const totalStats = sumBaseStats(data);
  return (
    <DataProvider data={data} loading={loading} fetchData={fetchData}>
      <Hero src="/pokebag.png" />
      <div className="flex p-5 items-center justify-evenly">
        <h3>Ataque total: {totalStats.attack}</h3>
        <h3>Defesa total: {totalStats.defense}</h3>
      </div>
      <Section>
        <div className="flex flex-col gap-5">
          <PokeBagList />
        </div>
      </Section>
    </DataProvider>
  );
};

export default Page;
