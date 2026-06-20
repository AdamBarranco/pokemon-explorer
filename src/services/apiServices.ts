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


async function fetchPokemonGender(pokemonId: number): Promise<any> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch species data for Pokémon ID ${pokemonId}: ${response.statusText}`);
    }
    const data = await response.json();
    const genderRate = data.gender_rate;
    let gender: string;
    if (genderRate === -1) {
        gender = "Genderless";
    } else if (genderRate === 0) {
        gender = "Male";
    } else if (genderRate === 8) {
        gender = "Female";
    } else {
        gender = "Male/Female";
    }
    return gender;
}

async function fetchCategory(pokemonId: number): Promise<any> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch species data for Pokémon ID ${pokemonId}: ${response.statusText}`);
    }
    const data = await response.json();
    const category = data.genera.find((genus: any) => genus.language.name === "en")?.genus || "Unknown";
    return category;
}


async function fetchPokemonDetails(pokemonName: string, pokemonId: number): Promise<any> {
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

export { fetchPokemonList, fetchPokemonData, fetchPokemonDataFromList, fetchPokemonDetails, fetchPokemonGender, fetchCategory };