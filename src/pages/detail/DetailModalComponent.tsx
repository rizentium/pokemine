import { Modal } from "antd";
import React, { Dispatch, SetStateAction } from "react";
import { useHistory } from "react-router-dom";
import { setReleasePokemon } from "../../storages/CatchedPokemon";

interface DetailModalComponentPros {
    visible: {
        value: boolean,
        setVisible: Dispatch<SetStateAction<boolean>>
    },
    catchedPokemonId: string
}

export const DetailModalComponent = (props: DetailModalComponentPros) => {
    const history = useHistory();

    const actionOnRelease = () => {
        setReleasePokemon(props.catchedPokemonId);
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