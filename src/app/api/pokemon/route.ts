import { NextRequest, NextResponse } from 'next/server';

type typeInfoProps = {
  type: {
    name: string;
  };
};
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pokemon = searchParams.get('pokemon');
  let page = Number(searchParams.get('page'));
  page = page * 12;
  try {
    if (pokemon) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await res.json();

      const id = data.id.toString().padStart(3, '0');

      const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;

      data.imageUrl = imageUrl;

      return NextResponse.json(data, { status: 200 });
    }
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

          return {
            ...pokemon,
            imageUrl: image,
            types: types,
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
