import Image from 'next/image';

import Button from '@/components/Button';
import Container from '@/components/Container';
import { useData } from '@/providers/DataProvider';

import { PokemonListProps } from '../../@Types/global';

const typeColors = {
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

const PokemonList = () => {
  const { loading, fetchData, data } = useData();

  if (loading) {
    return <div>Carregando pokemons...</div>;
  }
  console.log(data);
  return (
    <Container className="flex flex-col gap-5">
      <div className="flex justify-center items-center">
        <Button onClick={fetchData}>Atualizar</Button>
      </div>
      <div className="grid grid-cols-5 gap-10 ">
        {data.results.map((pokemon: PokemonListProps) => (
          <div
            key={pokemon.name}
            className="max-w-72 border-4 bg-white hover:shadow-xl transition-all mx-auto"
            style={{
              borderColor:
                typeColors[pokemon.types[0] as keyof typeof typeColors],
            }}
          >
            <Button unstyled href={`/pokemon/${pokemon.name}`}>
              <div className="rounded overflow-hidden shadow-lg">
                <Image
                  className="w-full"
                  src={pokemon.imageUrl}
                  width={530}
                  height={530}
                  alt={pokemon.name}
                />
                <div className="px-6 py-4">
                  <h3 className="font-bold text-xl text-center mb-2">
                    {pokemon.name}
                  </h3>
                  <p className="text-center">
                    {pokemon?.types?.map((type) => {
                      return (
                        <span
                          key={type}
                          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                          style={{
                            backgroundColor:
                              typeColors[
                                pokemon.types[0] as keyof typeof typeColors
                              ],
                          }}
                        >
                          {type}
                        </span>
                      );
                    })}
                  </p>
                </div>
              </div>
            </Button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PokemonList;
