import { describe, it, expect } from 'vitest';
import { fetchPokemonList, fetchPokemonData, fetchPokemonDataFromList, fetchPokemonDetails } from '../src/services/apiServices';

describe('API Services', () => {

    it('should fetch data for a valid Pokémon', async () => {

        const data = await fetchPokemonList();
        expect(data).toBeDefined();
        console.log('Fetched Pokémon data:', data);
    });

    it("should fecth specific pokemon data", async () => {

        const pokemonName = 'bulbasaur';
        const data = await fetchPokemonData(pokemonName);
        expect(data).toBeDefined();
        expect(data.name).toBe(pokemonName);
        console.log(`Fetched data for ${pokemonName}:`, data);
    });

    it("should fetch Pokemon data from the list", async () => {
        const data = await fetchPokemonDataFromList();
        expect(data).toBeDefined();
        expect(data.pokemonList).toBeDefined();
        expect(data.loading).toBe(false);
        console.log('Fetched Pokémon data from the list:', data);
    });

    it("should get pokemon details for a specific pokemon", async () => {
        const pokemonName = 'venusaur';
        const pokemonId = 3;
        const data = await fetchPokemonDetails(pokemonName, pokemonId);
        expect(data).toBeDefined();
        expect(data.name).toBe(pokemonName);
        expect(data.gender).toBeDefined();
        expect(data.category).toBeDefined();
        expect(data.weaknesses).toBeDefined();
        console.log(`Fetched details for ${pokemonName}:`, data);
    });


});
