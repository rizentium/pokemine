import { List, PageHeader, Row } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import PokemonCardComponent from "../../components/PokemonCard";
import { CatchedPokemonContext } from "../../stores/CatchedPokemon";

function MinePage () {
  const history = useHistory();
  return (
    <div>
      <PageHeader
        title="My Pokemons"
        onBack={() => { history.goBack() }}
      />
      <CatchedPokemonContext.Consumer>
        {
          consumer => (
            <List>
              {
                consumer.map((data, i) => (
                  <Row key={i}>
                    <PokemonCardComponent
                      key={data.id}
                      pokemonId={data.pokemon?.name}
                      catchedId={data.id}
                      subtitle={!data.pokemon?.name ? '' : data.pokemon?.name}
                      img={data.pokemon?.sprites.front_default}
                    />
                  </Row>
                ))
              }
            </List>
          )
        }
      </CatchedPokemonContext.Consumer>
    </div>
  );
}

export default MinePage;