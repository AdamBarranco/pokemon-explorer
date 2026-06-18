

async function fetchPokemonData(): Promise<any> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    if (!response.ok) {
        throw new Error(`Failed to fetch data for list of Pokémon: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}