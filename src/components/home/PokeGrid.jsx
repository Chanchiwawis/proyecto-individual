import Grid from "@mui/material/Unstable_Grid2";
import React, { useContext } from "react";
import { PokeCard } from "./PokeCard";

export const PokeGrid = () => {

  return (
    <Grid container spacing={3}>
      {/* {isLoading ? (
        <h2>Cargando...</h2>
      ) : (
        pokemonList.map((pokemon) => (
          <Grid s={4}>
            <PokeCard key={pokemon.id} data={pokemon} />
          </Grid>
        ))
      )} */}
    </Grid>
  );
};
