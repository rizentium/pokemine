import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
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

    await act( async () => {
      render(<App />, container);
    })

    const linkElement = screen.getByText("Pokemine");
    expect(linkElement).toBeInTheDocument();
  });
})
