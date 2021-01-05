import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetail } from "../../api/PokemonApi";
import { PokemonInterface } from "../../interfaces/Pokemon";
import { CatchPokemonImage } from "../../styles/CatchStyle";
import { LoadingOutlined } from "@ant-design/icons";

interface CatchPokemonProps {
  updateExp: (payload: number) => void
}

export const CatchPokemon = (props: CatchPokemonProps) => {
	const [ loading, setLoading ] = useState(true);
  const [ pokemon, setPokemon ] = useState<PokemonInterface>();
  const [ movement, setMovement ] = useState([0,0]);

	const { id } = useParams<{id: string}>();
	
	useEffect(() => {
    const loadPokemon = async () => {
    	setLoading(true);
      const response = (await getPokemonDetail(id)).data.pokemon;
      setPokemon(response);

      // set based health before fight with pokemon
      const health = response.stats.map((data) => data.base_stat).reduce((prev, curr) => prev + curr);
      props.updateExp(!health ? 0 : health);

      setLoading(false);
    }

    loadPokemon();
  }, [id]);

  useEffect(() => {
    const speed = pokemon?.stats.filter(stat => stat.stat.name === 'speed')[0].base_stat;
    const speedToSecond = !speed ? 0 : speed*100;

    setTimeout(() => {
      setMovement([Math.random() * window.innerWidth, Math.random() * window.innerHeight]);
    }, 11000 - speedToSecond)
  }, [movement]);

	return (
		<div>
      {
        loading ?
          (
            <LoadingOutlined />
          ) :
          (
            <CatchPokemonImage
              id="pokemon"
              loading='lazy'
              src={pokemon?.sprites.front_default}
              top={movement[0]}
              left={movement[1]}
            />
          )
      }
    </div>
	);
}