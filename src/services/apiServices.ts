// Api functions to fetch data from the PokeAPI 

// Api function to fetch list of pokemon this returns only name and url
async function fetchPokemonList(): Promise<any> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);

    responseHandler(response);
    const data = await response.json();
    return data;
}

// Api function to fetch specific pokemon data this all returns full details 
async function fetchPokemonData(pokemonName: string): Promise<any> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    responseHandler(response);
    const data = await response.json();
    return data;
}

// Api function to fetch list of pokemon and then fetch details for each pokemon in the list for cards
async function fetchPokemonDataFromList(): Promise<any> {
    const pokemonList: any[] = [];

    try {
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
    return { pokemonList, loading: false };
}


async function fetchPokemonGender(pokemonId: number): Promise<any> {
    const data = await callSpeciesApi(pokemonId);
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
    const data = await callSpeciesApi(pokemonId);
    const category = data.genera.find((genus: any) => genus.language.name === "en")?.genus || "Unknown";
    return category;
}

async function fetchPokemonDescription(pokemonId: number): Promise<string> {
    const data = await callSpeciesApi(pokemonId);
    
    const description = data.flavor_text_entries.find((entry: any) => entry.language.name === "en")?.flavor_text || "No description available";
    return description;
}

async function fetchWeaknesses(types: string[]): Promise<any> {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${types[0]}`);
    responseHandler(response);
    const data = await response.json();
    const weaknesses = data.damage_relations.double_damage_from.map((typeInfo: any) => typeInfo.name);
    return weaknesses;
}


async function fetchPokemonDetails(pokemonName: string, pokemonId: number): Promise<any> {
    const pokemon = await fetchPokemonData(pokemonName);
    const gender = await fetchPokemonGender(pokemonId);
    const category = await fetchCategory(pokemonId);
    const weaknesses = await fetchWeaknesses(pokemon.types.map((typeInfo: any) => typeInfo.type.name));
    const description = await fetchPokemonDescription(pokemonId);
    try {
        return {
            name: pokemon.name,
            imageUrl: pokemon.sprites.front_default,
            number: pokemon.id,
            type: pokemon.types.map((typeInfo: any) => typeInfo.type.name),
            weaknesses: weaknesses,
            weight: pokemon.weight,
            height: pokemon.height,
            abilities: pokemon.abilities.map((abilityInfo: any) => abilityInfo.ability.name),
            gender: gender,
            category: category,

            description: description,
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

async function callSpeciesApi(pokemonId: number): Promise<any> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch species data for Pokémon ID ${pokemonId}: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}

function responseHandler(response: any): void {
    if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
    }else if (response.status === 404) {
        throw new Error(`Pokémon not found: ${response.statusText}`);
    }else if (response.status === 500) {
        throw new Error(`Server error: ${response.statusText}`);
    }else if (response.status === 403) {
        throw new Error(`Forbidden: ${response.statusText}`);
    }
}

export { fetchPokemonList, fetchPokemonData, fetchPokemonDataFromList, fetchPokemonDetails, fetchPokemonGender, fetchCategory, fetchWeaknesses, fetchPokemonDescription };