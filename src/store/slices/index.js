import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState: {
        list: []
    },
    reducers: {
        setPokemonList: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { setPokemonList } = pokemonSlice.actions;
export default pokemonSlice.reducer;

//data fetch
export const fetchPokemons = () => (dispatch) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
    return fetch(url)
        .then(resp => resp.json())
        .then(({ results }) => {
            const pokemonList = results.map(pokemon => {
                return fetchDetails(pokemon);
            });
            return Promise.all(pokemonList);
        })
        .then(pokemonList => {
            dispatch(setPokemonList(pokemonList));
        });
};

const fetchDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then(resp => resp.json())
        .then(({ abilities, height, id, moves, sprites, stats, types, weight, name }) => {
            return {
                abilities,
                height,
                id,
                moves,
                sprites,
                stats,
                types,
                weight,
                name
            };
        });
};