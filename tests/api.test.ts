import {describe, it, expect} from 'vitest';
import { fetchPokemonData } from '../src/services/apiServices';

describe('API Services', () => {
    it('should fetch data for a valid Pokémon', async () => {
      
        const data = await fetchPokemonData();
        expect(data).toBeDefined();
        console.log('Fetched Pokémon data:', data);
    });
});
