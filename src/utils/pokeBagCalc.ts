type Pokemon = {
  name: string;
  url: string;
  imageUrl: string;
  types: string[];
  stats: {
    name: string;
    base_stat: number;
  }[];
};
export function sumBaseStats(pokemonData: Pokemon[]) {
  const totalBaseStat = { attack: 0, defense: 0 };
  pokemonData.forEach((pokemon) => {
    pokemon.stats.forEach((stat) => {
      if (stat.name === 'attack') {
        totalBaseStat.attack += stat.base_stat;
      } else if (stat.name === 'defense') {
        totalBaseStat.defense += stat.base_stat;
      }
    });
  });
  return totalBaseStat;
}
