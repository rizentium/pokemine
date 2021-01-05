import { Divider, List, Row } from "antd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetail } from "../../api/PokemonApi";
import MoveComponent from "../../components/Move";
import StatisticComponent from "../../components/Statistic";
import { PokemonInterface } from "../../interfaces/Pokemon";
import { CardContainer, CardBody, CardTitle, CardSubtitle, CardTrailing } from "../../styles/CardStyle";
import { DetailBody, DetailLastRow } from "../../styles/DetailStyle";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

export const DetailPageBody = () => {
  const [ loading, setLoading ] = useState(true);
	const [ pokemon, setPokemon ] = useState<PokemonInterface>();
	const [ showMoves, setShowMoves ] = useState<number>(3);
	const { id } = useParams<{id: string}>();
		
	const showMoveSection = () => {
		const moveLength = pokemon?.moves.length ? pokemon.moves.length : 0;
		setShowMoves( showMoves > 3 ? 3 : moveLength);
	}

  useEffect(() => {

    const loadPokemon = async () => {
    	setLoading(true);
      const response = (await getPokemonDetail(id)).data.pokemon;
      setPokemon(response);
      setLoading(false);
    }

    loadPokemon();
  }, [id])

  return (
    <DetailBody>
    	<List loading={loading}>
      	<Row>
					<CardContainer
						borderless
						nopadding
						nomargin
					>
						<CardBody>
							<CardTitle>
								{pokemon?.name}
							</CardTitle>
							<CardSubtitle>
								{pokemon?.height ? `${pokemon?.height}"/ ` : ''}
								{pokemon?.weight ? `${pokemon?.weight} Kg` : ''}
							</CardSubtitle>
						</CardBody>
						<CardTrailing>
							<img
								src={pokemon?.sprites.front_default}
								height="50em"
								alt={pokemon?.name}
							/>
						</CardTrailing>
					</CardContainer>
				</Row>
				<Divider />
				<div>
					<h3>Statistics</h3>
						{
							pokemon?.stats.map(
								(data, i) => (<StatisticComponent key={i} title={data.stat.name} percentage={data.base_stat} />)
							)
						}
				</div>
				<Divider />
				<div>
					<h3>Moves</h3>
						{
							pokemon?.moves
								.map(
									(data, i) => (<MoveComponent key={i} title={data.move.name} />)
								)
								.filter(
									(data, i) => i < showMoves
								)
						}
					<DetailLastRow onClick={() => showMoveSection()}>
						{
							showMoves > 3 ? (<UpOutlined />) : (<DownOutlined />)
						}
					</DetailLastRow>
				</div>
      </List>
    </DetailBody>
  );
}