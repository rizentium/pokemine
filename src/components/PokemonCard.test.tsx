import React from 'react';
import { act, render, screen } from '@testing-library/react';
import PokemonCardComponent from './PokemonCard';
import { getPokemonList } from '../api/PokemonApi';

describe("PokemonCard", () => {
  let container: any;

  beforeAll(() => {
    window.matchMedia = window.matchMedia || function() {
      return {
          matches: false,
          addListener: function() {},
          removeListener: function() {}
      };
    };
  });

  it('render correctly', async () => {

    const data = await getPokemonList(20);
    const results = data.data.pokemons.results;

    await act( async () => {
      render(
        <div>
          {
            results.map((res, i) => (
              <PokemonCardComponent
                key={i}
                pokemonId={res.name}
                subtitle=''
                img={res.url}
              />
            ))
          }
        </div>
        , container);
    });

    results.forEach(data => {
      const title = screen.getByText(data.name);
      expect(title).toBeInTheDocument();
    })
  });
})
