import {describe, it, expect} from 'vitest';

describe('API Services', () => {
    it('should fetch data for a valid Pokémon', async () => {
      
        const data = await fetchPokemonData();
        expect(data).toBeDefined();
        expect(data.name).toBeDefined();
    });
});
