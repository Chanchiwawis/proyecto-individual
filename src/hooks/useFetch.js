import { useEffect, useState } from 'react';
import { fetchPokemons } from '../helpers/getPokemons';

export const useFetch = () => {
 
    const [pokemonList, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
    
    useEffect( () => {
        getPokemons();
    }, []);
    
    const getPokemons = async() => {
        const fetchedData = await fetchPokemons();
        setPokemons(fetchedData);
        setIsLoading(false);
    }
    
    return {
        pokemonList,
        isLoading
    }

}