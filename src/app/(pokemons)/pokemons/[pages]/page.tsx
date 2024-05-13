'use client';
import { LoadingPikachu } from '@/components/LoadingSkeleton';
import NoPokemons from '@/components/NoPokemons';
import Paginator from '@/components/Paginator';
import Section from '@/components/Section';
import { useData } from '@/Hooks';
import { DataProvider } from '@/providers/DataProvider';
import { Hero, HeroPage } from '@/templates/Hero/Hero';
import PokemonList from '@/templates/PokemonList/PokemonList';
type Params = {
  pages: number;
};
const App = ({ params }: { params: Params }) => {
  const { loading, fetchData, data } = useData({
    reverse: true,
    url: '/api/pokemon',
    page: params.pages,
  });
  if (params.pages < 1) {
    return (
      <NoPokemons
        src="/crypikachu.png"
        text="Não existem pokémons aqui, tente ourta página"
      />
    );
  }
  if (data?.results?.length < 1) {
    return (
      <div>
        <NoPokemons
          src="/crypikachu.png"
          text="Não existem pokémons aqui, tente ourta página"
        />
        <Paginator
          totalCount={data.results.length}
          pageSize={12}
          currentPage={params.pages}
        />
      </div>
    );
  }
  if (loading) {
    return <LoadingPikachu />;
  }
  return (
    <DataProvider data={data} loading={loading} fetchData={fetchData}>
      <Hero src="/pokemon.svg" />
      <HeroPage text="Lista de pokémons" />
      <Section>
        <div className="flex flex-col gap-5">
          <PokemonList />
          <Paginator
            totalCount={data.results.length}
            pageSize={12}
            currentPage={params.pages}
          />
        </div>
      </Section>
    </DataProvider>
  );
};

export default App;
