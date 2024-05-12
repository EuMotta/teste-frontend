/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { useData } from '@/Hooks';
import PokemonInfo from '@/templates/PokemonInfo/PokemonInfo';

type Params = {
  name: string;
};

const Page = ({ params }: { params: Params }) => {
  const { loading, /* fetchData, */ data } = useData({
    reverse: true,
    url: '/api/pokemon/',
    pokemon: params.name,
  });
  if (loading) {
    return <div>Carregando...</div>;
  }
  return (
    <Section>
      <Container>
        <Button href="/pokemons/1">Voltar</Button>
        <PokemonInfo data={data} params={params} />
      </Container>
    </Section>
  );
};

export default Page;
