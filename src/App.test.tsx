import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  beforeAll(() => {
    window.matchMedia = window.matchMedia || function() {
      return {
          matches: false,
          addListener: function() {},
          removeListener: function() {}
      };
    };
  });

  test('render correctly', () => {
    render(<App />);
    const linkElement = screen.getByText("Pokemine");
    expect(linkElement).toBeInTheDocument();
  });
})
