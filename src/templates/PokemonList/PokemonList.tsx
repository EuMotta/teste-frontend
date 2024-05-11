import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

import Button from '@/components/Button';
import PokemonCard from '@/components/Card/Card';
import Container from '@/components/Container';
import { useData } from '@/providers/DataProvider';

import { PokemonListProps } from '../../../@Types/global';
import styles from './PokemonList.module.css';

const PokemonList = () => {
  const { loading, fetchData, data } = useData();
  const [search, setSearch] = useState('');
  const router = useRouter();
  if (loading) {
    return <div>Carregando pokemons...</div>;
  }

  const handleSearch = async () => {
    if (search.trim() !== '') {
      try {
        const response = await fetch(`/api/pokemon/${search}`);
        if (response.ok) {
          const pokemonData = await response.json();
          const pokemonName = pokemonData.name;
          toast.success('Pokémon encontrado, encaminhando');
          router.push(`/pokemon/${pokemonName}`);
        } else {
          toast.error('Pokémon não encontrado');
        }
      } catch (error) {
        console.error('Erro ao pesquisar:', error);
        toast.error('Erro ao pesquisar');
      }
    } else {
      toast.error('Insira o nome do Pokémon');
    }
  };
  return (
    <Container className={styles.list_container}>
      <div className="flex items-center justify-center gap-10">
        <div className={styles.list_button}>
          <Button onClick={fetchData}>Atualizar</Button>
        </div>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
          <Button onClick={handleSearch}>Pesquisar</Button>
        </div>
      </div>
      <div className={styles.list_list}>
        {data.results.map((pokemon: PokemonListProps) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </Container>
  );
};

export default PokemonList;
