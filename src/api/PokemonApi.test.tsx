import { ApolloError } from '@apollo/client';
import { getPokemonDetail, getPokemonList } from './PokemonApi';

describe("App", () => {

  it('getPokemonList', async () => {
    const pokemonList = await getPokemonList(20);
    for(let x = 1; x <=10;x++) {
      expect(pokemonList.data.pokemons.results.length*x).toEqual(20*x);
      expect(pokemonList.data.pokemons.prevOffset*x).toEqual(0*x);
      expect(pokemonList.data.pokemons.nextOffset*x).toEqual(40*x);
    }
  });
})
