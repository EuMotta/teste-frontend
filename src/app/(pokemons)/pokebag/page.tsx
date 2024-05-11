'use client';

import { useData } from '@/Hooks';

const Page = () => {
  const { data } = useData({ reverse: false, url: '/api/pokebag' });
  console.log(data);
  return <div>page</div>;
};

export default Page;
