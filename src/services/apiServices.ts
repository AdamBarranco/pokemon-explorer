


// Api functions to fetch data from the PokeAPI 

import { useState } from "react";

// Api function to fetch list of pokemon this returns only name and url
async function fetchPokemonList(): Promise<any> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    if (!response.ok) {
        throw new Error(`Failed to fetch data for list of Pokémon: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}

// Api function to fetch specific pokemon data this all returns full details 
async function fetchPokemonData(pokemonName: string): Promise<any> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch data for Pokémon ${pokemonName}: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}

// Api function to fetch list of pokemon and then fetch details for each pokemon in the list for cards
async function fetchPokemonDataFromList(): Promise<any> {
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
    return {pokemonList, loading: false};
}

export { fetchPokemonList, fetchPokemonData, fetchPokemonDataFromList };