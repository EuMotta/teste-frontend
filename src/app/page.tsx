'use client';
import { useData } from '@/Hooks';
import { DataProvider } from '@/providers/DataProvider';
import PokemonList from '@/templates/PokemonList';

const App = () => {
  const { loading, fetchData, data } = useData({
    reverse: true,
    url: '/api/pokemon',
    page: 20,
  });
  return (
    <DataProvider data={data} loading={loading} fetchData={fetchData}>
      <PokemonList />
    </DataProvider>
  );
};

export default App;
