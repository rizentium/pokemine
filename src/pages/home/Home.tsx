import { Badge, Button, PageHeader } from "antd";
import { HeartFilled } from "@ant-design/icons";
import React from "react";
import logo from '../../assets/imgs/logo.png';
import { CatchedPokemonContext } from "../../stores/CatchedPokemon";
import { HomePageBody } from "./HomeBodyComponent";
import { useHistory } from "react-router-dom";

function HomePage () {
  const history = useHistory();

  const toMinePage = () => {
    history.push('/mine');
  }

  return (
    <CatchedPokemonContext.Consumer>
      {
        consumer => (
          <div>
            <PageHeader
              avatar={{ src: logo }}
              title="Pokemine"
              extra={[
                <Badge
                  key="favoritedPokemon"
                  count={consumer.length}
                  overflowCount={10}
                >
                  <Button
                    onClick={toMinePage}
                    type="primary"
                    shape="circle"
                    icon={<HeartFilled />}
                  />
                </Badge>
              ]}
            />
            <HomePageBody pokemons={consumer} />
          </div>
        )
      }
    </CatchedPokemonContext.Consumer>
  );
}

export default HomePage;