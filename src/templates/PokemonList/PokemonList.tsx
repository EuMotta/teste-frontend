import Button from '@/components/Button';
import PokemonCard from '@/components/Card/Card';
import Container from '@/components/Container';
import { useData } from '@/providers/DataProvider';

import { PokemonListProps } from '../../../@Types/global';
import styles from './PokemonList.module.css';

const PokemonList = () => {
  const { loading, fetchData, data } = useData();

  if (loading) {
    return <div>Carregando pokemons...</div>;
  }
  console.log(data);
  return (
    <Container className={styles.list_container}>
      <div className={styles.list_button}>
        <Button onClick={fetchData}>Atualizar</Button>
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
