"user client";

import {useState} from "react";
import {fetchCategory, fetchPokemonData, fetchPokemonGender, fetchPokemonList} from "../services/apiServices";


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
async function displayPokemonDetails(pokemonName: string, pokemonId: number): Promise<any> {

    const pokemon = await fetchPokemonData(pokemonName);
    const gender = await fetchPokemonGender(pokemonId);
    const category = await fetchCategory(pokemonId);
    try {
        return {
            name: pokemon.name,
            imageUrl: pokemon.sprites.front_default,
            number: pokemon.id,
            type: pokemon.types.map((typeInfo: any) => typeInfo.type.name).join(", "),

            weight: pokemon.weight,
            height: pokemon.height,
            abilities: pokemon.abilities.map((abilityInfo: any) => abilityInfo.ability.name).join(", "),
            gender: gender,
            category: category,

            hp: pokemon.stats.find((statInfo: any) => statInfo.stat.name === "hp")?.base_stat,
            attack: pokemon.stats.find((statInfo: any) => statInfo.stat.name === "attack")?.base_stat,
            defense: pokemon.stats.find((statInfo: any) => statInfo.stat.name === "defense")?.base_stat,
            specialAttack: pokemon.stats.find((statInfo: any) => statInfo.stat.name === "special-attack")?.base_stat,
            specialDefense: pokemon.stats.find((statInfo: any) => statInfo.stat.name === "special-defense")?.base_stat,
            speed: pokemon.stats.find((statInfo: any) => statInfo.stat.name === "speed")?.base_stat,

        }
        
    }
    catch (error) {
        console.error(`Error fetching details for Pokémon ${pokemonName}:`, error);
        throw error;
    }
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
            pokemon.type = pokemonData.types.map((typeInfo: any) => typeInfo.type.name);
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
};

export { loadList, displayPokemonDetails, fetchPokemonDataFromList };