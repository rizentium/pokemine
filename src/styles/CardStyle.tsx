import styled from "@emotion/styled";

interface CardContainerProps {
  borderless?: boolean,
  nopadding?: boolean,
  nomargin?: boolean
}

export const CardContainer = styled.div((props: CardContainerProps) => ({
  padding: !props.nopadding ? '0.5em 1em' : '0',
  margin: !props.nomargin ? '0.25em 1.5em' : '0',
  border: '0.1em',
  width: '100%',
  borderRadius: '0.5em',
  boxShadow: !props.borderless ? '0.05em 0.05em 0.2em #b8b8b8' : 'none',
  display: 'flex'
}));

export const CardBody = styled.span({
  alignSelf: 'center'
})

export const CardTitle = styled.p({
  margin: 0,
  fontWeight: 500,
  fontSize: '1.25em',
  alignSelf: 'center'
});

export const CardTitleTrailing = styled.span({
  textAlign: 'right'
});

export const CardSubtitle = styled.p({
  margin: 0,
  fontWeight: 500,
  fontSize: '0.75em',
  color: '#9a9a9a'
});

export const CardTrailing = styled.span({
  alignSelf: 'center',
  width: '100%',
  textAlignLast: 'right'
});