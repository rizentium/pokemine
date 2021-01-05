import React from "react";
import { useHistory } from "react-router-dom";
import logo from '../assets/imgs/logo.png';
import { CardBody, CardContainer, CardSubtitle, CardTitle, CardTrailing } from "../styles/CardStyle";

interface PokemonCardProps {
  pokemonId?: string;
  catchedId?: string;
  subtitle: string;
  img?: string;
}


function PokemonCardComponent (props: PokemonCardProps) {
  const history = useHistory();

  const OnClick = () => {
    history.push(`/detail/${props.pokemonId}/${!props.catchedId ? '=' : props.catchedId}`);
  };

  return (
    <CardContainer onClick={OnClick}>
      <CardBody>
        {
          !props.catchedId ?
            (
              <div>
                <CardTitle>{props.pokemonId}</CardTitle>
                <CardSubtitle>{props.subtitle}</CardSubtitle>
              </div>
            ) :
            (
              <div>
                <CardTitle>{props.catchedId}</CardTitle>
                <CardSubtitle>{props.pokemonId}</CardSubtitle>
              </div>
            )
        }
      </CardBody>
      <CardTrailing>
        <img
          onError={(event) => (event.target as any).src = logo}
          src={props.img}
          height="50em"
          alt={props.pokemonId}
        />
      </CardTrailing>
    </CardContainer>
  )
}

export default PokemonCardComponent;