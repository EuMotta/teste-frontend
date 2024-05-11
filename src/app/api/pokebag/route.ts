/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const url: string | undefined = request.url;
  if (!url) {
    return new Response('URL is undefined', { status: 400 });
  }

  const { searchParams } = new URL(url);
  const id = searchParams.get('id');

  try {
    let pokemons = [];
    const cookieValue = cookies().get('Pokemons');
    if (typeof cookieValue === 'string' || typeof cookieValue === 'object') {
      pokemons = JSON.parse(cookieValue.value);
    }

    if (id) {
      pokemons = pokemons.filter(
        (pokemon: any) => pokemon.name === parseInt(id),
      );
    }

    return NextResponse.json(pokemons, { status: 200 });
  } catch {
    return new Response('Error', { status: 400 });
  }
}
export async function POST(request: any) {
  const data = await request.json();
  console.log(data);

  try {
    let pokemons = [];

    const cookieValue = cookies().get('Pokemons');

    if (typeof cookieValue === 'string' || typeof cookieValue === 'object') {
      pokemons = JSON.parse(cookieValue.value);
    }
    const pokemonNames = pokemons.map((pokemon: any) => pokemon.name);
    if (pokemonNames.includes(data.name)) {
      return new Response('Este Pokémon já está na sua Pokédex.', {
        status: 422,
      });
    }
    pokemons.push(data);

    cookies().set({
      name: 'Pokemons',
      value: JSON.stringify(pokemons),
    });

    return new Response('Pokémon adicionado com sucesso à Pokédex!', {
      status: 200,
    });
  } catch {
    return new Response('Erro ao adicionar o Pokémon à Pokédex.', {
      status: 422,
    });
  }
}
