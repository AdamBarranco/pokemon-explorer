import {describe, it, expect} from 'vitest';
import { fetchPokemonList, fetchPokemonData } from '../src/services/apiServices';

describe('API Services', () => {
    
    it('should fetch data for a valid Pokémon', async () => {
      
        const data = await fetchPokemonList();
        expect(data).toBeDefined();
        console.log('Fetched Pokémon data:', data);
    });

    it ("should fecth specific pokemon data", async () => {
        
        const pokemonName = 'bulbasaur'; 
        const data = await fetchPokemonData(pokemonName);
        expect(data).toBeDefined();
        expect(data.name).toBe(pokemonName);
        console.log(`Fetched data for ${pokemonName}:`, data);
    });
});
