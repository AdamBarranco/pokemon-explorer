"user client";

import { fetchCategory, fetchPokemonData, fetchPokemonGender, fetchPokemonList, fetchWeaknesses, fetchPokemonDescription, fetchAbility } from "../services/apiServices";
import { capitalize } from "../utils/capitalHelper";


// Function to load the list of Pokemon and add data to state and loading management
async function loadList(): Promise<any> {
    try {
        const data = await fetchPokemonList();
        return data;
    }
    catch (error) {
        console.error("Error fetching Pokémon list:", error);
        throw error;
    } 
}

// Function to display details of a specific Pokemon and add data to state and loading management
async function displayPokemonDetails(pokemonName: string, pokemonId: number): Promise<any> {

    const pokemon = await fetchPokemonData(pokemonName);
    const gender = await fetchPokemonGender(pokemonId);
    const category = await fetchCategory(pokemonId);
    const weaknesses = await fetchWeaknesses(pokemon.types.map((typeInfo: any) => typeInfo.type.name));
    const description = await fetchPokemonDescription(pokemonId);
    const abilities = await Promise.all(pokemon.abilities.map(async (abilityInfo: any) => {
        const abilityData = await fetchAbility(abilityInfo.ability.name);
        return {
            name: abilityInfo.ability.name,
            description: abilityData
        };
    }));
    try {
        return {
            // Basic Info
            name: capitalize(pokemon.name),
            imageUrl: pokemon.sprites.front_default,
            number: pokemon.id,
            type: pokemon.types.map((typeInfo: any) => capitalize(typeInfo.type.name)),

            // SideCard Info
            weight: pokemon.weight,
            height: pokemon.height,
            abilities: abilities,
            gender: gender,

            // Category and Weaknesses
            category: category,
            weaknesses: weaknesses.map((weakness: string) => capitalize(weakness)),

            // Description
            description: description,

            // Stats
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
    const pokemonList: any[] = [];

    try {
        const data = await fetchPokemonList();
        pokemonList.push(...data.results);
        for (const pokemon of data.results) {
            const pokemonData = await fetchPokemonData(pokemon.name);
            pokemon.imageUrl = pokemonData.sprites.front_default;
            pokemon.number = pokemonData.id;
            pokemon.type = pokemonData.types.map((typeInfo: any) => capitalize(typeInfo.type.name));
        }
    }
    catch (error) {
        console.error("Error fetching Pokémon data:", error);
        throw error;
    }
    return { pokemonList, loading: false };
};

export { loadList, displayPokemonDetails, fetchPokemonDataFromList };

