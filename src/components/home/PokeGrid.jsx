import { useFetch } from "../../hooks/useFetch";
import { PokeCard } from "./pokeCard";

export const PokeGrid = () => {
  const { pokemonList, isLoading } = useFetch();
  console.log(pokemonList)
  console.log(typeof(pokemonList))
  console.log(isLoading)
  return (
    <>
      {isLoading ? (
        <h2>Cargando...</h2>
      ) : (
        pokemonList.map((pokemon) => <h2 key={pokemon.id}>hola</h2>)
      )}
    </>
  );
};
