import { Modal } from "antd";
import React, { Dispatch, SetStateAction } from "react";
import { useHistory } from "react-router-dom";
import { CatchedPokemonInterface } from "../../interfaces/CatchedPokemon";
import { getCatchedPokemons, setReleasePokemon } from "../../storages/CatchedPokemon";

interface DetailModalComponentPros {
    visible: {
        value: boolean,
        setVisible: Dispatch<SetStateAction<boolean>>
    },
    catchedPokemonId: string;
    catchedPokemon: CatchedPokemonInterface[];
}

export const DetailModalComponent = (props: DetailModalComponentPros) => {
    const history = useHistory();

    const actionOnRelease = async () => {
      setReleasePokemon(props.catchedPokemonId);
      
      const updatedCatched = (await getCatchedPokemons()).filter(data => !data.releasedAt);
      props.catchedPokemon.length = 0;
      props.catchedPokemon.push(...updatedCatched);

      history.goBack();
    }
    const actionOnCancel = () => {
        props.visible.setVisible(false);
    }
    return (
        <Modal
          title="Release Pokemon"
          visible={props.visible.value}
          onOk={() => actionOnRelease()}
          okText='Yes'
          cancelText='No'
          onCancel={() => actionOnCancel()}
        >
          <p>Are you sure want to release your pokemon?</p>
        </Modal>
      );
}