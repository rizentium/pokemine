import React, { useState } from "react";
import StatisticComponent from "../../components/Statistic";
import { PokemonInterface } from "../../interfaces/Pokemon";
import { CatchBodyPage, CatchBottomPage, CatchContainer, CatchExp } from "../../styles/CatchStyle";
import { CatchActionOnClick } from "./CatchComponent";
import { CatchModalComponent } from "./CatchModalComponent";
import { CatchPokeball } from "./CatchPokeballComponent";
import { CatchPokemon } from "./CatchPokemonComponent";

function CatchPage () {

  const [ pokemon, setPokemon ] = useState<PokemonInterface>();
  const [ totalExp, setTotalExp ] = useState(1);
  const [ currentExp, setCurrentExp ] = useState(1);
  const [ modalVisible, setModalVisible ] = useState(false);

  return (
    <CatchContainer
      onClick={(event) => CatchActionOnClick({
        clickEvent: event,
        currentExp: {
          value: currentExp,
          setCurrentExp: setCurrentExp
        },
        setModelVisible: setModalVisible
      })}>
		  <CatchBodyPage>
        <CatchExp>
          <StatisticComponent
            title="EXP"
            percentage={Math.ceil(currentExp / (totalExp / 100))}
          />
        </CatchExp>
        <CatchPokemon
          updateTotalExp={setTotalExp}
          updateCurrentExp={setCurrentExp}
          pokemon={{value: pokemon, setValue: setPokemon}}
        />
			</CatchBodyPage>
      <CatchBottomPage>
				<CatchPokeball />
			</CatchBottomPage>
      <CatchModalComponent
        visible={modalVisible}
        setModalVisible={setModalVisible}
        pokemon={pokemon}
      />
    </CatchContainer>
  );
}

export default CatchPage;