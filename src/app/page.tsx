'use client';
import { useState } from 'react';

import { LoadingPikachu } from '@/components/LoadingSkeleton';
import Paginator from '@/components/Paginator';
import Section from '@/components/Section';
import { useData } from '@/Hooks';
import { DataProvider } from '@/providers/DataProvider';
import PokemonList from '@/templates/PokemonList/PokemonList';

const App = () => {
  const [page, setPage] = useState<number>(1);
  const { loading, fetchData, data } = useData({
    reverse: true,
    url: '/api/pokemon',
    page: page,
  });
  if (loading) {
    return <LoadingPikachu />;
  }
  return (
    <DataProvider data={data} loading={loading} fetchData={fetchData}>
      <Section>
        <div className="flex flex-col gap-5">
          <PokemonList />
          <Paginator
            totalCount={data.results.length}
            pageSize={10}
            currentPage={page}
            setPage={setPage}
          />
        </div>
      </Section>
    </DataProvider>
  );
};

export default App;
