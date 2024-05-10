import { ReactNode } from 'react';

export type PokemonListProps = {
  name: string;
  url: string;
  imageUrl: string;
};

export type ChildrenProps = {
  children: ReactNode;
};
export type ClassNames = {
  className?: string;
};
