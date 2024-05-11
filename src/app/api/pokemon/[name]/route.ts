import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } },
) {
  const pokemon = params.name;

  try {
    if (pokemon) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

      if (!res.ok) {
        console.error(`Erro ao buscar dados de ${pokemon}: ${res.statusText}`);
        return NextResponse.json(
          { message: `Pokémon ${pokemon} não encontrado` },
          { status: 404 },
        );
      }

      const data = await res.json();

      const id = data.id.toString().padStart(3, '0');

      const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;

      data.imageUrl = imageUrl;

      return NextResponse.json(data, { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return new Response('Erro interno', { status: 500 });
  }

  return NextResponse.json(
    { message: 'Nenhum pokemon especificado' },
    { status: 400 },
  );
}
