import { Input, Modal } from "antd";
import React, { BaseSyntheticEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { CatchedPokemonInterface } from "../../interfaces/CatchedPokemon";
import { PokemonInterface } from "../../interfaces/Pokemon";
import { setCatchedPokemon } from "../../storages/CatchedPokemon";

interface CatchModalComponentProps {
  visible: boolean,
  setModalVisible: any,
  pokemon: PokemonInterface | undefined,
  catchedPokemons: CatchedPokemonInterface[];
}

export const CatchModalComponent = (props: CatchModalComponentProps) => {
  const [ Nickname, setNickname ] = useState('');
  const [ IsNameAllowed, setIsNameAllowed ] = useState(true);
  const history = useHistory();

  const actionOnClick = () => {
    props.setModalVisible(!props.visible);
  }

  const actionOnCatch = async () => {
    const isSuccess = await setCatchedPokemon({
      id: Nickname,
      pokemon: props.pokemon
    })

    if (!isSuccess) {
      setIsNameAllowed(false);
      return;
    }

    props.catchedPokemons.push(isSuccess);
    actionOnClick();
    setNickname('');
    actionOnCancel();
  }

  const actionOnCancel = () => {
    props.setModalVisible(false);
    history.goBack();
  }

  const inputOnChange = (event: BaseSyntheticEvent) => {
    setNickname(event.target.value)
  }
  
  return (
    <Modal
      title="Catch Pokemon"
      visible={props.visible}
      onOk={() => actionOnCatch()}
      okText='Catch'
      cancelText='Release'
      onCancel={() => actionOnCancel()}
    >
      <Input
        placeholder="Set Your Pokemon Name"
        onChange={inputOnChange}
      />
      {
        !IsNameAllowed && (<small>Name is already exist, please use another name</small>)
      }
    </Modal>
  );
}