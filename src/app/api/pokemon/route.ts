import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pokemon = searchParams.get('pokemon');
  const page = searchParams.get('page');
  try {
    if (pokemon) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await res.json();

      return NextResponse.json(data, { status: 200 });
    }
    if (page) {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`,
      );
      const data = await res.json();
      return NextResponse.json(data, { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return new Response('Erro interno', { status: 500 });
  }
}
