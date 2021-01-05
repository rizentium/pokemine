import { Progress } from "antd";
import { StatisticContainer, StatisticTitle } from "../styles/StatisticStyle";

interface StatisticComponentInterface {
    title?: string;
    percentage?:number;
}

function StatisticColor (percentage: number) {
    switch (true) {
        case percentage > 75:
            return '#4CAF50';
        case percentage > 50:
            return '#2196F3';
        case percentage > 25:
            return '#FFC107';
        default:
            return '#f44336';
    }
}


function StatisticComponent (props: StatisticComponentInterface) {
    return (
        <StatisticContainer>
            <StatisticTitle>{props.title}</StatisticTitle>
		    <Progress percent={props.percentage} size="small" status="active" strokeColor={StatisticColor(props.percentage ? props.percentage : 0)}/>
        </StatisticContainer>
    );
}

export default StatisticComponent;