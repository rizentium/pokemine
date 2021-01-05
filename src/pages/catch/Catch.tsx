import React, { useState } from "react";
import StatisticComponent from "../../components/Statistic";
import { CatchBodyPage, CatchBottomPage, CatchContainer, CatchExp } from "../../styles/CatchStyle";
import { CatchActionOnClick } from "./CatchComponent";
import { CatchModalComponent } from "./CatchModalComponent";
import { CatchPokeball } from "./CatchPokeballComponent";
import { CatchPokemon } from "./CatchPokemonComponent";

function CatchPage () {

  const [ totalExp, setTotalExp ] = useState(1);
  const [ currentExp, setCurrentExp ] = useState(1);
  const [ modalVisible, setModalVisible ] = useState(false);

  const updateCurrentExp = (payload: number) => {
    setCurrentExp((old: number) => old + payload);
  }

  return (
    <CatchContainer
      onClick={(event) => CatchActionOnClick(event, currentExp, updateCurrentExp, setModalVisible)}>
		  <CatchBodyPage>
        <CatchExp>
          <StatisticComponent title="EXP" percentage={Math.ceil(currentExp / (totalExp / 100))} />
        </CatchExp>
			  <CatchPokemon updateTotalExp={setTotalExp} updateCurrentExp={setCurrentExp} />
			</CatchBodyPage>
      <CatchBottomPage>
				<CatchPokeball />
			</CatchBottomPage>
      <CatchModalComponent visible={modalVisible} setModalVisible={setModalVisible} />
    </CatchContainer>
  );
}

export default CatchPage;