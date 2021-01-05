import { List, Row } from "antd";
import React, { useState, useEffect } from "react";
import { getPokemonList } from "../../api/PokemonApi";
import PokemonCardComponent from "../../components/PokemonCard";
import { CatchedPokemonInterface } from "../../interfaces/CatchedPokemon";
import { PokemonItemInterface } from "../../interfaces/PokemonList";
import { HomeBody } from "../../styles/HomeStyle";

interface PageBodyProps {
  pokemons: CatchedPokemonInterface[]
}

export const HomePageBody = (props: PageBodyProps) => {

  const [ pokemons, setPokemons ] = useState<PokemonItemInterface[]>([]);
  const [ loading, setLoading ] = useState(true);
  const [ offset, setOffset ] = useState(0);
  const [ next, setNext ] = useState(true);

  const handleScroll = (event: any) => {
    const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;

    if (Math.ceil(scrollTop + clientHeight) >= scrollHeight && next) {
      setOffset((old) => old + 20)
    }
  }

  const pokemonCount = (pokemonId: string) => {
    const pokemonLength = props.pokemons.filter((pokemon) => pokemon.pokemon?.name === pokemonId).length;
    return pokemonLength > 0 ? `${pokemonLength} catched` : 'No catches';
  }

  useEffect(() => {

    const loadPokemons = async () => {
      setLoading(true);
      const response = (await getPokemonList(offset)).data.pokemons;
      setPokemons(old => [...old, ...response.results]);
      setLoading(false);
      setNext(response.next != null);
    }

    loadPokemons();
  }, [offset]);


  return (
    <HomeBody
      onScroll={handleScroll}
    >
      <List
        loading={loading}
      >
        {
          pokemons.map((data) => (
            <Row
              key={data.id}
            >
              <PokemonCardComponent
                key={data.id}
                pokemonId={data.name}
                subtitle={pokemonCount(data.name)}
                img={data.image}
              />
            </Row>
          ))
        }
      </List>
    </HomeBody>
  );
}