import { Button } from "antd";
import React from "react"
import { ActionButton, ActionButtonContainer } from "../styles/ActionButtonStyle"
import { PokeballIcon } from "./Pokeball";

interface ActionButtonComponentProps {
    onClick: () => void;
}

const ButtonStyle = {
    boxShadow: '0.05em 0.05em 0.2em #b8b8b8'
};

export const ActionButtonComponent = (props: ActionButtonComponentProps) => {
    return (
        <ActionButtonContainer>
            <ActionButton onClick={() => props.onClick()}>
                <Button style={ButtonStyle} type="primary" shape="circle" icon={<PokeballIcon />} size="large" />
            </ActionButton>
        </ActionButtonContainer>
    )
}