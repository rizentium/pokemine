import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { ActionButtonComponent } from "../../components/ActionButton";

export const DetailPageBottom = () => {
	const { id } = useParams<{id: string}>();
	const history = useHistory();

	const actionOnClick = () => {
		history.push(`/catch/${id}`);
	}
	
	return (
		<ActionButtonComponent
				onClick={() => actionOnClick()}
		/>
	);
}