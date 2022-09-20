import './styles.css';

type Props = {
    text: string;
}

const ButtonCustom = ({ text }: Props) => {
    return (
        <div className="btn-container">
            <button className="btn  btn-primary btn-custom">
                <h6>{ text }</h6>
            </button>
        </div>
    )
}

export default ButtonCustom;
