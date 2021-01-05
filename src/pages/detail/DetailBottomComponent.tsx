import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ActionButtonComponent } from "../../components/ActionButton";
import { CatchedPokemonInterface } from "../../interfaces/CatchedPokemon";
import { CatchedPokemonContext } from "../../stores/CatchedPokemon";
import { DetailModalComponent } from "./DetailModalComponent";

export const DetailPageBottom = () => {
  const { id, catchedId } = useParams<{id: string, catchedId: string}>();
  const history = useHistory();
  const [ releasePokemon, setReleasePokemon ] = useState(false);
  const catchedPokemon = useContext(CatchedPokemonContext);

  const actionOnClick = () => {
    if (catchedId !== '=') {
      setReleasePokemon(true);
    } else {
      history.push(`/catch/${id}`);
    }
  }
  
  return (
    <div>
      <ActionButtonComponent
        onClick={() => actionOnClick()}
      />
      <DetailModalComponent
        visible={{
          value: releasePokemon,
          setVisible: setReleasePokemon
        }}
        catchedPokemonId={catchedId}
        catchedPokemon={catchedPokemon}
      />
    </div>
  );
}