interface MoveProps {
    title?:string;
}

function TextFormatter(text: string): string {
    return text
        .split('-')
        .map((data) => firstToUppercase(data))
        .reduce((prev, current) => `${prev} ${current}`);
}

function firstToUppercase(text: string): string {
    return text.charAt(0).toUpperCase()+text.slice(1);
}

function MoveComponent(props: MoveProps) {
    return (
        <div>
            <p>{TextFormatter(props.title as string)}</p>
        </div>
    )
}

export default MoveComponent;