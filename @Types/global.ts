import { ReactNode } from 'react';

export type PokemonListProps = {
  name: string;
  url: string;
  imageUrl: string;
  types: string[];
  stats: stats[];
};
type stats = {
  name: string;
  base_stat: number;
};

export type ChildrenProps = {
  children: ReactNode;
};
export type ClassNames = {
  className?: string;
};
