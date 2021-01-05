import React, { useState } from "react";
import { CatchBodyPage, CatchBottomPage, CatchContainer } from "../../styles/CatchStyle";
import { CatchActionOnClick } from "./CatchComponent";
import { CatchModalComponent } from "./CatchModalComponent";
import { CatchPokeball } from "./CatchPokeballComponent";
import { CatchPokemon } from "./CatchPokemonComponent";

function CatchPage () {

  const [ exp, setExp ] = useState(1);
  const [ modalVisible, setModalVisible ] = useState(false);

  const updateExp = (payload: number) => {
    setExp((old: number) => old + payload);
  }

  return (
    <CatchContainer
      onClick={(event) => CatchActionOnClick(event, exp, updateExp, setModalVisible)}>
		  <CatchBodyPage>
			  <CatchPokemon updateExp={updateExp} />
			</CatchBodyPage>
      <CatchBottomPage>
				<CatchPokeball />
			</CatchBottomPage>
      <CatchModalComponent visible={modalVisible} setModalVisible={setModalVisible} />
    </CatchContainer>
  );
}

export default CatchPage;