'use client';
import React from 'react';

import { useData } from '@/Hooks';

type Params = {
  name: string;
};

const Page = ({ params }: { params: Params }) => {
  console.log(params);
  const { loading, /* fetchData, */ data } = useData({
    reverse: true,
    url: '/api/pokemon',
    pokemon: params.name,
  });
  if (loading) {
    return <div>Carregando...</div>;
  }
  console.log(data);
  return <div>{params.name}</div>;
};

export default Page;
