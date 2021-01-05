import { createContext } from "react";
import { CatchedPokemonInterface } from "../interfaces/CatchedPokemon";

export const CatchedPokemonContext = createContext<CatchedPokemonInterface[]>([]);