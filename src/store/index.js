import { configureStore } from '@reduxjs/toolkit';
import { pokemonSlice } from './slices/index';

export default configureStore({
  reducer: {
    pokemons: pokemonSlice.reducer
  }
});
