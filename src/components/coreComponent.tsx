"user client";

import {useState} from "react";
import {fetchPokemonData, fetchPokemonList} from "../services/apiServices";


// Function to load the list of Pokemon and add data to state and loading management
async function loadList(): Promise<any> {
    const [pokemonList, setPokemonList] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
    try {
        const data = await fetchPokemonList();
        setPokemonList(data.results);
    }
    catch (error) {
        console.error("Error fetching Pokémon list:", error);
        throw error;
    }finally {
        setLoading(false);
    }
    return {pokemonList, loading};
}

// Function to display details of a specific Pokemon and add data to state and loading management
async function displayPokemonDetails(pokemonName: string): Promise<any> {

    const [pokemonDetails, setPokemonDetails] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    try {
        const data = await fetchPokemonData(pokemonName);
        setPokemonDetails(data);
    }
    catch (error) {
        console.error(`Error fetching details for Pokémon ${pokemonName}:`, error);
        throw error;
    }
    finally {
        setLoading(false);
    }
    return {pokemonDetails, loading};
}


export { loadList, displayPokemonDetails };