"user client";

import {useState} from "react";
import {fetchPokemonData, fetchPokemonList} from "../services/apiServices";


// Function to load the list of Pokemon and add data to state and loading management
async function loadList(): Promise<any> {
    // const [pokemonList, setPokemonList] = useState<any>([]);
    // const [loading, setLoading] = useState<boolean>(true);

    
    try{
        const data = await fetchPokemonList();
        return data;
        // setPokemonList(data.results);
    }
    catch (error) {
        console.error("Error fetching Pokémon list:", error);
        throw error;
    }finally {
        // setLoading(false);
    }

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

async function fetchPokemonDataFromList(): Promise<any> {
    // const [pokemonList, setPokemonList] = useState<any>([]);
    // const [loading, setLoading] = useState<boolean>(true);
    const pokemonList: any[] = [];

    try{
        const data = await fetchPokemonList();
        pokemonList.push(...data.results);
        for (const pokemon of data.results) {
            const pokemonData = await fetchPokemonData(pokemon.name);
            pokemon.imageUrl = pokemonData.sprites.front_default;
            pokemon.number = pokemonData.id;
            pokemon.type = pokemonData.types.map((typeInfo: any) => typeInfo.type.name).join(", ");
        }
    }
    catch (error) {
        console.error("Error fetching Pokémon data:", error);
        throw error;
    }
    finally {
        // setLoading(false);
    }
    return {pokemonList, loading: false};
}

export { loadList, displayPokemonDetails, fetchPokemonDataFromList };