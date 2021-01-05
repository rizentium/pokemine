import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetail } from "../../api/PokemonApi";
import { PokemonInterface } from "../../interfaces/Pokemon";
import { CatchPokemonImage } from "../../styles/CatchStyle";
import { LoadingOutlined } from "@ant-design/icons";

interface CatchPokemonProps {
  updateTotalExp: (payload: number) => void,
  updateCurrentExp: any,
  pokemon: {
    value: PokemonInterface | undefined;
    setValue: Dispatch<SetStateAction<PokemonInterface | undefined>>;
  }
}

export const CatchPokemon = (props: CatchPokemonProps) => {
	const [ loading, setLoading ] = useState(true);
  const [ movement, setMovement ] = useState([0,0]);

	const { id } = useParams<{id: string}>();
	
	useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      const response = (await getPokemonDetail(id)).data.pokemon;
      props.pokemon.setValue(response);

      // set based health before fight with pokemon
      const health = response.stats.map((data) => data.base_stat).reduce((prev, curr) => prev + curr);
      props.updateTotalExp(!health ? 0 : health);
      props.updateCurrentExp(!health ? 0 : health);

      setLoading(false);
    }

    loadPokemon();
  }, [id]);

  useEffect(() => {
    const speed = props.pokemon.value?.stats.filter(stat => stat.stat.name === 'speed')[0].base_stat;
    // 10000 is default number to reduce 10000 default second
    const speedToSecond = !speed ? 10000 : speed*100;

    setTimeout(() => {
      setMovement([Math.random() * window.innerWidth, Math.random() * (window.innerHeight/2)]);
    }, 10000 - speedToSecond)
  }, [movement]);

  return loading ?
    (
      <div style={{
        textAlign: "center"
      }}>
        <LoadingOutlined />
      </div>
    ) :
    (
      <CatchPokemonImage
        id="pokemon"
        loading='lazy'
        src={props.pokemon.value?.sprites.front_default}
        top={movement[0]}
        left={movement[1]}
      />
    );
}