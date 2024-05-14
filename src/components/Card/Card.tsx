'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { useData } from '@/Hooks';

import { PokemonListProps } from '../../../@Types/global';
import Button from '../Button';
import styles from './Card.module.css';

type Props = {
  pokemon: PokemonListProps;
  type?: 'add' | 'del';
  fetchData?: () => void;
};
type TypeColors = {
  [key: string]: string;
};
export const typeColors: TypeColors = {
  electric: '#FFD700',
  fire: '#FF4500',
  water: '#1E90FF',
  grass: '#32CD32',
  psychic: '#FF69B4',
  rock: '#A9A9A9',
  ground: '#D2B48C',
  ice: '#87CEEB',
  ghost: '#356177',
  dark: '#4e567d',
  dragon: '#9932CC',
  fairy: '#FFB6C1',
  steel: '#708090',
  fighting: '#B22222',
  flying: '#87CEEB',
  poison: '#D196FC',
  bug: '#008000',
};

const PokemonCard = ({ pokemon, type, fetchData }: Props) => {
  const { fetchData: fetchCompare } = useData({
    url: '/api/compare',
    reverse: true,
  });

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (ballType: string) => {
    try {
      const response = await fetch('/api/pokebag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pokemon: pokemon, type: type, ballType }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }
      const responseData = await response.text();
      if (fetchData) {
        fetchData();
      }

      toast.success(responseData);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Erro desconhecido');
      }
    }
  };

  const handleSubmitCompare = async () => {
    try {
      const response = await fetch('/api/compare', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pokemon: pokemon, type: 'add' }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }
      const responseData = await response.text();
      fetchCompare();
      toast.success(responseData);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Erro desconhecido');
      }
    }
  };

  const pokeballs = ['pokeball', 'greatball', 'ultraball', 'masterball'];

  return (
    <div
      key={pokemon.name}
      className={`${styles.card_content} group`}
      style={{
        borderColor: typeColors[pokemon.types[0] as keyof typeof typeColors],
      }}
    >
      <div className={styles.card_image}>
        <Button unstyled href={`/pokemon/${pokemon.name}`}>
          <div
            className="shadow-md"
            style={{
              backgroundColor:
                typeColors[pokemon.types[0] as keyof typeof typeColors],
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundImage: `url('/type/${
                pokemon.types[0] === 'normal' && pokemon.types[1]
                  ? pokemon.types[1]
                  : pokemon.types[0]
              }.jpg')`,
            }}
          >
            <Image
              className="group-hover:scale-125  group-hover:translate-x-5 group-hover:-translate-y-5"
              src={pokemon.imageUrl}
              width={530}
              height={530}
              alt={pokemon.name}
              style={{
                filter: 'drop-shadow(5px 5px 5px black)',
              }}
            />
          </div>
        </Button>
        <div className={styles.card_text}>
          <h3>{pokemon.name}</h3>
          <p>
            {pokemon?.types?.map((type, index) => {
              return (
                <span
                  key={type}
                  style={{
                    backgroundColor:
                      typeColors[
                        pokemon.types[index] as keyof typeof typeColors
                      ],
                  }}
                >
                  {type}
                </span>
              );
            })}
          </p>
          {pokemon?.stats?.map((stat) => {
            return (
              <p key={stat.name}>
                {stat.name}: {stat.base_stat}
              </p>
            );
          })}
        </div>
        <div className={styles.card_buttons}>
          <Button onClick={handleSubmitCompare} className="w-full">
            Comparar
          </Button>
          {type === 'add' && (
            <div className="w-full">
              <Button
                onClick={() => setShowModal(!showModal)}
                className="w-full"
              >
                +
              </Button>
            </div>
          )}
          {type === 'del' && (
            <Button onClick={() => handleSubmit('none')} className="w-full">
              -
            </Button>
          )}
        </div>
      </div>
      {showModal && (
        <div className={styles.card_modal}>
          <div className={styles.card_modal_content}>
            <h2>Escolha uma Pokébola </h2>
            <div className={styles.card_modal_pokeballs}>
              {pokeballs.map((ball) => (
                <div
                  key={ball}
                  onClick={() => {
                    handleSubmit(ball);
                    setShowModal(false);
                  }}
                  className={styles.card_modal_pokeball}
                >
                  <Image
                    src={`/pokeballs/${ball}.png`}
                    width={38}
                    height={38}
                    alt={ball}
                  />
                  <span>{ball}</span>
                </div>
              ))}
            </div>
            <Button onClick={() => setShowModal(false)}>Cancelar</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
