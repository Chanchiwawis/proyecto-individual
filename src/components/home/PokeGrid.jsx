import Grid from "@mui/material/Unstable_Grid2";
import { useEffect } from "react";
import { PokeCard } from "./PokeCard";
import { fetchPokemons }  from '../../store/slices/index'
import { useDispatch, useSelector } from "react-redux";

export const PokeGrid = () => {

  const pokemonList = useSelector(state => state.pokemons.list)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [])
  
  console.log(pokemonList)

  return (
    <Grid container spacing={3}>
      {pokemonList.length === 0 ? (
        <h2>Cargando...</h2>
      ) : (
        pokemonList.map((pokemon) => (
          <Grid s={4}>
            <PokeCard key={pokemon.id} data={pokemon} />
          </Grid>
        ))
      )}
    </Grid>
  );
};
