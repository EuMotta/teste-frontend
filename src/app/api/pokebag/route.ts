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
  const { pokemon, type } = data;
  try {
    let pokemons = [];

    const cookieValue = cookies().get('Pokemons');

    if (typeof cookieValue === 'string' || typeof cookieValue === 'object') {
      pokemons = JSON.parse(cookieValue.value);
    }

    if (type === 'del') {
      pokemons = pokemons.filter((p: any) => p.name !== pokemon.name);
      cookies().set({
        name: 'Pokemons',
        value: JSON.stringify(pokemons),
      });
      return new Response('Pokémon removido com sucesso da Pokédex!', {
        status: 200,
      });
    } else {
      if (pokemons.length > 9) {
        return new Response('Limite atingido.', {
          status: 422,
        });
      }
      const pokemonNames = pokemons.map((p: any) => p.name);
      if (pokemonNames.includes(pokemon.name)) {
        return new Response('Este Pokémon já está na sua Pokédex.', {
          status: 422,
        });
      }
      pokemons.push(pokemon);
      cookies().set({
        name: 'Pokemons',
        value: JSON.stringify(pokemons),
      });
      return new Response('Pokémon adicionado com sucesso à Pokédex!', {
        status: 200,
      });
    }
  } catch {
    return new Response('Erro ao adicionar/remover o Pokémon à Pokédex.', {
      status: 422,
    });
  }
}
