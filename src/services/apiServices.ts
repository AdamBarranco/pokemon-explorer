


// Api functions to fetch data from the PokeAPI 

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

export { fetchPokemonList, fetchPokemonData };