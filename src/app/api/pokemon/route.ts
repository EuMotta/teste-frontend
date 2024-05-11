import { NextRequest, NextResponse } from 'next/server';

type typeInfoProps = {
  type: {
    name: string;
  };
};
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  let page = Number(searchParams.get('page'));
  page = page * 12;
  try {
    if (page) {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=12`,
      );
      const data = await res.json();
      const promises = data.results.map(
        async (pokemon: { url: string; name: string }) => {
          const id = pokemon.url.split('/')[6];
          const paddedId = id.padStart(3, '0');
          const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;

          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
          );
          const pokemonData = await res.json();
          const types = pokemonData.types.map(
            (typeInfo: typeInfoProps) => typeInfo.type.name,
          );

          const stats = pokemonData.stats
            .filter(
              (statInfo: { stat: { name: string } }) =>
                statInfo.stat.name === 'attack' ||
                statInfo.stat.name === 'defense',
            )
            .map((statInfo: { base_stat: number; stat: { name: string } }) => ({
              name: statInfo.stat.name,
              base_stat: statInfo.base_stat,
            }));

          return {
            ...pokemon,
            imageUrl: image,
            types: types,
            stats: stats,
          };
        },
      );

      data.results = await Promise.all(promises);

      return NextResponse.json(data, { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return new Response('Erro interno', { status: 500 });
  }
}
