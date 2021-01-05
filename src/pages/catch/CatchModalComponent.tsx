import { Input, Modal } from "antd";
import React, { BaseSyntheticEvent, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { setCatchedPokemon } from "../../stores/CatchedPokemon";

interface CatchModalComponentProps {
  visible: boolean,
  setModalVisible: any
}

export const CatchModalComponent = (props: CatchModalComponentProps) => {
	const [ Nickname, setNickname ] = useState('');
	const [ IsNameAllowed, setIsNameAllowed ] = useState(true);
	const { id: pokemonId } = useParams<{id: string}>();
	const history = useHistory();

	const actionOnClick = () => {
		props.setModalVisible(!props.visible);
	}

	const actionOnCatch = async () => {
		const isSuccess = await setCatchedPokemon({
			id: Nickname,
			pokemonId: pokemonId
		})

		if (!isSuccess) {
			setIsNameAllowed(false);
			return;
		}

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