import localforage from "localforage";
import { createContext } from "react";
import { CatchedPokemonInterface } from "../interfaces/CatchedPokemon";
import { v1 } from "uuid";

const CatchedPokemonStorage = localforage.createInstance({
    name        : 'pokemine',
    storeName   : 'catched',
    description : 'Catched pokemon table'
});

export const setCatchedPokemon = (payload: CatchedPokemonInterface) => {
    payload.id = v1();
    payload.catchedAt = new Date().toUTCString();
    return CatchedPokemonStorage.setItem(v1(), payload);
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
            result.push(data);
        }
    }

    return result;
}

export const CatchedPokemonContext = createContext<CatchedPokemonInterface[]>([]);