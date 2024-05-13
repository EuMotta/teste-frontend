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
    let compare = [];
    const cookieValue = cookies().get('Compare');
    if (typeof cookieValue === 'string' || typeof cookieValue === 'object') {
      compare = JSON.parse(cookieValue.value);
    }

    if (id) {
      compare = compare.filter((pokemon: any) => pokemon.name === parseInt(id));
    }

    return NextResponse.json(compare, { status: 200 });
  } catch {
    return new Response('Error', { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { pokemon, type } = data;
  try {
    let compare = [];

    const cookieValue = cookies().get('Compare');

    if (typeof cookieValue === 'string' || typeof cookieValue === 'object') {
      compare = JSON.parse(cookieValue.value);
    }

    if (type === 'del') {
      compare = compare.filter((p: any) => p.name !== pokemon.name);
      cookies().set({
        name: 'Compare',
        value: JSON.stringify(compare),
      });
      return new Response('Pokémon removido da comparação!', {
        status: 200,
      });
    } else {
      if (compare.length > 9) {
        return new Response('Limite atingido.', {
          status: 422,
        });
      }
      const pokemonNames = compare.map((p: any) => p.name);
      if (pokemonNames.includes(pokemon.name)) {
        return new Response('Este Pokémon já está na comparação.', {
          status: 422,
        });
      }
      compare.push(pokemon);
      cookies().set({
        name: 'Compare',
        value: JSON.stringify(compare),
      });
      return new Response('Pokémon adicionado com sucesso à comparação!', {
        status: 200,
      });
    }
  } catch {
    return new Response('Erro ao adicionar/remover o Pokémon da comparação.', {
      status: 422,
    });
  }
}
