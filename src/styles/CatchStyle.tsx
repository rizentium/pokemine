import styled from "@emotion/styled";

export const CatchContainer = styled.div({
    height: '100%',
		width: '100%',
		position: 'relative'
});

export const CatchBodyPage = styled.div({
	position: 'fixed',
	top: 0,
	width: '100%',
	height: '100%',
	border: '#0000000d',
	borderWidth: '0.1em 0 0 0',
	borderStyle: 'solid',
	padding: '0.5em'
});

export const CatchBottomPage = styled.div({
	position: 'fixed',
	bottom: 0,
	width: '100%',
	height: '5em',
	border: '#0000000d',
	borderWidth: '0.1em 0 0 0',
	borderStyle: 'solid',
	padding: '0.5em',
	textAlignLast: 'center'
});

interface CatchPokemonImageProps {
	top: number;
	left: number;
};

export const CatchPokemonImage = styled.img((props: CatchPokemonImageProps) => ({
	height: '150px',
	width: '150px',
	top: props.top,
	left: props.left,
	position: 'fixed'
}));

export const CatchExp = styled.div({
	margin: '0.5em 1em'
})