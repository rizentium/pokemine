import React from "react";
import { useHistory } from "react-router-dom";
import logo from '../assets/imgs/logo.png';
import { CardBody, CardContainer, CardSubtitle, CardTitle, CardTrailing } from "../styles/CardStyle";

interface PokemonCardProps {
  title: string;
  subtitle: string;
  img?: string;
}


function PokemonCardComponent (props: PokemonCardProps) {
  const history = useHistory();

  const OnClick = () => {
    history.push(`/detail/${props.title}`);
  };

  return (
    <CardContainer onClick={OnClick}>
      <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
      </CardBody>
      <CardTrailing>
        <img
          onError={(event) => (event.target as any).src = logo}
          src={props.img}
          height="50em"
          alt={props.title}
        />
      </CardTrailing>
    </CardContainer>
  )
}

export default PokemonCardComponent;