import './styles.css';

type Props = {
    url: string;
    profileName: string
}

const ImageCard = ({ url, profileName }: Props) => {
    return (
        <div className="image-container">
            <img src={ url } alt={ profileName } />
        </div>
    )
}

export default ImageCard;
