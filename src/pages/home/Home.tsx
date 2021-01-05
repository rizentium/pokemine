import { Badge, Button, PageHeader } from "antd";
import { HeartFilled } from "@ant-design/icons";
import React from "react";
import logo from '../../assets/imgs/logo.png';
import { CatchedPokemonContext } from "../../stores/CatchedPokemon";
import { HomePageBody } from "./HomeBodyComponent";

function HomePage () {
  return (
    <CatchedPokemonContext.Consumer>
      {
        catchedPokemons => (
          <div>
            <PageHeader
              avatar={{ src: logo }}
              title="Pokemine"
              extra={[
                <Badge
                  key="favoritedPokemon"
                  count={catchedPokemons.length}
                  overflowCount={10}
                >
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<HeartFilled />}
                  />
                </Badge>
              ]}
            />
            <HomePageBody pokemons={catchedPokemons} />
          </div>
        )
      }
    </CatchedPokemonContext.Consumer>
  );
}

export default HomePage;