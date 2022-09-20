import './styles.css';

type Props = {
    title: string;
    description: string;
    link: boolean
}

const ResultCard = ( { title, description, link } : Props) => {

    return (
        <div className="result-container">
            <h3 className="result-title">{ title }:&nbsp;</h3>
            {link
                ? <a href={ description } className="link-description" target="_blank" rel="noreferrer" > { description }</a>
                : <p className="result-description">{ description }</p>
            }
        </div>
    );
}

export default ResultCard;
