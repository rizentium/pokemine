export interface PokemonItemInterface {
    id: number;
    image: string;
    name: string;
    url: string;
}

export interface PokemonListInterface {
    count: number;
    next: string;
    nextOffset: number;
    prevOffset: number;
    previous: string;
    results: PokemonItemInterface[];
}