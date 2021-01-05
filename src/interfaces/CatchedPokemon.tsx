import { PokemonInterface } from "./Pokemon";

export interface CatchedPokemonInterface {
  id: string;
  pokemon?: PokemonInterface;
  catchedAt?: string;
  releasedAt?: string;
}