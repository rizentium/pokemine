import localforage from "localforage";
import { CatchedPokemonInterface } from "../interfaces/CatchedPokemon";

const CatchedPokemonStorage = localforage.createInstance({
    name        : 'pokemine',
    storeName   : 'catched',
    description : 'Catched pokemon table'
  });
  
  export const setCatchedPokemon = async (payload: CatchedPokemonInterface) => {
    payload.catchedAt = new Date().toUTCString();
  
    const isAvailable = await getCatchedPokemon(payload.id);
  
    if (!isAvailable) {
      return await CatchedPokemonStorage.setItem(payload.id, payload);
    } else {
      return false;
    }
  }
  
  export const setReleasePokemon = async (catchedId: string) => {
    const pokemon = await getCatchedPokemon(catchedId);
  
    if (pokemon) {
      const newData: CatchedPokemonInterface = {
        id: pokemon.id,
        pokemon: pokemon.pokemon,
        catchedAt: pokemon.catchedAt,
        releasedAt: new Date().toUTCString()
      };
  
      return await CatchedPokemonStorage.setItem(pokemon.id, newData);
    } else {
      return false;
    }
  }
  
  export const getCatchedPokemon = (id: string) => {
    return CatchedPokemonStorage.getItem<CatchedPokemonInterface>(id);
  }
  
  export const getCatchedPokemons = async () => {
    const keys = (await CatchedPokemonStorage.keys());
  
    let result: CatchedPokemonInterface[] = [];
  
    for (let x = 0;x < keys.length;x++) {
      const data = await getCatchedPokemon(keys[x]);
      
      if (data) {
        if (!data.releasedAt) {
          result.push(data);
        }
      }
    }
  
    return result;
  }