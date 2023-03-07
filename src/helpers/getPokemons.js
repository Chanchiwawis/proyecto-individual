export const fetchPokemons = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
  const resp = await fetch(url);
  const { results } = await resp.json();

  const pokemonList = [];
  results.forEach(async (pokemon) => {
    pokemonList.push(await fetchDetails(pokemon));
  });

  return(pokemonList);
};

const fetchDetails = async (pokemon) => {
  const { url } = pokemon;
  const resp = await fetch(url);
  const { abilities, height, id, moves, sprites, stats, types, weight } =
    await resp.json();
  return {
    abilities,
    height,
    id,
    moves,
    sprites,
    stats,
    types,
    weight,
  };
};
