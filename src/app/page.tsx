'use client';
import { useState } from 'react';

import LoadingSkeleton from '@/components/LoadingSkeleton';
import Paginator from '@/components/Paginator';
import { useData } from '@/Hooks';
import { DataProvider } from '@/providers/DataProvider';
import PokemonList from '@/templates/PokemonList';

const App = () => {
  const [page, setPage] = useState<number>(1);
  const { loading, fetchData, data } = useData({
    reverse: true,
    url: '/api/pokemon',
    page: page,
  });
  if (loading) {
    return <LoadingSkeleton />;
  }
  return (
    <DataProvider data={data} loading={loading} fetchData={fetchData}>
      <div className="flex flex-col gap-5">
        <PokemonList />
        <Paginator
          totalCount={data.results.length}
          pageSize={10}
          currentPage={page}
          setPage={setPage}
        />
      </div>
    </DataProvider>
  );
};

export default App;
